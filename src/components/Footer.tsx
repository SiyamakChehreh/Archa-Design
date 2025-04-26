import Email from "../assets/images/email.svg";
import Telegram from "../assets/images/telegram3.svg";
import X from "../assets/images/x.svg";
import Instagram from "../assets/images/instagram.svg";
import Phone from "../assets/images/phone.svg";

//how to fix the Header?

export default function Footer() {
  return (
    <footer className="md:h-100 md:w-screen bg-amber-50 flex flex-col justify-start pt-2 items-center relative border-t-8 border-double border-neutral-500">
      <div>
        <h1 className="font-boldonse text-md md:text-xl pt-1 md:pt-6 cursor-default">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-row justify-around items-center mt-3 md:mt-0 gap-15 md:gap-30">
        <div className="flex flex-col gap-5 justify-center items-center">
          <a
            className="flex flex-col justify-center items-center gap-5"
            href="#"
          >
            <img className="size-7 md:size-14 md:mt-5 shadow-2xl" src={Email} />
            <h2 className="hidden md:block font-underdog text-sm md:text-md font-bold">
              email@archadesign.com
            </h2>
          </a>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <a
            className="flex flex-col justify-center items-center gap-5"
            href="#"
          >
            <img
              className="size-8 shadow-2xl md:size-14 md:mt-5"
              src={Telegram}
            />
            <h2 className="hidden md:block font-underdog text-sm md:text-md font-bold">
              t.me/archadesign
            </h2>
          </a>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <a
            className="flex flex-col justify-center items-center gap-5"
            href="#"
          >
            <img className="size-7 shadow-2xl md:size-14 md:mt-5" src={X} />
            <h2 className="hidden md:block font-underdog text-sm md:text-md font-bold">
              @archadesign
            </h2>
          </a>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <a
            className="flex flex-col justify-center items-center gap-5"
            href="#"
          >
            <img className="size-7 md:size-14 md:mt-5" src={Instagram} />
            <h2 className="hidden md:block font-underdog text-sm md:text-md font-bold">
              archa.design
            </h2>
          </a>
        </div>
      </div>
      <div className="h-30 w-auto">
        <div className="flex flex-col gap-1 md:gap-4 justify-center items-center">
          <h1 className="font-boldonse text-md md:text-xl pt-3 md:pt-7 cursor-default">
            Address:
          </h1>
          <p className="font-underdog text-sm md:text-md md:font-bold cursor-default">
            Golestan, Gorgan, Naharkhoran boulvard, Edalat 69, Archa Design
          </p>
          <a
            href="#"
            className="flex flex-col justify-center items-center gap-2 md:gap-4"
          >
            <img src={Phone} className="size-5 md:size-12 hidden md:block" />
            <p className="font-underdog text-md md:text-xl font-bold cursor-default">
              017-23474367, 017-34752349
            </p>
          </a>
        </div>
      </div>
      <h1 className="absolute text-sm md:text-lg bottom-0 left-0 md:bottom-2 md:left-3 md:font-bold cursor-default">
        Copyright © 2025 Archa Design company. All Rights Reserved.
      </h1>
    </footer>
  );
}
