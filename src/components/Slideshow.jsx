import { useState, useEffect } from "react";

function Slideshow() {
  const [slides, setSlides] = useState({ 0: false, 1: false, 2: false });

  const carousel = (currentSlideNumber, isMounted) => {
    let nextSlideNumber = (currentSlideNumber + 1) % 3;

    setSlides({
      ...slides,
      [currentSlideNumber]: false,
      [nextSlideNumber]: true,
    });

    setTimeout(() => carousel(nextSlideNumber, isMounted), 2000);
  };

  useEffect(() => {
    let isMounted = true;
    carousel(2, isMounted);

    return () => {
      isMounted = false;
      console.log("Cleanup");
    };
  }, []);

  return (
    <div className="image-carousel">
      <img
        className="image-responsive"
        src="https://via.placeholder.com/1280x360.png/FFFFF0/000000F?text=Candelify+Banner+1+/+3"
        alt="Banner"
        style={{ display: slides[0] ? "block" : "none" }}
      />
      <img
        className="image-responsive"
        src="https://via.placeholder.com/1280x360.png/FFF000/000000F?text=Candelify+Banner+2+/+3"
        alt="Banner"
        style={{ display: slides[1] ? "block" : "none" }}
      />
      <img
        className="image-responsive"
        src="https://via.placeholder.com/1280x360.png/F00000/FFFFF0?text=Candelify+Banner+3+/+3"
        alt="Banner"
        style={{ display: slides[2] ? "block" : "none" }}
      />
    </div>
  );
}

export { Slideshow };
