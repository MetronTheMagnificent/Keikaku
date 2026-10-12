import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { slug, bizName, bizEmail, type, nombre, telefono, email, mensaje } = body;

  const gmailUser = import.meta.env.GMAIL_USER;
  const gmailPass = import.meta.env.GMAIL_APP_PASSWORD;

  if (gmailUser && gmailPass) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailPass },
    });

    const isForm = type === 'form';
    const subject = isForm
      ? `🔔 Nuevo lead (formulario): ${bizName}`
      : `🔔 Click de contacto (${type}): ${bizName}`;

    const html = isForm
      ? `<h2>Nuevo lead — ${bizName}</h2>
         <p><b>Tipo:</b> Formulario de contacto</p>
         <p><b>Negocio:</b> ${bizName} (<code>${slug}</code>)</p>
         <hr/>
         <p><b>Nombre visitante:</b> ${nombre ?? '—'}</p>
         <p><b>Teléfono:</b> ${telefono ?? '—'}</p>
         <p><b>Email:</b> ${email ?? '—'}</p>
         <p><b>Mensaje:</b> ${(mensaje ?? '').replace(/\n/g, '<br/>')}</p>`
      : `<h2>Click de contacto — ${bizName}</h2>
         <p><b>Tipo:</b> ${type}</p>
         <p><b>Negocio:</b> ${bizName} (<code>${slug}</code>)</p>
         <p><b>Hora:</b> ${new Date().toLocaleString('es-MX', { timeZone: 'America/Monterrey' })}</p>`;

    await transporter.sendMail({
      from: `"Keikaku Directorio" <${gmailUser}>`,
      to: 'keikakuconsulting@gmail.com',
      subject,
      html,
    });

    // Also notify the business if it's a form lead
    if (isForm && bizEmail) {
      await transporter.sendMail({
        from: `"Keikaku Directorio" <${gmailUser}>`,
        to: bizEmail,
        replyTo: email ?? undefined,
        subject: `Nuevo contacto desde tu perfil en Keikaku`,
        html: `<h2>Tienes un nuevo contacto en Keikaku</h2>
               <p><b>Nombre:</b> ${nombre ?? '—'}</p>
               <p><b>Teléfono:</b> ${telefono ?? '—'}</p>
               <p><b>Email:</b> ${email ?? '—'}</p>
               <p><b>Mensaje:</b> ${(mensaje ?? '').replace(/\n/g, '<br/>')}</p>
               <hr/>
               <p style="color:#888;font-size:12px">Mensaje enviado a través de Keikaku — Directorio de Negocios NL</p>`,
      }).catch(() => {});
    }
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
