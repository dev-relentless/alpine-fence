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

export type OfferKey = 'giftCards' | 'membership' | 'packages';

export const OFFER_SMS: Record<OfferKey, Record<Lang, string>> = {
  giftCards: {
    en: "Hi Vitalea — I'd like to buy a gift card.",
    es: 'Hola Vitalea — quisiera comprar una tarjeta de regalo.',
  },
  membership: {
    en: "Hi Vitalea — I'd like to know more about the membership.",
    es: 'Hola Vitalea — quisiera saber más sobre la membresía.',
  },
  packages: {
    en: "Hi Vitalea — I'd like to know more about packages and add-ons.",
    es: 'Hola Vitalea — quisiera saber más sobre los paquetes y complementos.',
  },
};

export const STRINGS = {
  en: {
    nav: {
      services: 'Services',
      couples: 'Couples',
      about: 'About',
      reviews: 'Reviews',
      visit: 'Visit',
      faq: 'FAQ',
      giftCards: 'Gift Cards',
      membership: 'Membership',
      packages: 'Packages',
      menu: 'Menu',
    },
    cta: {
      book: 'Book now',
      giftCards: 'Gift cards',
      comingSoon: 'Coming soon',
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
      via: 'via Google',
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
    },
    faq: {
      eyebrow: 'Before you visit',
      h1: 'Questions, answered.',
      sub: 'Booking, pricing, couples sessions, and treatments at the studio in Draper.',
      ctaEyebrow: 'Still wondering?',
      ctaH2: 'Ask the studio directly.',
      ctaBody: 'Text or call with your question — or with the treatment and time you have in mind.',
    },
    more: {
      eyebrow: 'Gifts, membership & packages',
      h2: 'More than a single visit.',
      sub: 'Gift an hour, make it a monthly ritual, or line up a series of sessions.',
      giftCards: {
        title: 'Gift cards',
        body: 'An hour of quiet for someone you love — good toward any treatment on the menu, solo or couples.',
        link: 'Give a gift card',
      },
      membership: {
        title: 'Membership',
        body: 'A VIP Massage hour every month, with member pricing on everything else.',
        link: 'See membership',
      },
      packages: {
        title: 'Packages & add-ons',
        body: 'VIP Massage series, plus finishing touches like hot stone and aromatherapy.',
        link: 'See packages',
      },
    },
    giftCards: {
      eyebrow: 'Gift cards',
      h1: 'Give an hour of quiet.',
      sub: 'A Vitalea gift card is good toward any treatment on the menu — a massage, a facial, or a couples hour in the private suite.',
      cta: 'Buy a gift card',
      ctaText: 'Text to buy a gift card',
      promoLabel: 'Holiday bonus',
      promo: 'Buy $100 in gift cards and get a $20 bonus card. Bonus cards are valid January 2 – March 31. Offer ends November 30.',
      ideasEyebrow: 'Gift ideas',
      ideasH2: 'What a gift card covers',
      ideasSub: 'Match the amount to the treatment you have in mind.',
      points: [
        'Good toward any treatment on the menu',
        'Solo or couples sessions',
        'Booked by appointment, on a day that suits them',
      ],
      emailed: 'Delivered by email',
    },
    membership: {
      eyebrow: 'Membership',
      h1: 'Make it a monthly ritual.',
      sub: 'One VIP Massage hour every month, and member pricing on everything else.',
      cta: 'Become a member',
      ctaText: 'Text to ask about membership',
      perMonth: 'per month',
      below: 'Less than the {price} single-session rate.',
      includesEyebrow: 'What’s included',
      includesH2: 'One hour a month, held for you.',
      perks: [
        {
          title: 'A 1-hour VIP Massage every month',
          body: 'The signature full-body session, built around what your body needs that day.',
        },
        {
          title: 'Member pricing on extras',
          body: 'A lower rate on additional sessions and add-ons whenever you want more than the monthly hour.',
        },
        {
          title: 'Rollover',
          body: 'Miss a month and the hour carries over, up to a set limit.',
        },
      ],
    },
    packages: {
      eyebrow: 'Packages & add-ons',
      h1: 'More hours, fewer decisions.',
      sub: 'Line up a series of VIP Massage sessions, and add a finishing touch to your visit.',
      cta: 'Buy a package',
      ctaText: 'Text to ask about packages',
      packsEyebrow: 'Packages',
      packsH2: 'VIP Massage series',
      packName: 'VIP Massage {n}-pack',
      packBody: '{n} one-hour VIP Massage sessions, paid for up front.',
      addOnsEyebrow: 'Add-ons',
      addOnsH2: 'Finishing touches',
      addOnsSub: 'Add one to your session.',
      addOns: {
        hotStone: {
          name: 'Hot stone',
          body: 'Smooth heated stones worked into your massage to loosen deep tension.',
        },
        paraffinHands: {
          name: 'Paraffin hands',
          body: 'A warm paraffin wrap for the hands while you rest — softer skin, easier joints.',
        },
        aromatherapy: {
          name: 'Aromatherapy',
          body: 'Essential oils chosen for the mood you want from the hour.',
        },
      },
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
      faq: 'Preguntas',
      giftCards: 'Tarjetas de regalo',
      membership: 'Membresía',
      packages: 'Paquetes',
      menu: 'Menú',
    },
    cta: {
      book: 'Reserva ahora',
      giftCards: 'Tarjetas de regalo',
      comingSoon: 'Próximamente',
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
      via: 'vía Google',
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
    },
    faq: {
      eyebrow: 'Antes de tu visita',
      h1: 'Tus preguntas, respondidas.',
      sub: 'Reservas, precios, sesiones en pareja y tratamientos en el estudio de Draper.',
      ctaEyebrow: '¿Aún con dudas?',
      ctaH2: 'Pregunta directamente al estudio.',
      ctaBody: 'Escribe o llama con tu pregunta — o con el tratamiento y la hora que tienes en mente.',
    },
    more: {
      eyebrow: 'Regalos, membresía y paquetes',
      h2: 'Más que una sola visita.',
      sub: 'Regala una hora, conviértela en un ritual mensual o reserva una serie de sesiones.',
      giftCards: {
        title: 'Tarjetas de regalo',
        body: 'Una hora de calma para alguien que quieres — válida para cualquier tratamiento del menú, individual o en pareja.',
        link: 'Regala una tarjeta',
      },
      membership: {
        title: 'Membresía',
        body: 'Una hora de Masaje VIP cada mes, con precio de miembro en todo lo demás.',
        link: 'Ver la membresía',
      },
      packages: {
        title: 'Paquetes y complementos',
        body: 'Series de Masaje VIP y toques finales como piedras calientes y aromaterapia.',
        link: 'Ver los paquetes',
      },
    },
    giftCards: {
      eyebrow: 'Tarjetas de regalo',
      h1: 'Regala una hora de calma.',
      sub: 'Una tarjeta de regalo de Vitalea es válida para cualquier tratamiento del menú — un masaje, un facial o una hora en pareja en la suite privada.',
      cta: 'Compra una tarjeta de regalo',
      ctaText: 'Compra tu tarjeta por mensaje',
      promoLabel: 'Bono de fiestas',
      promo: 'Compra $100 en tarjetas de regalo y recibe una tarjeta de bono de $20. Las tarjetas de bono son válidas del 2 de enero al 31 de marzo. La oferta termina el 30 de noviembre.',
      ideasEyebrow: 'Ideas para regalar',
      ideasH2: 'Lo que cubre una tarjeta de regalo',
      ideasSub: 'Elige el monto según el tratamiento que tienes en mente.',
      points: [
        'Válida para cualquier tratamiento del menú',
        'Sesiones individuales o en pareja',
        'Con cita previa, el día que mejor le convenga',
      ],
      emailed: 'Entrega por correo electrónico',
    },
    membership: {
      eyebrow: 'Membresía',
      h1: 'Conviértelo en un ritual mensual.',
      sub: 'Una hora de Masaje VIP cada mes y precio de miembro en todo lo demás.',
      cta: 'Hazte miembro',
      ctaText: 'Pregunta por la membresía',
      perMonth: 'al mes',
      below: 'Menos que la tarifa de {price} por sesión individual.',
      includesEyebrow: 'Qué incluye',
      includesH2: 'Una hora al mes, reservada para ti.',
      perks: [
        {
          title: 'Un Masaje VIP de 1 hora cada mes',
          body: 'La sesión insignia de cuerpo completo, adaptada a lo que tu cuerpo necesita ese día.',
        },
        {
          title: 'Precio de miembro en los extras',
          body: 'Una tarifa más baja en sesiones adicionales y complementos cuando quieras más que tu hora mensual.',
        },
        {
          title: 'Horas acumulables',
          body: 'Si te pierdes un mes, la hora se acumula, hasta un límite establecido.',
        },
      ],
    },
    packages: {
      eyebrow: 'Paquetes y complementos',
      h1: 'Más horas, menos decisiones.',
      sub: 'Reserva una serie de sesiones de Masaje VIP y agrega un toque final a tu visita.',
      cta: 'Compra un paquete',
      ctaText: 'Pregunta por los paquetes',
      packsEyebrow: 'Paquetes',
      packsH2: 'Series de Masaje VIP',
      packName: 'Paquete de {n} Masajes VIP',
      packBody: '{n} sesiones de Masaje VIP de una hora, pagadas por adelantado.',
      addOnsEyebrow: 'Complementos',
      addOnsH2: 'Toques finales',
      addOnsSub: 'Agrega uno a tu sesión.',
      addOns: {
        hotStone: {
          name: 'Piedras calientes',
          body: 'Piedras lisas y tibias integradas a tu masaje para soltar la tensión profunda.',
        },
        paraffinHands: {
          name: 'Parafina para manos',
          body: 'Una envoltura de parafina tibia para las manos mientras descansas — piel más suave, articulaciones más sueltas.',
        },
        aromatherapy: {
          name: 'Aromaterapia',
          body: 'Aceites esenciales elegidos según el ánimo que buscas en tu hora.',
        },
      },
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
  'Qué lugar tan increíble. Karol y Karol son maravillosas y muy amables. ¡Mi masaje fue relajante, terapéutico y rejuvenecedor! ¡Totalmente recomendado!',
  'La mejor experiencia — personal muy amable y con mucho conocimiento. Los precios son accesibles y el servicio es excelente. Recomendado para cualquiera que busque un gran día de spa — perfecto para parejas.',
  'Amo este lugar ♥ el mejor servicio, TOP. Los mejores masajes de Utah.',
  'Un lugar cálido y relajante. La esteticista fue profesional y atenta. El masaje facial fue perfecto, aliviando toda la tensión de mi frente y mis ojos. Productos de alta calidad que marcaron la diferencia.',
  'El lugar es muy limpio, silencioso y con un aroma relajante desde que entras. El personal fue amable y profesional. Tuve un masaje relajante de una hora y salí renovada.',
];
