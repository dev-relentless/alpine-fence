/**
 * FAQ content. Answers are assembled from brand.ts / services.ts / reviews.ts so
 * prices, hours, and contact details cannot drift from the rest of the site.
 * English ships in FAQPage JSON-LD and llms.txt; Spanish is display-only.
 */
import { BRAND } from './brand';
import { SERVICES, fromPrice, type PartyKey, type Service } from './services';
import { RATING } from './reviews';
import { SERVICES_ES, STRINGS, type Lang } from './i18n';

export interface Faq {
  id: string;
  q: Record<Lang, string>;
  a: Record<Lang, string>;
}

const service = (id: string) => SERVICES.find((s) => s.id === id)!;

const name = (s: Service, lang: Lang) => (lang === 'es' ? SERVICES_ES[s.id]?.name ?? s.name : s.name);

const list = (items: string[], lang: Lang) =>
  new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' }).format(items);

function duration(min: number, lang: Lang) {
  if (min > 60 && min % 60 === 0) return `${min / 60} ${lang === 'es' ? 'horas' : 'hours'}`;
  return `${min} ${lang === 'es' ? 'minutos' : 'minutes'}`;
}

function prices(s: Service, party: PartyKey, lang: Lang) {
  return list(
    s.durations.map((d) => `$${s.prices[party][d]} ${lang === 'es' ? 'por' : 'for'} ${duration(d, lang)}`),
    lang,
  );
}

function hours(lang: Lang) {
  const v = STRINGS[lang].visit;
  return `${v.hours1.replace(' · ', ', ')}. ${v.hours2.replace(' · ', ' ')}.`;
}

const menu = (lang: Lang) =>
  list(
    SERVICES.map((s) => `${name(s, lang)} (${lang === 'es' ? 'desde' : 'from'} $${fromPrice(s)})`),
    lang,
  );

const areas = (lang: Lang) => list([...BRAND.areaServed], lang);

const address = `${BRAND.address.street}, ${BRAND.address.locality}, ${BRAND.address.state} ${BRAND.address.zip}`;

const vip = service('vip');
const hydro = service('hydrafacial');
const hydroPlus = service('hydrafacialPlus');
const lymph = service('lymphatic');
const vipCoupleFrom = Math.min(...Object.values(vip.prices.couple));
const soloPrice = (s: Service) => s.prices.her[s.durations[0]];

export const FAQS: Faq[] = [
  {
    id: 'booking',
    q: {
      en: 'How do I book an appointment at Vitalea?',
      es: '¿Cómo reservo una cita en Vitalea?',
    },
    a: {
      en: `Text or call ${BRAND.phone} with the treatment and time you would like, or email ${BRAND.email}. Vitalea is by appointment only — there are no walk-ins, because the studio is reserved for one guest or one couple at a time.`,
      es: `Envía un mensaje de texto o llama al ${BRAND.phone} con el tratamiento y la hora que prefieras, o escribe a ${BRAND.email}. Vitalea atiende solo con cita previa — no se reciben visitas sin cita, porque el estudio se reserva para un huésped o una pareja a la vez.`,
    },
  },
  {
    id: 'location',
    q: {
      en: `Where is ${BRAND.name} located?`,
      es: `¿Dónde está ${BRAND.name}?`,
    },
    a: {
      en: `The studio is at ${address}. It serves guests from ${areas('en')}.`,
      es: `El estudio está en ${address}. Atiende a huéspedes de ${areas('es')}.`,
    },
  },
  {
    id: 'hours',
    q: {
      en: 'What are your hours?',
      es: '¿Cuál es el horario?',
    },
    a: {
      en: `Vitalea is open ${hours('en')}`,
      es: `Vitalea abre ${hours('es')}`,
    },
  },
  {
    id: 'massage-price',
    q: {
      en: 'How much does a massage cost at Vitalea?',
      es: '¿Cuánto cuesta un masaje en Vitalea?',
    },
    a: {
      en: `The ${name(vip, 'en')} — the signature full-body session — is ${prices(vip, 'her', 'en')}. As a couples session it is ${prices(vip, 'couple', 'en')}.`,
      es: `El ${name(vip, 'es')} — la sesión insignia de cuerpo completo — cuesta ${prices(vip, 'her', 'es')}. En pareja cuesta ${prices(vip, 'couple', 'es')}.`,
    },
  },
  {
    id: 'couples',
    q: {
      en: 'Do you offer couples massages?',
      es: '¿Ofrecen masajes en pareja?',
    },
    a: {
      en: `Yes. Couples share a private two-table suite, side by side for the same hour, and every service on the menu is available as a couples session. A couples ${name(vip, 'en')} starts at $${vipCoupleFrom}, and rose-petal or celebration styling is available on request.`,
      es: `Sí. Las parejas comparten una suite privada de dos camillas, lado a lado durante la misma hora, y todos los servicios del menú están disponibles en pareja. El ${name(vip, 'es')} en pareja empieza en $${vipCoupleFrom}, y la decoración con pétalos de rosa o para celebraciones está disponible a pedido.`,
    },
  },
  {
    id: 'treatments',
    q: {
      en: 'What treatments does Vitalea offer?',
      es: '¿Qué tratamientos ofrece Vitalea?',
    },
    a: {
      en: `The menu is ${menu('en')}. Each one can be booked solo or as a couples session.`,
      es: `El menú incluye ${menu('es')}. Cada uno puede reservarse de forma individual o en pareja.`,
    },
  },
  {
    id: 'difference',
    q: {
      en: 'What makes Vitalea different from a chain spa?',
      es: '¿En qué se diferencia Vitalea de un spa de cadena?',
    },
    a: {
      en: `Vitalea is a private studio founded by ${BRAND.founder}, not a franchise. It sees one guest (or one couple) at a time, starts with a real conversation, and adjusts each treatment to what your body needs that day.`,
      es: `Vitalea es un estudio privado fundado por ${BRAND.founder}, no una franquicia. Atiende a un huésped (o una pareja) a la vez, comienza con una conversación real y ajusta cada tratamiento a lo que tu cuerpo necesita ese día.`,
    },
  },
  {
    id: 'lymphatic',
    q: {
      en: 'What is lymphatic drainage, and can I book it after surgery?',
      es: '¿Qué es el drenaje linfático y puedo reservarlo después de una cirugía?',
    },
    a: {
      en: `${name(lymph, 'en')} uses light, rhythmic strokes to move fluid where it has settled. Guests book it for puffiness, water retention, and post-surgical recovery — get your surgeon’s clearance before a post-surgical session. It is ${prices(lymph, 'her', 'en')}.`,
      es: `El ${name(lymph, 'es')} usa movimientos ligeros y rítmicos para movilizar el líquido retenido. Se reserva para la hinchazón, la retención de líquidos y la recuperación postquirúrgica — pide la autorización de tu cirujano antes de una sesión postquirúrgica. Cuesta ${prices(lymph, 'her', 'es')}.`,
    },
  },
  {
    id: 'hydrofacial',
    q: {
      en: `What is the difference between the ${name(hydro, 'en')} and the ${name(hydroPlus, 'en')}?`,
      es: `¿Cuál es la diferencia entre el ${name(hydro, 'es')} y el ${name(hydroPlus, 'es')}?`,
    },
    a: {
      en: `The ${name(hydro, 'en')} is a ${duration(hydro.durations[0], 'en')} deep cleanse, soft exfoliation, and hydrating serum infusion for $${soloPrice(hydro)}. The ${name(hydroPlus, 'en')} extends it to ${duration(hydroPlus.durations[0], 'en')} with added device work for dull, congested, or tired skin, for $${soloPrice(hydroPlus)}.`,
      es: `El ${name(hydro, 'es')} es una limpieza profunda, exfoliación suave e infusión de sueros hidratantes de ${duration(hydro.durations[0], 'es')} por $${soloPrice(hydro)}. El ${name(hydroPlus, 'es')} lo extiende a ${duration(hydroPlus.durations[0], 'es')} con aparatología adicional para piel apagada, congestionada o cansada, por $${soloPrice(hydroPlus)}.`,
    },
  },
  {
    id: 'spanish',
    q: {
      en: 'Can I book in Spanish?',
      es: '¿Puedo reservar en español?',
    },
    a: {
      en: 'Yes. This site is available in English and Spanish, and you can text the studio to book in either language.',
      es: 'Sí. Este sitio está disponible en inglés y español, y puedes escribir al estudio para reservar en cualquiera de los dos idiomas.',
    },
  },
  {
    id: 'reviews',
    q: {
      en: 'What do guests say about Vitalea?',
      es: '¿Qué dicen los huéspedes sobre Vitalea?',
    },
    a: {
      en: `Vitalea holds a ${RATING.value}-star rating on ${RATING.source} across ${RATING.count} reviews. A selection of them is on the home page.`,
      es: `Vitalea tiene una calificación de ${RATING.value} estrellas en ${RATING.source} con ${RATING.count} reseñas. Puedes leer una selección en la página de inicio.`,
    },
  },
];
