import { useState, useEffect, ReactNode } from "react";

interface ImageSliderProps {
  images: string[];
  content: ReactNode;
  onClick: () => void;
  isActive: boolean;
  onClose: () => void;
}

const ImageSlider = ({
  images,
  content,
  onClick,
  isActive,
  onClose,
}: ImageSliderProps) => {
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

  const slider = (
    <div
      onClick={onClick}
      className={`relative border-6 border-gray-600 bg-amber-50 mt-4 md:mt-5 md:mb-8 mx-auto overflow-hidden rounded-2xl shadow-xl transition-all duration-700 cursor-pointer ${
        isActive
          ? "w-[80vw] h-[70vh] md:w-[70vw] md:h-[70vh]"
          : "w-60 h-64 md:max-w-xl md:w-full md:h-78 hover:scale-[1.09]"
      }`}
    >
      <div>{content}</div>
      <div className="w-full h-auto">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-auto object-contain transition-all duration-500"
        />
      </div>

      {/* Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        ◀
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(i);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === i ? "bg-gray-600" : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {slider}

      {isActive && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-all duration-300"
          onClick={onClose}
        >
          <div
            className="bg-white w-11/12 md:w-3/4 h-5/6 rounded-2xl shadow-2xl p-4 transform scale-100 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {slider}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageSlider;
