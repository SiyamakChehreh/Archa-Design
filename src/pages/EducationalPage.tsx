import { ChangeEvent, useState } from "react";
import max from "../assets/images/3d max.svg";
import autocad from "../assets/images/autocad.svg";
import sketchup from "../assets/images/sketchup.svg";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";

interface user {
  name: string;
  lastName: string;
  phone: string;
}

export default function EducationalPage() {
  const [isOpen1, setIsOpen1] = useState<string>("second");
  const [isOpen2, setIsOpen2] = useState<string>("second");
  const [isOpen3, setIsOpen3] = useState<string>("second");

  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [users, setUsers] = useState<user[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !lastName || !phone) return;

    const newUsers = { name, lastName, phone };

    setUsers((prevUsers) => [...prevUsers, newUsers]);

    setName("");
    setLastName("");
    setPhone("");
  };

  console.log(users);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <section id="educational" className="scroll-mt-30">
      <div className="h-auto w-screen basis-auto p-10 flex flex-col gap-5 lg:gap-12 bg-gray-200">
        <div className="flex-col relative place-items-center lg:flex lg:flex-row mx-auto lg:w-260 lg:justify-around">
          <div>
            <img
              className={`lg:h-50 lg:w-50 h-25 w-25 transition-all duration-700 ease-in-out ${
                isOpen1 === "first" ? "scale-[0.90]" : "scale-[1.3]"
              }`}
              onClick={() => {
                setIsOpen1(isOpen1 === "first" ? "second" : "first");
              }}
              src={max}
            />
          </div>
          <div
            className={`flex flex-col bg-slate-100 transition-all duration-700 ease-in-out absolute top-34 inset-0 lg:left-80 lg:top-5 shadow-xl ${
              isOpen1 === "first"
                ? "p-2 border-4 rounded-xl border-gray-500 w-75 h-50 lg:w-170 lg:h-45 opacity-100 pointer-events-auto"
                : "w-0 h-50 opacity-0 pointer-events-none"
            } `}
          >
            <form onSubmit={handleSubmit} className=" flex flex-col gap-1">
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={name}
                placeholder="نام"
                onChange={handleChangeName}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={lastName}
                placeholder="نام خانوادگی"
                onChange={handleChangeLastName}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="number"
                value={phone}
                placeholder="شماره تماس"
                onChange={handleChangePhone}
              />
              <button
                className="border-2 border-gray-500 rounded-sm bg-sky-500 focus:bg-sky-700 mx-auto px-4 mt-2 font-lalezar text-gray-900"
                type="submit"
              >
                ثبت‌نام
              </button>
            </form>
          </div>
          <div
            className={`flex flex-col relative p-2 bg-slate-100 border-4 rounded-xl border-gray-600 w-75 h-80 mt-10 lg:w-170 lg:h-40 shadow-xl transition-all duration-700 ease-in-out ${
              isOpen1 === "second"
                ? "opacity-100 pointer-events-auto"
                : "w-0 h-50 opacity-0 pointer-events-none"
            } `}
          >
            <h1 className="font-boldonse font-bold text-xl text-center lg:text-right cursor-default">
              3d Max
            </h1>
            <div className="text-center lg:absolute lg:flex lg:flex-row top-2 left-2 font-lalezar cursor-default">
              <img className="size-9 hidden lg:block" src={LeftArrow} />
              <h2 className="font-lalezar pt-1 font-bold text-sky-800 cursor-default">
                برای ثبت‌نام بر روی آیکون نرم‌افزار کلیک کنید
              </h2>
            </div>

            <p className="font-lalezar text-center lg:text-right text-md cursor-default pt-2">
              اتودسک تری دی مکس یکی از قویترین و پیشرفته ترین برنامه‌ها در زمینه
              طراحی سه بعدی و انیمیشن سازی به شمار می رود. این نرم‌افزار به خاطر
              داشتن ابزارهای کارا و قدرتمند در بسیاری از صنایع به ویژه بازیهای
              رایانه ای و طراحی و خلق جلوه های ویژه در فیلمها بسیار پرکاربرد
              است.مهندسان می توانند به راحتی طراحیهای خود در محیط اتوکد را وارد
              این برنامه کرده و نمای سه بعدی طرح خود را ایجاد کنند و با چاپ آن،
              نمای کلی طرح خود را قبل از اجرا به مشتریان خود نشان دهند
            </p>
          </div>
        </div>
        <div className="flex-col relative place-items-center lg:flex mx-auto lg:w-260 lg:justify-around lg:flex-row-reverse">
          <div>
            <img
              className={`lg:h-50 lg:w-50 h-25 w-25 transition-all duration-700 ease-in-out ${
                isOpen2 === "first" ? "scale-[0.90]" : "scale-[1.3]"
              }`}
              onClick={() => {
                setIsOpen2(isOpen2 === "first" ? "second" : "first");
              }}
              src={autocad}
            />
          </div>
          <div
            className={`flex flex-col bg-slate-100 shadow-xl transition-all duration-700 ease-in-out absolute top-34 inset-0 lg:right-68 lg:top-5 ${
              isOpen2 === "first"
                ? "p-2 border-4 rounded-xl border-gray-500 w-75 h-50 lg:w-170 lg:h-45 opacity-100 pointer-events-auto"
                : "w-0 h-50 opacity-0 pointer-events-none"
            } `}
          >
            <form onSubmit={handleSubmit} className=" flex flex-col gap-1">
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={name}
                placeholder="نام"
                onChange={handleChangeName}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={lastName}
                placeholder="نام خانوادگی"
                onChange={handleChangeLastName}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="number"
                value={phone}
                placeholder="شماره تماس"
                onChange={handleChangePhone}
              />
              <button
                className="border-2 border-gray-500 rounded-sm bg-sky-500 focus:bg-sky-700 mx-auto px-4 mt-2 font-lalezar text-gray-900"
                type="submit"
              >
                ثبت‌نام
              </button>
            </form>
          </div>
          <div
            className={`flex flex-col relative p-2 shadow-xl bg-slate-100 border-4 rounded-xl border-gray-600 w-75 h-80 mt-10 lg:w-170 lg:h-40 transition-all duration-700 ease-in-out ${
              isOpen2 === "second"
                ? "opacity-100 pointer-events-auto"
                : "w-0 h-50 opacity-0 pointer-events-none"
            } `}
          >
            <h1 className="font-boldonse font-bold text-xl text-center lg:text-left cursor-default">
              AutoCad
            </h1>
            <div className="text-center lg:absolute lg:flex lg:flex-row top-2 right-2 font-lalezar cursor-default">
              <h2 className="font-lalezar pt-1 font-bold text-sky-800 cursor-default">
                برای ثبت‌نام بر روی آیکون نرم‌افزار کلیک کنید
              </h2>
              <img className="size-9 hidden lg:block" src={RightArrow} />
            </div>

            <p className="font-lalezar text-center lg:text-right text-md cursor-default pt-2">
              اتودسک تری دی مکس یکی از قویترین و پیشرفته ترین برنامه ها در زمینه
              طراحی سه بعدی و انیمیشن سازی به شمار می رود. این نرم‌افزار به خاطر
              داشتن ابزارهای کارا و قدرتمند در بسیاری از صنایع به ویژه بازیهای
              رایانه ای و طراحی و خلق جلوه های ویژه در فیلمها بسیار پرکاربرد
              است.مهندسان می توانند به راحتی طراحیهای خود در محیط اتوکد را وارد
              این برنامه کرده و نمای سه بعدی طرح خود را ایجاد کنند و با چاپ آن،
              نمای کلی طرح خود را قبل از اجرا به مشتریان خود نشان دهند
            </p>
          </div>
        </div>
        <div className="flex-col relative place-items-center lg:flex lg:flex-row mx-auto lg:w-260 lg:justify-around">
          <div>
            <img
              className={`lg:h-50 lg:w-50 h-25 w-25 transition-all duration-700 ease-in-out ${
                isOpen3 === "first" ? "scale-[0.90]" : "scale-[1.3]"
              }`}
              onClick={() => {
                setIsOpen3(isOpen3 === "first" ? "second" : "first");
              }}
              src={sketchup}
            />
          </div>
          <div
            className={`flex flex-col shadow-xl bg-slate-100 transition-all duration-700 ease-in-out absolute top-34 inset-0 lg:left-80 lg:top-5 ${
              isOpen3 === "first"
                ? "p-2 border-4 rounded-xl border-gray-500 w-75 h-50 lg:w-170 lg:h-45 opacity-100 pointer-events-auto"
                : "w-0 h-50 opacity-0 pointer-events-none"
            } `}
          >
            <form onSubmit={handleSubmit} className=" flex flex-col gap-1">
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={name}
                placeholder="نام"
                onChange={handleChangeName}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={lastName}
                placeholder="نام خانوادگی"
                onChange={handleChangeLastName}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="number"
                value={phone}
                placeholder="شماره تماس"
                onChange={handleChangePhone}
              />
              <button
                className="border-2 border-gray-500 rounded-sm bg-sky-500 focus:bg-sky-700 mx-auto px-4 mt-2 font-lalezar text-gray-900"
                type="submit"
              >
                ثبت‌نام
              </button>
            </form>
          </div>
          <div
            className={`flex flex-col relative shadow-xl p-2 bg-slate-100 border-4 rounded-xl border-gray-600 w-75 h-80 mt-10 lg:w-170 lg:h-40 transition-all duration-700 ease-in-out ${
              isOpen3 === "second"
                ? "opacity-100 pointer-events-auto"
                : "w-0 h-50 opacity-0 pointer-events-none"
            } `}
          >
            <h1 className="font-boldonse font-bold text-xl text-center lg:text-right cursor-default">
              Sketch Up
            </h1>
            <div className="text-center lg:absolute lg:flex lg:flex-row top-2 left-2 font-lalezar cursor-default">
              <img className="size-9 hidden lg:block" src={LeftArrow} />
              <h2 className="font-lalezar pt-1 font-bold text-sky-800 cursor-default">
                برای ثبت‌نام بر روی آیکون نرم‌افزار کلیک کنید
              </h2>
            </div>

            <p className="font-lalezar text-center lg:text-right text-md cursor-default pt-2">
              اتودسک تری دی مکس یکی از قویترین و پیشرفته ترین برنامه ها در زمینه
              طراحی سه بعدی و انیمیشن سازی به شمار می رود. این نرم‌افزار به خاطر
              داشتن ابزارهای کارا و قدرتمند در بسیاری از صنایع به ویژه بازیهای
              رایانه ای و طراحی و خلق جلوه های ویژه در فیلمها بسیار پرکاربرد
              است.مهندسان می توانند به راحتی طراحیهای خود در محیط اتوکد را وارد
              این برنامه کرده و نمای سه بعدی طرح خود را ایجاد کنند و با چاپ آن،
              نمای کلی طرح خود را قبل از اجرا به مشتریان خود نشان دهند
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
