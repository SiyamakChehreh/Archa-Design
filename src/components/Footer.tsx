import Email from "../assets/images/email.svg";
import Telegram from "../assets/images/telegram.svg";
import X from "../assets/images/x.svg";
import Instagram from "../assets/images/instagram.svg";
import Phone from "../assets/images/phone.svg";

//how to fix the Header?

export default function Footer() {
  return (
    <section>
      <footer className="md:h-100 md:w-screen bg-amber-50 flex flex-col justify-start pt-4 items-center relative border-t-8 border-double border-neutral-500">
        <h1 className="absolute bottom-2 left-3 font-bold">
          Copyright © 2025 Archa Design company. All Rights Reserved.
        </h1>
        <div>
          <h1 className="font-boldonse text-md md:text-xl pt-1 md:pt-6">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-row justify-around items-center gap:8 md:gap-30">
          <div className="flex flex-col gap-5 justify-center items-center">
            <a
              className="flex flex-col justify-center items-center gap-5"
              href="#"
            >
              <img className="size-7 md:size-14 md:mt-5" src={Email} />
              <h2 className="font-underdog text-sm md:text-md font-bold">
                email@archadesign.com
              </h2>
            </a>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <a
              className="flex flex-col justify-center items-center gap-5"
              href="#"
            >
              <img className="size-7 md:size-14 md:mt-5" src={Telegram} />
              <h2 className="font-underdog text-sm md:text-md font-bold">
                t.me/archadesign
              </h2>
            </a>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center">
            <a
              className="flex flex-col justify-center items-center gap-5"
              href="#"
            >
              <img className="size-7 md:size-14 md:mt-5" src={X} />
              <h2 className="font-underdog text-sm md:text-md font-bold">
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
              <h2 className="font-underdog text-sm md:text-md font-bold">
                archa.design
              </h2>
            </a>
          </div>
        </div>
        <div className="h-30 w-auto">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="font-boldonse text-xl pt-7">Address:</h1>
            <p className="font-underdog text-md font-bold">
              Golestan province, Gorgan, Naharkhoran boulvard, Edalat 69, Archa
              Design office
            </p>
            <a
              href="#"
              className="flex flex-col justify-center items-center gap-4"
            >
              <img src={Phone} className="size-12" />
              <p className="font-underdog text-xl  font-bold">
                017-23474367, 017-34752349
              </p>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
