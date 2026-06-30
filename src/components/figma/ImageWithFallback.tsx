import { useState, type ImgHTMLAttributes } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`flex items-center justify-center bg-gray-800 ${className}`}>
        <span className="px-2 text-center text-xs text-gray-400">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      onError={() => setError(true)}
      {...props}
    />
  );
}
