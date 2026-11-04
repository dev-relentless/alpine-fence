import fs from 'node:fs';
import path from 'node:path';
import { galleryCaptions, type GalleryCaption } from '@/data/gallery';

/**
 * Server-only helpers for photography. Everything here reads the
 * public/ folder at build time so pages can render a placeholder
 * until a real photograph is dropped in — and light up the moment
 * one is.
 */

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGE_EXT = /\.(jpe?g|png|webp|avif)$/i;

export function photoExists(src: string): boolean {
  if (!src.startsWith('/')) return false;
  try {
    return fs.statSync(path.join(PUBLIC_DIR, src)).isFile();
  } catch {
    return false;
  }
}

export interface GalleryPhoto extends GalleryCaption {
  src: string;
  file: string;
  title: string;
}

export const GALLERY_DIR = '/ats/gallery';

function humanize(file: string): string {
  return file
    .replace(IMAGE_EXT, '')
    .replace(/^\d+[-_ ]*/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Every image in public/ats/gallery, sorted by filename, with captions merged in. */
export function listGalleryPhotos(): GalleryPhoto[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(path.join(PUBLIC_DIR, GALLERY_DIR));
  } catch {
    return [];
  }
  return files
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => {
      const caption = galleryCaptions[file] ?? {};
      return {
        file,
        src: `${GALLERY_DIR}/${file}`,
        ...caption,
        title: caption.title ?? humanize(file),
      };
    });
}
