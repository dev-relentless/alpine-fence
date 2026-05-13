'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { landscapePillarFeatured } from '@/data/landscapeGallery';

interface Project {
  id: number;
  title: string;
  type: string;
  category: 'Fence' | 'Deck' | 'Landscape';
  material: string;
  description: string;
  tags: string[];
  beforeImage?: string;
  afterImage?: string;
  image?: string;
  /** Optional deep link — used for landscape entries that point to the service page. */
  href?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Custom Wood Fence Staining',
    type: 'Staining',
    category: 'Fence',
    material: 'Wood',
    description: 'Full custom wood fence stain — before and after transformation.',
    tags: ['Fence', 'Staining', 'Before & After'],
    beforeImage: '/images/gallery/custom-wood-fence-stainig-before.jpg',
    afterImage: '/images/gallery/custom-wood-fence-stainig-after.jpg',
  },
  {
    id: 2,
    title: 'Deck Refinish',
    type: 'Refinishing',
    category: 'Deck',
    material: 'Wood',
    description: 'Complete deck refinishing with professional-grade stain and seal.',
    tags: ['Deck', 'Refinishing', 'Before & After'],
    beforeImage: '/images/gallery/deck-refinish-before-01.jpg',
    afterImage: '/images/gallery/deck-refinish-after-01.jpg',
  },
  {
    id: 3,
    title: 'Wood Deck Refinish',
    type: 'Refinishing',
    category: 'Deck',
    material: 'Wood',
    description: 'Wood deck restored to like-new condition with premium refinishing.',
    tags: ['Deck', 'Refinishing', 'Before & After'],
    beforeImage: '/images/gallery/wood-deck-refinish-before-01.jpg',
    afterImage: '/images/gallery/wood-deck-refinish-after-01.jpg',
  },
  {
    id: 4,
    title: 'Privacy Fence Stain — Natural Cedar Tone',
    type: 'Staining',
    category: 'Fence',
    material: 'Wood',
    description: 'Professional wood fence staining — dramatic before and after.',
    tags: ['Fence', 'Staining', 'Before & After'],
    beforeImage: '/images/gallery/wood-fence-stain-before-01.jpg',
    afterImage: '/images/gallery/wood-fence-stain-after-01.jpg',
  },
  {
    id: 5,
    title: 'Backyard Fence Stain — Full Perimeter',
    type: 'Staining',
    category: 'Fence',
    material: 'Wood',
    description: 'Another beautiful fence stain transformation by Alpine Fence & Deck.',
    tags: ['Fence', 'Staining', 'Before & After'],
    beforeImage: '/images/gallery/wood-fence-stain-before.jpg',
    afterImage: '/images/gallery/wood-fence-stain-after.jpg',
  },
  {
    id: 6,
    title: 'New Wood Fence Install',
    type: 'Installation',
    category: 'Fence',
    material: 'Wood',
    description: 'Brand new wood fence installation — clean lines, quality craftsmanship.',
    tags: ['Fence', 'Installation', 'New Build'],
    image: '/images/gallery/new--wood-fence-install.jpg',
  },
  {
    id: 7,
    title: 'Fence Stain — Rich Walnut Finish',
    type: 'Staining',
    category: 'Fence',
    material: 'Wood',
    description: 'Expert fence staining to protect and beautify natural wood.',
    tags: ['Fence', 'Staining'],
    image: '/images/gallery/wood-fence-stain-01.jpg',
  },
  {
    id: 8,
    title: 'Fence Stain — Semi-Transparent Coat',
    type: 'Staining',
    category: 'Fence',
    material: 'Wood',
    description: 'Premium stain application for long-lasting wood fence protection.',
    tags: ['Fence', 'Staining'],
    image: '/images/gallery/wood-fence-stain.jpg',
  },
  {
    id: 9,
    title: 'Wood Picket Fence',
    type: 'Installation',
    category: 'Fence',
    material: 'Wood',
    description: 'Classic wood picket fence — timeless curb appeal.',
    tags: ['Fence', 'Installation', 'Picket'],
    image: '/images/gallery/wood-picket-fence.jpg',
  },
];

type CategoryFilter = 'All' | 'Fence' | 'Deck' | 'Landscape' | 'Wood';

const landscapeServiceSlugMap: Record<string, string> = {
  'Sod & Lawn Install': 'sod-lawn-installation',
  'Retaining Walls': 'retaining-walls-hardscapes',
  'Paver Patios': 'paver-patios-walkways',
  'Sprinkler Systems': 'sprinkler-irrigation-install',
  'Landscape Design': 'landscape-design-grading',
};

// Landscape projects pulled from the pillar featured slots so the gallery
// reflects the new division. These are PhotoStub-friendly: if the file
// doesn't exist yet, ProjectCard hides the image and the user still
// gets the labeled card linking to the service page.
const landscapeProjects: Project[] = landscapePillarFeatured.map((p, i) => ({
  id: 100 + i,
  title: p.label,
  type: 'Landscape',
  category: 'Landscape' as const,
  material: 'Yard',
  description: `Recent ${p.label.toLowerCase()} project by Alpine. Tap for full gallery & details.`,
  tags: ['Landscape', p.label],
  image: `/images/landscaping/gallery/${p.file}`,
  href: `/landscaping/${landscapeServiceSlugMap[p.label] ?? ''}`,
}));

const categories: { label: string; value: CategoryFilter; description: string }[] = [
  { label: 'All Projects', value: 'All', description: 'Browse every project in our portfolio' },
  { label: 'Fence', value: 'Fence', description: 'Privacy fences, picket fences, staining & repairs' },
  { label: 'Deck', value: 'Deck', description: 'Deck refinishing, staining & new builds' },
  { label: 'Landscape', value: 'Landscape', description: 'Sod, retaining walls, paver patios, sprinklers & landscape design' },
  { label: 'Wood', value: 'Wood', description: 'Natural wood fences & decks — our most popular material' },
];

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  // Landscape entries deep-link to the service page rather than opening
  // a lightbox — the per-service galleries have richer context there.
  const Wrapper: React.ElementType = project.href ? Link : 'button';
  const wrapperProps = project.href
    ? { href: project.href }
    : { onClick, type: 'button' as const };

  return (
    <Wrapper
      {...wrapperProps}
      className="rounded-2xl overflow-hidden shadow-lg border border-stone-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer text-left w-full block"
    >
      {project.beforeImage && project.afterImage ? (
        <div className="grid grid-cols-2">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={project.beforeImage}
              alt={`${project.title} — before`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 22vw"
              quality={75}
            />
            <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
              Before
            </span>
          </div>
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={project.afterImage}
              alt={`${project.title} — after`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 22vw"
              quality={75}
            />
            <span className="absolute bottom-2 left-2 bg-alpine-700/80 text-white text-xs px-2 py-0.5 rounded">
              After
            </span>
          </div>
        </div>
      ) : project.image ? (
        <div className="aspect-[4/3] relative overflow-hidden bg-stone-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 400px"
            quality={75}
          />
        </div>
      ) : null}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-alpine-50 text-alpine-700">
            {project.type}
          </span>
          <span className="text-xs text-stone-400">{project.category} · {project.material}</span>
        </div>
        <h3 className="font-heading font-semibold text-stone-900 text-sm">{project.title}</h3>
        <p className="text-xs text-stone-500 mt-1">{project.description}</p>
      </div>
    </Wrapper>
  );
}

function Lightbox({ project, onClose, onPrev, onNext }: { project: Project; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm flex items-center gap-1 z-10"
          aria-label="Close lightbox"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          ESC
        </button>

        {/* Prev / Next */}
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-white/70 hover:text-white hidden md:block"
          aria-label="Previous project"
        >
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-white/70 hover:text-white hidden md:block"
          aria-label="Next project"
        >
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Images */}
        <div className="rounded-2xl overflow-hidden bg-stone-900">
          {project.beforeImage && project.afterImage ? (
            <div className="grid grid-cols-2 gap-1">
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <Image
                  src={project.beforeImage}
                  alt={`${project.title} — before`}
                  fill
                  className="object-cover absolute inset-0"
                  sizes="50vw"
                  quality={90}
                  priority
                />
                <span className="absolute bottom-3 left-3 bg-black/70 text-white text-sm px-3 py-1 rounded-lg z-10">
                  Before
                </span>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <Image
                  src={project.afterImage}
                  alt={`${project.title} — after`}
                  fill
                  className="object-cover absolute inset-0"
                  sizes="50vw"
                  quality={90}
                  priority
                />
                <span className="absolute bottom-3 left-3 bg-alpine-700/90 text-white text-sm px-3 py-1 rounded-lg z-10">
                  After
                </span>
              </div>
            </div>
          ) : project.image ? (
            <div className="relative w-full" style={{ paddingBottom: '62.5%' }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover absolute inset-0"
                sizes="100vw"
                quality={90}
                priority
              />
            </div>
          ) : null}
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <h3 className="text-white font-heading font-bold text-lg">{project.title}</h3>
          <p className="text-white/60 text-sm mt-1">{project.description}</p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-alpine-700/50 text-alpine-200">{project.type}</span>
            <span className="text-xs text-white/40">{project.category} · {project.material}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allProjects: Project[] = [...projects, ...landscapeProjects];

  const filtered = allProjects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Fence') return p.category === 'Fence';
    if (activeCategory === 'Deck') return p.category === 'Deck';
    if (activeCategory === 'Landscape') return p.category === 'Landscape';
    if (activeCategory === 'Wood') return p.material === 'Wood';
    return true;
  });

  const activeDescription =
    categories.find((c) => c.value === activeCategory)?.description ?? '';

  return (
    <>
      {/* Category tabs */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-30">
        <div className="section-container py-4">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">
            {categories.map((cat) => {
              const count =
                cat.value === 'All'
                  ? allProjects.length
                  : cat.value === 'Wood'
                    ? allProjects.filter((p) => p.material === 'Wood').length
                    : allProjects.filter((p) => p.category === cat.value).length;

              return (
                <button
                  key={cat.value}
                  role="tab"
                  aria-selected={activeCategory === cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    activeCategory === cat.value
                      ? 'bg-alpine-700 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-alpine-50 hover:text-alpine-700'
                  }`}
                >
                  {cat.label}
                  <span
                    className={`ml-1.5 text-xs ${
                      activeCategory === cat.value ? 'text-white/70' : 'text-stone-400'
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
          {activeDescription && (
            <p className="text-sm text-stone-500 mt-2">{activeDescription}</p>
          )}
        </div>
      </nav>

      {/* Gallery grid */}
      <section className="section-padding bg-stone-50" role="tabpanel" aria-label={`${activeCategory} projects`}>
        <div className="section-container">
          {activeCategory !== 'All' && (
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-stone-900">
                {activeCategory === 'Fence' && 'Fence Projects'}
                {activeCategory === 'Deck' && 'Deck Projects'}
                {activeCategory === 'Landscape' && 'Landscape Projects'}
                {activeCategory === 'Wood' && 'Wood Fence & Deck Projects'}
              </h2>
              <p className="text-stone-500 mt-1">
                {filtered.length} project{filtered.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, index) => (
                <ProjectCard key={project.id} project={project} onClick={() => setLightboxIndex(index)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <Lightbox
          project={filtered[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null)}
          onNext={() => setLightboxIndex((prev) => prev !== null ? (prev + 1) % filtered.length : null)}
        />
      )}
    </>
  );
}
