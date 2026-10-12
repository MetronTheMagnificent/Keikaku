export interface Business {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  website?: string;
  services: string[];
  hours: string;
  active: boolean;
}

export const businesses: Business[] = [
  {
    slug: 'la-catrina-mty',
    name: 'La Catrina Cocina Mexicana',
    tagline: 'Sabores auténticos del norte de México',
    description:
      'Restaurante familiar con más de 15 años ofreciendo la mejor cocina del norte en el corazón de Monterrey. Especialidades en cabrito al pastor, machaca con huevo, discada y cortes de res. Amplio salón con capacidad para 120 personas, ideal para reuniones familiares y eventos corporativos.',
    category: 'Restaurantes',
    city: 'Monterrey',
    phone: '+52 81 8123 4567',
    whatsapp: '528181234567',
    email: 'reservaciones@lacatrinamty.mx',
    services: ['Cabrito al pastor', 'Cortes de res', 'Machaca con huevo', 'Eventos privados', 'Servicio a domicilio'],
    hours: 'Lun–Dom 8:00 am – 10:00 pm',
    active: true,
  },
  {
    slug: 'taller-gutierrez',
    name: 'Taller Mecánico Gutiérrez',
    tagline: 'Tu auto en las mejores manos desde 2005',
    description:
      'Taller mecánico de confianza en San Nicolás con más de 20 años de experiencia. Contamos con diagnóstico computarizado de última generación, mecánicos certificados y garantía escrita en todos los servicios. Especializados en todas las marcas, sin cobros sorpresa.',
    category: 'Automotriz',
    city: 'San Nicolás de los Garza',
    phone: '+52 81 8234 5678',
    whatsapp: '528182345678',
    email: 'servicio@tallergutierrez.mx',
    services: ['Diagnóstico computarizado', 'Frenos y suspensión', 'Cambio de aceite', 'Hojalatería y pintura', 'Afinación motor'],
    hours: 'Lun–Vie 8:00 am – 6:00 pm · Sáb 9:00 am – 2:00 pm',
    active: true,
  },
  {
    slug: 'dental-nova',
    name: 'Clínica Dental Nova',
    tagline: 'Sonríe con confianza, cuídate con tecnología',
    description:
      'Clínica dental moderna en Monterrey con tecnología digital de vanguardia. Nuestro equipo de cirujanos dentistas especializados ofrece desde limpiezas y blanqueamiento hasta implantes dentales y ortodoncia invisible. Atención cálida, precios transparentes y planes de pago accesibles.',
    category: 'Salud',
    city: 'Monterrey',
    phone: '+52 81 8345 6789',
    whatsapp: '528183456789',
    email: 'citas@dentalnova.mx',
    services: ['Limpieza dental', 'Blanqueamiento', 'Ortodoncia invisible', 'Implantes dentales', 'Urgencias dentales'],
    hours: 'Lun–Vie 9:00 am – 7:00 pm · Sáb 9:00 am – 2:00 pm',
    active: true,
  },
  {
    slug: 'fitness-zone-gpe',
    name: 'Fitness Zone Guadalupe',
    tagline: 'Tu mejor versión empieza aquí',
    description:
      'El gimnasio mejor equipado de Guadalupe, NL. Más de 500 máquinas de última generación, área de pesas libre, zona de cardio, clases grupales diarias (spinning, yoga, crossfit), alberca semiolímpica y entrenadores certificados. Membresías sin cláusulas de permanencia.',
    category: 'Deporte & Fitness',
    city: 'Guadalupe',
    phone: '+52 81 8456 7890',
    whatsapp: '528184567890',
    email: 'membresias@fitnesszonegl.mx',
    services: ['Área de pesas', 'Clases grupales', 'Spinning', 'Entrenamiento personal', 'Alberca semiolímpica'],
    hours: 'Lun–Vie 5:00 am – 11:00 pm · Sáb–Dom 7:00 am – 9:00 pm',
    active: true,
  },
  {
    slug: 'despacho-reyes',
    name: 'Despacho Contable Reyes',
    tagline: 'Contabilidad y fiscal sin complicaciones',
    description:
      'Despacho contable y fiscal con 25 años atendiendo a empresas y personas físicas en Nuevo León. Expertos en SAT, IMSS, Infonavit y constitución de empresas. Más de 300 clientes activos. Entregamos reportes claros, respondemos dudas el mismo día y te representamos ante el SAT si es necesario.',
    category: 'Servicios Profesionales',
    city: 'San Pedro Garza García',
    phone: '+52 81 8567 8901',
    whatsapp: '528185678901',
    email: 'info@despachoreyes.mx',
    services: ['Declaraciones fiscales ISR/IVA', 'Contabilidad mensual', 'Nóminas y IMSS', 'Constitución de empresas', 'Asesoría SAT'],
    hours: 'Lun–Vie 9:00 am – 6:00 pm',
    active: true,
  },
];

export const categories = [
  'Todos',
  'Restaurantes',
  'Automotriz',
  'Salud',
  'Deporte & Fitness',
  'Servicios Profesionales',
  'Tecnología',
  'Educación',
  'Hogar & Construcción',
  'Belleza & Cuidado Personal',
];

export const categoryColors: Record<string, { bg: string; text: string }> = {
  'Restaurantes':             { bg: '#fff7ed', text: '#c2410c' },
  'Automotriz':               { bg: '#eff6ff', text: '#1d4ed8' },
  'Salud':                    { bg: '#f0fdf4', text: '#15803d' },
  'Deporte & Fitness':        { bg: '#faf5ff', text: '#7e22ce' },
  'Servicios Profesionales':  { bg: '#eef2ff', text: '#4338ca' },
  'Tecnología':               { bg: '#ecfdf5', text: '#047857' },
  'Educación':                { bg: '#fefce8', text: '#a16207' },
  'Hogar & Construcción':     { bg: '#fef2f2', text: '#b91c1c' },
  'Belleza & Cuidado Personal': { bg: '#fdf2f8', text: '#a21caf' },
};

export function getCategoryColor(cat: string) {
  return categoryColors[cat] ?? { bg: '#f1f5f9', text: '#475569' };
}
