'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  type: string;
  category: 'Fence' | 'Deck';
  material: string;
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
    title: 'Wood Fence Stain',
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
    title: 'Wood Fence Stain',
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
    title: 'Wood Fence Stain',
    type: 'Staining',
    category: 'Fence',
    material: 'Wood',
    description: 'Expert fence staining to protect and beautify natural wood.',
    tags: ['Fence', 'Staining'],
    image: '/images/gallery/wood-fence-stain-01.jpg',
  },
  {
    id: 8,
    title: 'Wood Fence Stain',
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

type CategoryFilter = 'All' | 'Fence' | 'Deck' | 'Wood';

const categories: { label: string; value: CategoryFilter; description: string }[] = [
  { label: 'All Projects', value: 'All', description: 'Browse every project in our portfolio' },
  { label: 'Fence', value: 'Fence', description: 'Privacy fences, picket fences, staining & repairs' },
  { label: 'Deck', value: 'Deck', description: 'Deck refinishing, staining & new builds' },
  { label: 'Wood', value: 'Wood', description: 'Natural wood fences & decks — our most popular material' },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-100 hover:shadow-xl transition-shadow duration-300">
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
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 200px"
              quality={75}
            />
            <span className="absolute bottom-2 left-2 bg-alpine-700/80 text-white text-xs px-2 py-0.5 rounded">
              After
            </span>
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
    </div>
  );
}

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filtered = projects.filter((p) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Fence') return p.category === 'Fence';
    if (activeCategory === 'Deck') return p.category === 'Deck';
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
                  ? projects.length
                  : cat.value === 'Wood'
                    ? projects.filter((p) => p.material === 'Wood').length
                    : projects.filter((p) => p.category === cat.value).length;

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
                {activeCategory === 'Wood' && 'Wood Fence & Deck Projects'}
              </h2>
              <p className="text-stone-500 mt-1">
                {filtered.length} project{filtered.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-stone-500 text-lg">No projects in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
