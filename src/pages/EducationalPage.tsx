import { useState } from "react";

export default function EducationalPage() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <section id="educational" className="scroll-mt-30">
      <div className="h-auto w-screen basis-auto p-10 flex flex-col gap-5 lg:gap-12 bg-gray-200">
        <div className="flex-col place-items-center lg:flex lg:flex-row mx-auto lg:w-260 lg:justify-around">
          <div
            className={`lg:h-45 lg:w-45 h-25 w-25 border-2 rounded border-black transitiona-all duration-700 ease-in-out ${
              isOpen1 ? "scale-[0.90]" : "scale-[1.3]"
            }`}
            onClick={() => {
              setIsOpen1(!isOpen1);
            }}
          ></div>
          <div
            className={`transition-all duration-700 ease-in-out ${
              isOpen1
                ? "w-75 h-40 lg:w-170 lg:h-45 opacity-100"
                : "w-0 h-45 opacity-0"
            } bg-white border-2 border-black rounded`}
          ></div>
        </div>
        <div className="flex-col place-items-center lg:flex mx-auto lg:w-260 lg:justify-around lg:flex-row-reverse">
          <div
            className={`lg:h-45 lg:w-45 h-25 w-25 border-2 rounded border-black transitiona-all duration-700 ease-in-out ${
              isOpen2 ? "scale-[0.90]" : "scale-[1.3]"
            }`}
            onClick={() => {
              setIsOpen2(!isOpen2);
            }}
          ></div>
          <div
            className={`transition-all duration-700 ease-in-out ${
              isOpen2
                ? "w-75 h-40 lg:w-170 lg:h-45 opacity-100"
                : "w-0 h-45 opacity-0"
            } bg-white border-2 border-black rounded`}
          ></div>
        </div>
        <div className="flex-col place-items-center lg:flex lg:flex-row mx-auto lg:w-260 lg:justify-around">
          <div
            className={`lg:h-45 lg:w-45 h-25 w-25 border-2 rounded border-black transitiona-all duration-700 ease-in-out ${
              isOpen3 ? "scale-[0.90]" : "scale-[1.3]"
            }`}
            onClick={() => {
              setIsOpen3(!isOpen3);
            }}
          ></div>
          <div
            className={`transition-all duration-700 ease-in-out ${
              isOpen3
                ? "w-75 h-40 lg:w-170 lg:h-45 opacity-100"
                : "w-0 h-45 opacity-0"
            } bg-white border-2 border-black rounded`}
          ></div>
        </div>
      </div>
    </section>
  );
}
