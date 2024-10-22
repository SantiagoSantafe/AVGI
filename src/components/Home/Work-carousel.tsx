import React, { useRef, useEffect, useState } from "react";
import "../../styles/Home/Carousel.css";

interface Carousel {
  images: {
    leftBand: string[];
    centerBand: string[];
    rightBand: string[];
  };
}

const Carousel: React.FC<Carousel> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragInfo = useRef({
    startX: 0,
    scrollLeft: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });

  const allImages = [
    ...images.leftBand,
    ...images.centerBand,
    ...images.rightBand,
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const naturalSlide = (initialVelocity: number) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let velocity = initialVelocity;
    const decay = 0.95;
    const minVelocity = 0.5;

    const animate = () => {
      if (Math.abs(velocity) < minVelocity) return;

      carousel.scrollLeft -= velocity;
      velocity *= decay;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleTouchStart = (e: TouchEvent) => {
      setIsDragging(true);
      dragInfo.current = {
        startX: e.touches[0].pageX,
        scrollLeft: carousel.scrollLeft,
        lastX: e.touches[0].pageX,
        lastTime: Date.now(),
        velocity: 0,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const currentX = e.touches[0].pageX;
      const currentTime = Date.now();
      const deltaX = currentX - dragInfo.current.lastX;
      const deltaTime = currentTime - dragInfo.current.lastTime;

      if (deltaTime > 0) {
        dragInfo.current.velocity = (deltaX / deltaTime) * 16;
      }

      carousel.scrollLeft =
        dragInfo.current.scrollLeft - (currentX - dragInfo.current.startX);

      dragInfo.current.lastX = currentX;
      dragInfo.current.lastTime = currentTime;
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      if (Math.abs(dragInfo.current.velocity) > 0.5) {
        naturalSlide(dragInfo.current.velocity);
      }
    };

    carousel.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    carousel.addEventListener("touchmove", handleTouchMove, { passive: false });
    carousel.addEventListener("touchend", handleTouchEnd);

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
      carousel.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  if (isMobile) {
    return (
      <div
        className="mobile-carousel"
        ref={carouselRef}
        style={{ touchAction: "none" }}
      >
        <div className="mobile-track">
          {allImages.map((src, index) => (
            <div key={`mobile-${index}`} className="mobile-item">
              <img src={src} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="band-section" ref={carouselRef}>
      <div className="band left-band">
        <div className="band-track1">
          {images.leftBand.map((src, index) => (
            <div key={`left-${index}`} className="band">
              <img src={src} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="band center-band">
        <div className="band-track2">
          {images.centerBand.map((src, index) => (
            <div key={`center-${index}`} className="band">
              <img src={src} alt={`Imagen ${index + 7}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="band right-band">
        <div className="band-track3">
          {images.rightBand.map((src, index) => (
            <div key={`right-${index}`} className="band">
              <img src={src} alt={`Imagen ${index + 13}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
