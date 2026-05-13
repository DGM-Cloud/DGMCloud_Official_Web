import Image from 'next/image';

/** Archivo estático en `public/` (p. ej. `logo1.png`). */
export const BRAND_LOGO_PATH = '/logo1.png';

type BrandLogoImgProps = {
  className?: string;
  /** Alt vacío cuando el enlace padre ya tiene aria-label (evita duplicar lectura). */
  alt?: string;
  priority?: boolean;
};

export function BrandLogoImg({
  className = '',
  alt = '',
  priority = false,
}: BrandLogoImgProps) {
  return (
    <Image
      src={BRAND_LOGO_PATH}
      alt={alt}
      width={320}
      height={86}
      sizes="(max-width: 768px) 220px, 280px"
      className={`object-contain object-left ${className}`}
      priority={priority}
    />
  );
}
