import { useEffect, useState } from "react";

export default function ImageCarousel({ images, alt, className = "", tag }) {
  const slides = images;
  const [activeIndex, setActiveIndex] = useState(0);
  const timingKey = `${className}|${alt}|${tag ?? ""}`;
  const timingSeed = [...timingKey].reduce((total, character) => (total * 31 + character.charCodeAt(0)) % 10000, 0);
  const initialDelay = 500 + (timingSeed % 2400);
  const interval = 4400 + (timingSeed % 1300);

  useEffect(() => {
    if (slides.length < 2) return undefined;

    let timer;
    const advance = () => {
      setActiveIndex((index) => (index + 1) % slides.length);
    };
    const startTimer = window.setTimeout(() => {
      advance();
      timer = window.setInterval(advance, interval);
    }, initialDelay);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(timer);
    };
  }, [initialDelay, interval, slides.length]);

  const previous = () => setActiveIndex((index) => (index - 1 + slides.length) % slides.length);
  const next = () => setActiveIndex((index) => (index + 1) % slides.length);

  return (
    <div className={`image-carousel ${className}`}>
      <div className="image-carousel__track" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {slides.map((src, index) => <img key={index} src={src} alt={`${alt} - imagen ${index + 1}`} />)}
      </div>
      {tag && <span className="image-carousel__tag">{tag}</span>}
      {slides.length > 1 && <>
        <button className="image-carousel__button image-carousel__button--previous" type="button" onClick={previous} aria-label="Imagen anterior">←</button>
        <button className="image-carousel__button image-carousel__button--next" type="button" onClick={next} aria-label="Imagen siguiente">→</button>
        <div className="image-carousel__dots" aria-label="Seleccionar imagen">
          {slides.map((src, index) => <button key={index} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => setActiveIndex(index)} aria-label={`Ver imagen ${index + 1}`} aria-pressed={index === activeIndex} />)}
        </div>
      </>}
    </div>
  );
}
