import { useCallback, useEffect, useState } from "react";

const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=75",
    alt: "Concert live sur scène",
    caption: "Concert de fin d'année — nos élèves sur scène",
  },
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=75",
    alt: "Chanteuse au micro",
    caption: "Atelier chant — libérer sa voix",
  },
  {
    src: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&q=75",
    alt: "Session d'enregistrement en studio",
    caption: "Séance d'enregistrement en studio",
  },
  {
    src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=75",
    alt: "Écriture créative au carnet",
    caption: "Atelier d'écriture créative",
  },
  {
    src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=75",
    alt: "Ambiance de concert, lumières chaudes",
    caption: "Scène ouverte VIBRA'SON",
  },
  {
    src: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=75",
    alt: "Partition de musique",
    caption: "Travail technique et théorie musicale",
  },
  {
    src: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=75",
    alt: "Danse et mouvement en atelier",
    caption: "Libérer le corps par le mouvement",
  },
  {
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=75",
    alt: "Table de mixage",
    caption: "Découverte des musiques actuelles",
  },
  {
    src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1600&q=80",
    thumb: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=75",
    alt: "Public en concert, mains levées",
    caption: "Restitution publique — un moment de partage",
  },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % galleryPhotos.length
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  const activePhoto = activeIndex === null ? null : galleryPhotos[activeIndex];

  return (
    <section className="section_gallery" id="galerie">
      <div className="padding-section-medium"></div>
      <div className="padding-global">
        <div className="container-large">
          <div className="header-center">
            <div className="tag is-orange scroll-into-view" style={{ transformStyle: "preserve-3d" }}>
              GALERIE PHOTO
            </div>
            <div className="max-heading is-48rem scroll-into-view" style={{ transformStyle: "preserve-3d" }}>
              <h2 className="">Nos ateliers en images</h2>
            </div>
            <p className="gallery_intro">
              Concerts, ateliers de chant, séances d'écriture et scènes
              ouvertes : plongez dans la vie de l'association. Cliquez sur une
              photo pour l'agrandir.
            </p>
          </div>
          <div className="spacer">
            <div style={{ height: "3.75rem" }} className="spacer-desktop"></div>
            <div style={{ height: "2.5rem" }} className="spacer-tablet"></div>
            <div style={{ height: "2rem" }} className="spacer-mobile"></div>
          </div>
          <div className="gallery_masonry">
            {galleryPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                className="gallery_item"
                onClick={() => setActiveIndex(index)}
                aria-label={`Agrandir la photo : ${photo.caption}`}
              >
                <img
                  src={photo.thumb}
                  loading="lazy"
                  alt={photo.alt}
                  className="gallery_item-img"
                />
                <span className="gallery_item-overlay" aria-hidden="true">
                  <span className="gallery_item-zoom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                      <path d="M11 8v6M8 11h6"></path>
                    </svg>
                  </span>
                  <span className="gallery_item-caption">{photo.caption}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="padding-section-medium"></div>

      {activePhoto ? (
        <div
          className="gallery_lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery_lightbox-close"
            aria-label="Fermer la photo"
            onClick={(event) => {
              event.stopPropagation();
              closeLightbox();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          </button>
          <button
            type="button"
            className="gallery_lightbox-nav is-prev"
            aria-label="Photo précédente"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>
          <figure
            className="gallery_lightbox-figure"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className="gallery_lightbox-img"
            />
            <figcaption className="gallery_lightbox-caption">
              <span>{activePhoto.caption}</span>
              <span className="gallery_lightbox-count">
                {activeIndex + 1} / {galleryPhotos.length}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="gallery_lightbox-nav is-next"
            aria-label="Photo suivante"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      ) : null}
    </section>
  );
}
