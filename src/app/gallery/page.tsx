import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fence & Deck Gallery | Before & After Transformations',
  description: 'Browse before and after photos of fence staining, deck refinishing, new fence installations, and repair projects across Utah by Alpine Fence & Deck.',
  openGraph: {
    title: 'Fence & Deck Project Gallery | Alpine Fence & Deck',
    description: 'Before & after fence and deck transformations across Utah. Staining, refinishing, installations & repair.',
    url: 'https://alpinefenceanddeck.com/gallery',
  },
  alternates: {
    canonical: 'https://alpinefenceanddeck.com/gallery',
  },
};

interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  tags: string[];
  beforeImage?: string;
  afterImage?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Custom Wood Fence Staining',
    type: 'Staining',
    description: 'Full custom wood fence stain — before and after transformation.',
    tags: ['Fence', 'Staining', 'Before & After'],
    beforeImage: '/images/gallery/custom-wood-fence-stainig-before.jpg',
    afterImage: '/images/gallery/custom-wood-fence-stainig-after.jpg',
  },
  {
    id: 2,
    title: 'Deck Refinish',
    type: 'Refinishing',
    description: 'Complete deck refinishing with professional-grade stain and seal.',
    tags: ['Deck', 'Refinishing', 'Before & After'],
    beforeImage: '/images/gallery/deck-refinish-before-01.jpg',
    afterImage: '/images/gallery/deck-refinish-after-01.jpg',
  },
  {
    id: 3,
    title: 'Wood Deck Refinish',
    type: 'Refinishing',
    description: 'Wood deck restored to like-new condition with premium refinishing.',
    tags: ['Deck', 'Refinishing', 'Before & After'],
    beforeImage: '/images/gallery/wood-deck-refinish-before-01.jpg',
    afterImage: '/images/gallery/wood-deck-refinish-after-01.jpg',
  },
  {
    id: 4,
    title: 'Wood Fence Stain',
    type: 'Staining',
    description: 'Professional wood fence staining — dramatic before and after.',
    tags: ['Fence', 'Staining', 'Before & After'],
    beforeImage: '/images/gallery/wood-fence-stain-before-01.jpg',
    afterImage: '/images/gallery/wood-fence-stain-after-01.jpg',
  },
  {
    id: 5,
    title: 'Wood Fence Stain',
    type: 'Staining',
    description: 'Another beautiful fence stain transformation by Alpine Fence & Deck.',
    tags: ['Fence', 'Staining', 'Before & After'],
    beforeImage: '/images/gallery/wood-fence-stain-before.jpg',
    afterImage: '/images/gallery/wood-fence-stain-after.jpg',
  },
  {
    id: 6,
    title: 'New Wood Fence Install',
    type: 'Installation',
    description: 'Brand new wood fence installation — clean lines, quality craftsmanship.',
    tags: ['Fence', 'Installation', 'New Build'],
    image: '/images/gallery/new--wood-fence-install.jpg',
  },
  {
    id: 7,
    title: 'Wood Fence Stain',
    type: 'Staining',
    description: 'Expert fence staining to protect and beautify natural wood.',
    tags: ['Fence', 'Staining'],
    image: '/images/gallery/wood-fence-stain-01.jpg',
  },
  {
    id: 8,
    title: 'Wood Fence Stain',
    type: 'Staining',
    description: 'Premium stain application for long-lasting wood fence protection.',
    tags: ['Fence', 'Staining'],
    image: '/images/gallery/wood-fence-stain.jpg',
  },
  {
    id: 9,
    title: 'Wood Picket Fence',
    type: 'Installation',
    description: 'Classic wood picket fence — timeless curb appeal.',
    tags: ['Fence', 'Installation', 'Picket'],
    image: '/images/gallery/wood-picket-fence.jpg',
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
              Fence & Deck Project Gallery
            </h1>
            <p className="text-lg text-stone-200 leading-relaxed">
              Browse our portfolio of fence staining, deck refinishing, new installations, and repair projects 
              across Utah. Real before &amp; after transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-8">
            <span className="text-xs font-medium text-alpine-600 uppercase tracking-wide">Featured Project</span>
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-stone-900 mt-1">Wood Fence Refinish</h2>
          </div>
          <div className="relative aspect-[16/9] max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gallery/wood-fence-refinish-01.JPG"
              alt="Wood fence refinish project by Alpine Fence & Deck"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
              quality={80}
            />
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b border-stone-200 sticky top-0 z-30">
        <div className="section-container py-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {['All Projects', 'Staining', 'Refinishing', 'Installation', 'Fence', 'Deck'].map((filter, idx) => (
              <button
                key={filter}
                aria-pressed={idx === 0}
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
              <div key={project.id} className="card group">
                {project.beforeImage && project.afterImage ? (
                  <div className="grid grid-cols-2">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={project.beforeImage}
                        alt={`${project.title} — before`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                        quality={75}
                      />
                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">Before</span>
                    </div>
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={project.afterImage}
                        alt={`${project.title} — after`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
                        quality={75}
                      />
                      <span className="absolute bottom-2 left-2 bg-alpine-700/80 text-white text-xs px-2 py-0.5 rounded">After</span>
                    </div>
                  </div>
                ) : project.image ? (
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      quality={75}
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <span className="text-xs font-medium text-alpine-600 uppercase tracking-wide">{project.type}</span>
                  <h3 className="text-lg font-heading font-bold text-stone-900 mt-1 mb-2 group-hover:text-alpine-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-600 mb-3">{project.description}</p>
                  <div className="flex gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
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
            Every project starts with a free estimate. Whether it&apos;s refinishing or a new installation, 
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
