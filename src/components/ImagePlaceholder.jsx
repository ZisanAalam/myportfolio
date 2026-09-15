import { useState } from 'react'

export default function ImagePlaceholder({
  src,
  alt,
  label,
  note,
  ratio = '16 / 10',
  className = '',
  fit = 'cover',
  priority = false,
}) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div
      className={`image-placeholder ${showImage ? 'has-image' : ''} ${className}`.trim()}
      style={{ aspectRatio: ratio }}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt || label}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailed(true)}
          style={{ objectFit: fit }}
        />
      ) : (
        <>
          <div className="placeholder-grid" />
          <div className="placeholder-copy">
            <span className="placeholder-kicker">IMAGE PLACEHOLDER</span>
            <strong>{label}</strong>
            {note && <small>{note}</small>}
          </div>
        </>
      )}
    </div>
  )
}
