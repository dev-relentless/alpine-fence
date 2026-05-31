// Alpine Fence & Deck — Landscape Gallery Slots
//
// One source of truth for landscape photo slots. Each entry maps a
// service slug to a list of expected images. The PhotoStub component
// renders these as labeled placeholders until real photos land at the
// listed paths. Drop the named JPG/PNG into /public/images/landscaping/gallery
// and the stub swaps to the real photo automatically.

export interface LandscapePhotoSlot {
  /** Filename inside /public/images/landscaping/gallery */
  file: string;
  /** Caption shown over the placeholder and used as alt text */
  label: string;
  /** Optional descriptive alt — defaults to label if omitted */
  alt?: string;
}

export interface LandscapeServiceGallery {
  /** Matches services.ts → landscapeServices[].slug */
  slug: string;
  slots: LandscapePhotoSlot[];
}

export const landscapeGalleries: LandscapeServiceGallery[] = [
  {
    slug: 'sod-lawn-installation',
    slots: [
      { file: 'sod-install-01-before.jpg', label: 'Sod · Provo · Before' },
      { file: 'sod-install-01-after.jpg', label: 'Sod · Provo · After' },
      { file: 'sod-install-02-rolled.jpg', label: 'Fresh Sod Rolled In' },
      { file: 'sod-install-03-finished-yard.jpg', label: 'Finished Yard · Lehi' },
      { file: 'sod-install-04-grading.jpg', label: 'Grading & Soil Prep' },
      { file: 'sod-install-05-edge-trim.jpg', label: 'Edge Trim & Finish' },
    ],
  },
  {
    slug: 'retaining-walls-hardscapes',
    slots: [
      { file: 'retaining-wall-01-before.jpg', label: 'Hillside · Before' },
      { file: 'retaining-wall-01-after.jpg', label: 'Hillside · After' },
      { file: 'retaining-wall-02-block.jpg', label: 'Segmental Block Wall' },
      { file: 'retaining-wall-03-boulder.jpg', label: 'Natural Boulder Wall' },
      { file: 'retaining-wall-04-tiered.jpg', label: 'Tiered Hillside · Draper' },
      { file: 'retaining-wall-05-with-fence.jpg', label: 'Wall + Fence Combo' },
    ],
  },
  {
    slug: 'paver-patios-walkways',
    slots: [
      { file: 'paver-patio-01-before.jpg', label: 'Patio · Before' },
      { file: 'paver-patio-01-after.jpg', label: 'Patio · Orem · After' },
      { file: 'paver-patio-02-curved.jpg', label: 'Curved Paver Patio' },
      { file: 'paver-patio-03-walkway.jpg', label: 'Paver Walkway' },
      { file: 'paver-patio-04-firepit.jpg', label: 'Patio + Fire Pit' },
      { file: 'paver-patio-05-driveway.jpg', label: 'Paver Driveway · SLC' },
    ],
  },
  {
    slug: 'sprinkler-irrigation-install',
    slots: [
      { file: 'sprinkler-01-trenching.jpg', label: 'Trenching New Lines' },
      { file: 'sprinkler-02-heads.jpg', label: 'Pop-Up Head Install' },
      { file: 'sprinkler-03-controller.jpg', label: 'Smart Wi-Fi Controller' },
      { file: 'sprinkler-04-drip-bed.jpg', label: 'Drip Lines · Garden Beds' },
      { file: 'sprinkler-05-coverage.jpg', label: 'Full Coverage Test' },
      { file: 'sprinkler-06-winterize.jpg', label: 'Fall Winterization' },
    ],
  },
  {
    slug: 'landscape-design-grading',
    slots: [
      { file: 'design-01-before.jpg', label: 'Yard · Before' },
      { file: 'design-01-after.jpg', label: 'Yard · After Full Design' },
      { file: 'design-02-plan.jpg', label: 'Property Design Plan' },
      { file: 'design-03-grading.jpg', label: 'Site Grading' },
      { file: 'design-04-drainage.jpg', label: 'Drainage Solution' },
      { file: 'design-05-finished.jpg', label: 'Finished Property · Lehi' },
    ],
  },
];

// Featured photos for the /landscaping pillar gallery — pulls one
// hero-quality shot per service so visitors see the breadth at a glance.
export const landscapePillarFeatured: LandscapePhotoSlot[] = [
  { file: 'sod-install-03-finished-yard.jpg', label: 'Sod & Lawn Install' },
  { file: 'retaining-wall-05-with-fence.jpg', label: 'Retaining Walls' },
  { file: 'paver-patio-04-firepit.jpg', label: 'Paver Patios' },
  { file: 'sprinkler-03-controller.jpg', label: 'Sprinkler Systems' },
  { file: 'design-05-finished.jpg', label: 'Landscape Design' },
];

export function getLandscapeGalleryForSlug(slug: string): LandscapeServiceGallery | undefined {
  return landscapeGalleries.find((g) => g.slug === slug);
}
