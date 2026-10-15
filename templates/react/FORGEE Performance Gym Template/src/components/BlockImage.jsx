export default function BlockImage({ src, alt, className = "" }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={`absolute inset-0 w-full h-full object-cover img-kinetic ${className}`}
      loading="lazy"
    />
  )
}