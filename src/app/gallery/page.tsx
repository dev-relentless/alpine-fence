import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Composite Fence & Deck Gallery | Before & After Transformations',
  description: 'Browse before and after photos of composite fence installations, composite deck builds, refinishing, and repair projects across Utah. See the Compozen® composite difference.',
  openGraph: {
    title: 'Composite Fence & Deck Project Gallery | Alpine Fence & Deck',
    description: 'Before & after composite fence and deck transformations across Utah. Compozen® composite installations, refinishing & repair.',
    url: 'https://alpinefenceanddeck.com/gallery',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/gallery',
  },
};

const projects = [
  {
    id: 1,
    title: 'Daybreak Modern Compozen® Fence',
    city: 'South Jordan',
    neighborhood: 'Daybreak',
    type: 'Compozen® Fence',
    description: 'Full perimeter Compozen® horizontal fence replacement. HOA approved in 5 days.',
    isCompozen: true,
    tags: ['Fence', 'Compozen®', 'Modern'],
  },
  {
    id: 2,
    title: 'SunCrest Multi-Level Compozen® Deck',
    city: 'Draper',
    neighborhood: 'SunCrest',
    type: 'Compozen® Deck',
    description: 'Three-level deck with integrated lighting, built-in benches, and mountain views.',
    isCompozen: true,
    tags: ['Deck', 'Compozen®', 'Multi-Level'],
  },
  {
    id: 3,
    title: 'Sugar House Cedar Deck Refinish',
    city: 'Salt Lake City',
    neighborhood: 'Sugar House',
    type: 'Refinishing',
    description: 'Complete sand-down and premium cedar stain restoration. UV protection applied.',
    isCompozen: false,
    tags: ['Deck', 'Refinishing', 'Cedar'],
  },
  {
    id: 4,
    title: 'Sandy Privacy Fence Repair',
    city: 'Sandy',
    neighborhood: 'Alta Canyon',
    type: 'Repair',
    description: 'Storm damage repair — 40 feet of fence replaced with matching materials, same day.',
    isCompozen: false,
    tags: ['Fence', 'Repair', 'Emergency'],
  },
  {
    id: 5,
    title: 'Park City Luxury Compozen® Installation',
    city: 'Park City',
    neighborhood: 'Deer Valley',
    type: 'Compozen® Fence & Deck',
    description: 'Full property transformation: Compozen® privacy fence and wrap-around deck.',
    isCompozen: true,
    tags: ['Fence', 'Deck', 'Compozen®', 'Luxury'],
  },
  {
    id: 6,
    title: 'Herriman Board-on-Board Refinish',
    city: 'Herriman',
    neighborhood: 'Blackridge',
    type: 'Refinishing',
    description: 'Full fence refinishing with Sherwin-Williams SuperDeck stain. HOA color match.',
    isCompozen: false,
    tags: ['Fence', 'Refinishing'],
  },
  {
    id: 7,
    title: 'Orem Backyard Compozen® Deck',
    city: 'Orem',
    neighborhood: 'Northridge',
    type: 'Compozen® Deck',
    description: 'Elevated deck with pergola integration, composite railing & privacy screens.',
    isCompozen: true,
    tags: ['Deck', 'Compozen®', 'Pergola'],
  },
  {
    id: 8,
    title: 'Riverton Fence & Stain',
    city: 'Riverton',
    neighborhood: 'Western Springs',
    type: 'Refinishing',
    description: 'Full property perimeter stain and seal. 280 linear feet completed in 2 days.',
    isCompozen: false,
    tags: ['Fence', 'Refinishing', 'Large Project'],
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="section-container py-16 lg:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
              Composite Fence & Deck Project Gallery
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              Browse our portfolio of composite fence installations, composite deck builds, refinishing, and repair projects 
              across Utah. See real Compozen® composite transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b border-stone-200 sticky top-0 z-30">
        <div className="section-container py-4">
          <div className="flex flex-wrap gap-2">
            {['All Projects', 'Compozen®', 'Refinishing', 'Repair', 'Fence', 'Deck'].map((filter, idx) => (
              <button
                key={filter}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  idx === 0
                    ? 'bg-alpine-700 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-alpine-50 hover:text-alpine-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-padding bg-stone-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className={project.isCompozen ? 'card-compozen group' : 'card group'}>
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-stone-200 to-stone-300 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-10 h-10 text-stone-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                      </svg>
                      <p className="text-xs text-stone-500">Before / After Photos</p>
                    </div>
                  </div>
                  {project.isCompozen && (
                    <div className="absolute top-3 right-3">
                      <span className="badge-compozen">Compozen®</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-alpine-600 uppercase tracking-wide">{project.type}</span>
                  <h3 className="text-lg font-heading font-bold text-stone-900 mt-1 mb-2 group-hover:text-alpine-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-600 mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-stone-500">
                      {project.neighborhood}, {project.city}
                    </span>
                    <div className="flex gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-alpine-900 text-white text-center">
        <div className="section-container max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Want Your Project in Our Gallery?
          </h2>
          <p className="text-stone-300 mb-8">
            Every project starts with a free estimate. Whether it&apos;s refinishing or Compozen®, 
            let us transform your outdoor space.
          </p>
          <Link href="/quote" className="btn-compozen">
            Get Your Free Estimate →
          </Link>
        </div>
      </section>
    </>
  );
}
