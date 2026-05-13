import { COMPANY } from '@/data/cities';

type Variant = 'landscape' | 'fence-deck' | 'universal';

interface Item {
  title: string;
  desc: string;
  icon: 'pencil' | 'shield' | 'document' | 'wrench' | 'check-badge' | 'sparkles' | 'phone' | 'currency';
}

const SETS: Record<Variant, Item[]> = {
  landscape: [
    { icon: 'pencil',     title: 'Free Design Layout',       desc: 'Every project starts with a free on-site consult and a custom 2D layout — design fee credited 100% when we build.' },
    { icon: 'document',   title: 'HOA Submittal Handled',    desc: 'We assemble and submit the HOA packet for you. Approved by 200+ Wasatch Front HOAs since 2009.' },
    { icon: 'shield',     title: 'Permits & Engineering',    desc: 'City permits, backflow tags, and engineer-stamped drawings handled in-house — never an extra line item.' },
    { icon: 'check-badge',title: 'One Warranty, One Crew',   desc: 'The same crew leads who\u2019ve built 1,700+ Alpine fences run every landscape job. One number, one warranty across the whole yard.' },
    { icon: 'currency',   title: 'Bundle & Financing',       desc: 'Bundle with fence or deck for 8\u201312% savings. Financing available on qualifying projects $5,000+.' },
    { icon: 'sparkles',   title: '30-Day Walkthrough',       desc: 'We circle back 30 days after install to confirm grading, growth, and finish work \u2014 included on every project.' },
  ],
  'fence-deck': [
    { icon: 'check-badge',title: `${COMPANY.yearsExperience}+ Years in Utah`, desc: 'Family-owned and operated on the Wasatch Front since 2009. 1,700+ projects and counting.' },
    { icon: 'shield',     title: 'Permits Handled',          desc: 'We pull every required permit and handle utility locates so you never touch city paperwork.' },
    { icon: 'document',   title: 'HOA-Friendly Design',      desc: 'Pre-approved styles for most Wasatch Front HOAs and full submittal support included.' },
    { icon: 'sparkles',   title: 'Workmanship Guarantee',    desc: 'Industry-leading written workmanship guarantee on every fence and deck we build.' },
  ],
  universal: [],
};

function Icon({ name }: { name: Item['icon'] }) {
  const cls = 'w-6 h-6';
  switch (name) {
    case 'pencil':
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.862 4.487zm0 0L19.5 7.125" /></svg>;
    case 'shield':
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 5.25-9 9.75-9 9.75S3 17.25 3 12V5.25l9-3 9 3V12z" /></svg>;
    case 'document':
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5h6M9 13.5h6m-6-3h3m-9 4.5V6.75A2.25 2.25 0 016.75 4.5h3.879a2.25 2.25 0 011.591.659l4.621 4.621c.422.422.659.995.659 1.591v9.879a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25z" /></svg>;
    case 'wrench':
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437" /></svg>;
    case 'check-badge':
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>;
    case 'sparkles':
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>;
    case 'phone':
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;
    case 'currency':
      return <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4M2.25 12c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12z" /></svg>;
  }
}

interface Props {
  variant?: Variant;
  eyebrow?: string;
  heading?: React.ReactNode;
  subhead?: string;
  background?: 'white' | 'alpine-50' | 'mountain-900';
}

export default function IncludedValueStack({
  variant = 'landscape',
  eyebrow = 'Standard with Every Project',
  heading,
  subhead = 'No surprise add-ons. No nickel-and-diming. The premium things competitors charge for — designs, HOA submittals, permits, drainage — are baked into every Alpine quote.',
  background = 'white',
}: Props) {
  const items = SETS[variant];
  const dark = background === 'mountain-900';
  const bg =
    background === 'mountain-900' ? 'bg-forest-950 text-white'
    : background === 'alpine-50'  ? 'bg-oat-50'
    : 'bg-white';

  const defaultHeading =
    variant === 'landscape'
      ? <>The Premium Things Competitors Charge For. <span className="italic font-light text-forest-700">Included.</span></>
      : <>Built to a Higher Standard. <span className="italic font-light text-alpine-700">Always Included.</span></>;

  return (
    <section className={`section-padding ${bg} ${dark ? '' : 'border-y border-oat-100'}`}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <span className={`inline-block text-xs font-semibold uppercase tracking-[0.3em] mb-3 ${dark ? 'text-bronze-300' : 'text-forest-700'}`}>
            {eyebrow}
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 tracking-tight ${dark ? 'text-white' : 'text-stone-900'}`}>
            {heading ?? defaultHeading}
          </h2>
          <p className={`text-lg ${dark ? 'text-stone-300' : 'text-stone-600'}`}>{subhead}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className={`group relative p-7 lg:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                dark
                  ? 'bg-forest-900/60 border-forest-800 hover:border-bronze-400/60 hover:shadow-2xl'
                  : 'bg-white border-oat-100 hover:border-bronze-300 hover:shadow-xl'
              }`}
            >
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
                dark ? 'bg-bronze-400/15 text-bronze-300' : 'bg-oat-50 text-bronze-600'
              }`}>
                <Icon name={item.icon} />
              </div>
              <h3 className={`font-heading font-bold text-lg mb-2 tracking-tight ${dark ? 'text-white' : 'text-stone-900'}`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? 'text-stone-300' : 'text-stone-600'}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
