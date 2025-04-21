import { useState } from "react";

export default function EducationalPage() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <section id="educational">
      <div className="h-auto w-screen basis-auto p-10 flex flex-col gap-5 md:gap-12 bg-gray-200">
        <div className="flex-col place-items-center md:flex md:flex-row mx-auto md:w-260 md:justify-around">
          <div
            className={`md:h-45 md:w-45 h-25 w-25 border-2 rounded border-black transitiona-all duration-700 ease-in-out ${
              isOpen1 ? "scale-[0.90]" : "scale-[1.3]"
            }`}
            onClick={() => {
              setIsOpen1(!isOpen1);
            }}
          ></div>
          <div
            className={`transition-all duration-700 ease-in-out ${
              isOpen1
                ? "w-75 h-40 md:w-170 md:h-45 opacity-100"
                : "w-0 h-45 opacity-0"
            } bg-white border-2 border-black rounded`}
          ></div>
        </div>
        <div className="flex-col place-items-center md:flex mx-auto md:w-260 md:justify-around md:flex-row-reverse">
          <div
            className={`md:h-45 md:w-45 h-25 w-25 border-2 rounded border-black transitiona-all duration-700 ease-in-out ${
              isOpen2 ? "scale-[0.90]" : "scale-[1.3]"
            }`}
            onClick={() => {
              setIsOpen2(!isOpen2);
            }}
          ></div>
          <div
            className={`transition-all duration-700 ease-in-out ${
              isOpen2
                ? "w-75 h-40 md:w-170 md:h-45 opacity-100"
                : "w-0 h-45 opacity-0"
            } bg-white border-2 border-black rounded`}
          ></div>
        </div>
        <div className="flex-col place-items-center md:flex md:flex-row mx-auto md:w-260 md:justify-around">
          <div
            className={`md:h-45 md:w-45 h-25 w-25 border-2 rounded border-black transitiona-all duration-700 ease-in-out ${
              isOpen3 ? "scale-[0.90]" : "scale-[1.3]"
            }`}
            onClick={() => {
              setIsOpen3(!isOpen3);
            }}
          ></div>
          <div
            className={`transition-all duration-700 ease-in-out ${
              isOpen3
                ? "w-75 h-40 md:w-170 md:h-45 opacity-100"
                : "w-0 h-45 opacity-0"
            } bg-white border-2 border-black rounded`}
          ></div>
        </div>
      </div>
    </section>
  );
}
