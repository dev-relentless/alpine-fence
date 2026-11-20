/**
 * Bilingual copy for the one-page site. `en` is the default server-rendered
 * language; `es` is applied client-side via the header slider (LangToggle).
 * Guest review quotes are translated for display only — the verbatim English
 * originals live in src/data/reviews.ts and are what ships in JSON-LD.
 */
export type Lang = 'en' | 'es';

export const SMS_BODY: Record<Lang, string> = {
  en: "Hi Vitalea — I'd like to book a session.",
  es: 'Hola Vitalea — quisiera reservar una sesión.',
};

export const STRINGS = {
  en: {
    nav: {
      services: 'Services',
      couples: 'Couples',
      about: 'About',
      reviews: 'Reviews',
      visit: 'Visit',
    },
    hero: {
      ratingPill: 'on Google',
      h1a: 'Step out of the noise.',
      h1b: 'Sink into the hour.',
      sub: 'A private wellness sanctuary in Draper, Utah — therapeutic massage, hydrofacials, lymphatic drainage, and reflexology, crafted around one guest (or one couple) at a time.',
      ctaText: 'Text to book',
      ctaCall: 'Call',
      note: 'By appointment only',
    },
    ribbon: ['Vitalea Spa & Beauty', 'Tu Vitalidad es mi Inspiración', '4.9 ★ on Google', 'One guest at a time', 'Draper · Utah'],
    services: {
      eyebrow: 'The menu',
      h2: 'Treatments & pricing',
      sub: 'Every session is one-on-one with Karol Natalia. Couples share the dedicated two-table suite — same hour, side by side.',
      duration: 'Duration',
      solo: 'Solo',
      couple: 'Couple',
      mostBooked: 'Most booked',
      book: 'Book',
      from: 'from',
    },
    couples: {
      eyebrow: 'Couples & celebrations',
      h2: 'Date night, side by side.',
      body: 'The couples suite keeps two tables in one softly lit room — rose petals, warm robes, and the same unhurried hour, shared. Anniversaries, birthdays, girls’ days, or a long-overdue reset for two: tell us the occasion and the room will be ready for it.',
      bullets: [
        'Private two-table suite — never a shared hallway',
        'Rose-petal and celebration styling on request',
        'Every service on the menu is available as a couples session',
      ],
      cta: 'Plan a couples session',
    },
    experience: {
      eyebrow: 'The experience',
      h2: 'Details you can feel.',
      sub: 'Warm tables, quiet rooms, and a treatment adjusted to what your body says that day — not a laminated protocol.',
      captions: ['Hot-stone ritual', 'Rose-petal details', 'The garden room'],
    },
    about: {
      eyebrow: 'About',
      h2: 'Built around one pair of hands.',
      p1: 'Vitalea is not a franchise and does not run on a timer. Founder Karol Natalia opened the studio in Draper to practice the way she believes bodywork should be done: one guest at a time, a real conversation before the first stroke, and a treatment adjusted to what your body says that day.',
      p2: 'More than six hundred Draper-area clients have made the studio part of their routine — from marathon recovery to post-surgical lymphatic care to a standing Friday unwind.',
    },
    reviews: {
      eyebrow: 'In their words',
      h2: 'Guests keep coming back.',
      badge: 'reviews on Google',
      verified: 'Verified Google review',
    },
    gallery: {
      eyebrow: 'Inside the studio',
      h2: 'Moments at Vitalea',
    },
    visit: {
      eyebrow: 'Visit',
      h2: 'Find the studio',
      address: 'Address',
      directions: 'Get directions →',
      hoursLabel: 'Hours',
      hours1: 'Mon–Sat · 9am – 7pm',
      hours2: 'Sunday · by appointment',
      book: 'Book',
      cta: 'Text to book',
    },
    footer: {
      serving: 'Serving',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      couples: 'Parejas',
      about: 'Nosotros',
      reviews: 'Reseñas',
      visit: 'Visítanos',
    },
    hero: {
      ratingPill: 'en Google',
      h1a: 'Deja el ruido atrás.',
      h1b: 'Entrégate a tu hora.',
      sub: 'Un santuario privado de bienestar en Draper, Utah — masaje terapéutico, hidrofaciales, drenaje linfático y reflexología, dedicados a un solo huésped (o una pareja) a la vez.',
      ctaText: 'Reserva por mensaje',
      ctaCall: 'Llama al',
      note: 'Solo con cita previa',
    },
    ribbon: ['Vitalea Spa & Beauty', 'Tu Vitalidad es mi Inspiración', '4.9 ★ en Google', 'Un huésped a la vez', 'Draper · Utah'],
    services: {
      eyebrow: 'El menú',
      h2: 'Tratamientos y precios',
      sub: 'Cada sesión es uno a uno con Karol Natalia. Las parejas comparten la suite de dos camillas — la misma hora, lado a lado.',
      duration: 'Duración',
      solo: 'Individual',
      couple: 'Pareja',
      mostBooked: 'El más reservado',
      book: 'Reserva',
      from: 'desde',
    },
    couples: {
      eyebrow: 'Parejas y celebraciones',
      h2: 'Noche de pareja, lado a lado.',
      body: 'La suite de parejas mantiene dos camillas en una sala de luz suave — pétalos de rosa, batas cálidas y la misma hora sin prisas, compartida. Aniversarios, cumpleaños, días de amigas o un descanso en pareja largamente esperado: cuéntanos la ocasión y la sala estará lista.',
      bullets: [
        'Suite privada de dos camillas — nunca un pasillo compartido',
        'Decoración con pétalos de rosa y celebraciones a pedido',
        'Todos los servicios del menú están disponibles en pareja',
      ],
      cta: 'Planea una sesión en pareja',
    },
    experience: {
      eyebrow: 'La experiencia',
      h2: 'Detalles que se sienten.',
      sub: 'Camillas tibias, salas tranquilas y un tratamiento ajustado a lo que tu cuerpo dice ese día — no a un protocolo plastificado.',
      captions: ['Ritual de piedras calientes', 'Detalles de pétalos de rosa', 'La sala jardín'],
    },
    about: {
      eyebrow: 'Nosotros',
      h2: 'Construido alrededor de un par de manos.',
      p1: 'Vitalea no es una franquicia y no funciona con cronómetro. Su fundadora, Karol Natalia, abrió el estudio en Draper para ejercer el masaje como cree que debe hacerse: un huésped a la vez, una conversación real antes del primer movimiento y un tratamiento ajustado a lo que tu cuerpo dice ese día.',
      p2: 'Más de seiscientos clientes del área de Draper han hecho del estudio parte de su rutina — desde la recuperación de maratones hasta el cuidado linfático postquirúrgico o el desahogo fijo de los viernes.',
    },
    reviews: {
      eyebrow: 'En sus palabras',
      h2: 'Nuestros huéspedes siempre vuelven.',
      badge: 'reseñas en Google',
      verified: 'Reseña verificada de Google',
    },
    gallery: {
      eyebrow: 'Dentro del estudio',
      h2: 'Momentos en Vitalea',
    },
    visit: {
      eyebrow: 'Visítanos',
      h2: 'Encuentra el estudio',
      address: 'Dirección',
      directions: 'Cómo llegar →',
      hoursLabel: 'Horario',
      hours1: 'Lun–Sáb · 9am – 7pm',
      hours2: 'Domingo · con cita previa',
      book: 'Reservas',
      cta: 'Reserva por mensaje',
    },
    footer: {
      serving: 'Atendemos',
    },
  },
} as const;

export type Strings = (typeof STRINGS)['en'];

/** Spanish names + blurbs for the service menu, keyed by service id. */
export const SERVICES_ES: Record<string, { name: string; blurb: string }> = {
  vip: {
    name: 'Masaje VIP',
    blurb:
      'Nuestra sesión insignia de cuerpo completo. Karol combina técnicas suecas, de tejido profundo y linfáticas según lo que tu cuerpo necesita ese día — sin guiones fijos ni prisas con el reloj.',
  },
  hydrafacial: {
    name: 'Hidrofacial',
    blurb:
      'Limpieza profunda, exfoliación suave e infusión de sueros hidratantes que deja la piel visiblemente más luminosa en una sola hora — apto incluso para piel sensible.',
  },
  hydrafacialPlus: {
    name: 'Hidrofacial Avanzado',
    blurb:
      'El hidrofacial completo extendido a noventa minutos con aparatología adicional — para piel apagada, congestionada o cansada que necesita más que mantenimiento.',
  },
  lymphatic: {
    name: 'Drenaje Linfático',
    blurb:
      'Movimientos ligeros y rítmicos que movilizan el líquido retenido — favorito para la hinchazón, la retención de líquidos y la recuperación postquirúrgica (con autorización de tu cirujano).',
  },
  reflexology: {
    name: 'Reflexología',
    blurb:
      'Trabajo de puntos de presión en los pies que alivia la tensión mucho más allá de ellos. El cierre perfecto para una semana larga de pie.',
  },
  paraffin: {
    name: 'Tratamiento de Parafina',
    blurb:
      'Envolturas de parafina tibia para manos o pies — calor profundo y duradero que suaviza la piel y calma articulaciones rígidas y adoloridas.',
  },
};

/** Display-only Spanish translations of the Google reviews, index-aligned with REVIEWS. */
export const REVIEWS_ES: string[] = [
  'Karol y Karol son maravillosas y muy amables. ¡Mi masaje fue relajante, terapéutico y rejuvenecedor! ¡Totalmente recomendado!',
  'La mejor experiencia — personal muy amable y con mucho conocimiento. Los precios son accesibles y el servicio es excelente. Recomendado para cualquiera que busque un gran día de spa — perfecto para parejas.',
  'Amo este lugar ♥ el mejor servicio, TOP. Los mejores masajes de Utah.',
  'Un lugar cálido y relajante. La esteticista fue profesional y atenta. El masaje facial fue perfecto, aliviando toda la tensión de mi frente y mis ojos. Productos de alta calidad que marcaron la diferencia.',
  'El lugar es muy limpio, silencioso y con un aroma relajante desde que entras. El personal fue amable y profesional. Tuve un masaje relajante de una hora y salí renovada.',
];
