import Image from 'next/image';
import clsx from 'clsx';
import { BRAND } from '@/data/brand';
import emblem from '../../public/ats/brand/emblem.png';

export default function Emblem({ className }: { className?: string }) {
  return (
    <Image
      src={emblem}
      alt={`${BRAND.name} emblem`}
      sizes="(min-width: 768px) 176px, 128px"
      className={clsx('h-auto', className)}
    />
  );
}
