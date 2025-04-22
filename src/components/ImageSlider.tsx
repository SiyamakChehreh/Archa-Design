import { useState, useEffect, ReactNode } from "react";

interface ImageSliderProps {
  images: string[];
  content: ReactNode;
}

const ImageSlider = ({ images, content }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative border-6 border-yellow-100 bg-amber-50 w-60 h-64 mt-4 md:mt-5 md:mb-8 md:max-w-xl md:w-full md:h-78 mx-auto overflow-hidden rounded-2xl shadow-lg hover:scale-[1.09] transition-all duration-700">
      <div>{content}</div>
      <div className="w-full h-64">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-gray-600" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
