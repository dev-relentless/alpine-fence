import { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/data/cities';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Compozen® 3D Design Studio | Visualize Your Fence & Deck',
  description: 'Design your dream fence or deck with our interactive 3D Compozen® Design Studio. Visualize materials, colors, and styles before installation. Free consultations.',
};

const designStyles = [
  {
    id: 'modern-horizontal',
    name: 'Modern Horizontal',
    description: 'Clean horizontal lines with mixed-width boards for a contemporary look.',
    colors: ['Driftwood Gray', 'Midnight Cedar', 'Arctic White'],
    popular: true,
  },
  {
    id: 'classic-privacy',
    name: 'Classic Privacy',
    description: 'Full-height privacy fence with decorative top rail and post caps.',
    colors: ['Warm Walnut', 'Honey Oak', 'Weathered Teak'],
    popular: true,
  },
  {
    id: 'ranch-rail',
    name: 'Ranch Rail',
    description: 'Open rail design perfect for front yards and mountain properties.',
    colors: ['Natural Cedar', 'Rustic Brown', 'Mountain Gray'],
    popular: false,
  },
  {
    id: 'board-on-board',
    name: 'Board-on-Board',
    description: 'Alternating overlapping boards for privacy with natural airflow.',
    colors: ['Autumn Blend', 'Sierra Sand', 'Forest Green'],
    popular: false,
  },
  {
    id: 'lattice-top',
    name: 'Lattice Top Privacy',
    description: 'Privacy panels with decorative lattice top for light and elegance.',
    colors: ['Classic White', 'Warm Gray', 'Heritage Brown'],
    popular: true,
  },
  {
    id: 'multi-level-deck',
    name: 'Multi-Level Deck',
    description: 'Elevated deck with multiple levels, integrated stairs, and built-in seating.',
    colors: ['Canyon Brown', 'Coastal Gray', 'Sunset Mahogany'],
    popular: true,
  },
];

export default function DesignStudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-alpine-950 to-stone-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-compozen-500 rounded-full blur-[200px]" />
        </div>
        <div className="section-container relative z-10 py-16 lg:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge-compozen mb-6">Exclusive Design Platform</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Compozen® <span className="text-compozen-400">Design Studio</span>
            </h1>
            <p className="text-lg text-stone-300 mb-8 leading-relaxed">
              Visualize your dream fence or deck before a single board is placed. Browse exclusive Compozen® designs,
              customize colors and textures, and save your project for a free professional consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#designs" className="btn-compozen text-lg">
                Browse Designs ↓
              </a>
              <Link href="/quote?service=compozen" className="btn-secondary !border-stone-600 !text-stone-200 hover:!bg-stone-800">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-12 text-center">
            How the Design Studio Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Choose Your Style', desc: 'Browse our exclusive Compozen® design library of fence and deck styles.' },
              { step: '2', title: 'Customize Colors', desc: 'Select from premium color palettes and texture options unique to Compozen®.' },
              { step: '3', title: 'Preview in 3D', desc: 'See your design come to life in a realistic 3D visualization.' },
              { step: '4', title: 'Get Your Quote', desc: 'Save your design and receive a free professional consultation.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-compozen-100 text-compozen-700 rounded-2xl flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design gallery */}
      <section id="designs" className="section-padding bg-alpine-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-4">
              Exclusive Compozen® Design Collection
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Each design is available exclusively through certified Compozen® installers. 
              These materials and configurations cannot be purchased at retail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designStyles.map((style) => (
              <div key={style.id} className="card-compozen group">
                {/* Design preview placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-stone-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                      </svg>
                      <p className="text-xs text-stone-500">3D Preview</p>
                    </div>
                  </div>
                  {style.popular && (
                    <div className="absolute top-3 right-3 bg-compozen-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-stone-900 mb-2">{style.name}</h3>
                  <p className="text-sm text-stone-600 mb-4">{style.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {style.colors.map((color) => (
                      <span key={color} className="text-xs bg-stone-100 text-stone-700 px-2 py-1 rounded">
                        {color}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/quote?service=compozen&design=${style.id}`}
                    className="text-sm font-medium text-compozen-700 hover:text-compozen-800 transition-colors"
                  >
                    Customize This Design →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material benefits */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-alpine-900 mb-6">
                Why Compozen® Materials Are Different
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Proprietary Composite Formula', desc: 'Engineering-grade recycled materials with UV-stabilized polymers for unmatched durability.' },
                  { title: 'True Wood Aesthetics', desc: 'Multi-layer grain texturing that replicates natural wood at depths impossible with traditional composites.' },
                  { title: 'Zero Maintenance', desc: 'No staining, sealing, painting, or sanding — ever. Just occasional rinsing with a garden hose.' },
                  { title: 'Environmental Responsibility', desc: 'Made from 95% recycled materials. Every Compozen® installation diverts 2,000+ lbs from landfills.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-compozen-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-compozen-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-stone-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-compozen-50 to-white rounded-2xl border border-compozen-200 p-8">
              <h3 className="text-xl font-heading font-bold text-stone-900 mb-6 text-center">
                Request a Design Consultation
              </h3>
              <QuoteForm variant="sidebar" defaultService="compozen-fence" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-compozen-gradient section-padding">
        <div className="section-container text-center">
          <h2 className="text-3xl font-heading font-bold text-stone-900 mb-4">
            Ready to Design Your Dream Outdoor Space?
          </h2>
          <p className="text-stone-700 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free in-home consultation where we&apos;ll bring the Design Studio to you. 
            See Compozen® material samples and get a detailed 3D rendering of your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=compozen" className="btn-primary !bg-stone-900 !text-white hover:!bg-stone-800">
              Schedule Free Consultation
            </Link>
            <a href={COMPANY.phoneHref} className="btn-secondary !border-stone-900 !text-stone-900">
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
