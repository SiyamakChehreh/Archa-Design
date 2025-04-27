import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import X from "../assets/images/x.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import Telegram from "../assets/images/telegram3.svg";
import HamburgerMenu from "../assets/images/hamburger-menu-icon.svg";

//https://stackoverflow.com/questions/61196420/react-navigation-that-will-smooth-scroll-to-section-of-the-page

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const isHome = location.pathname === "/";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-stone-100 max-w-[1920px] mx-auto w-screen">
        <nav
          className={`${
            isHome ? (isScrolled ? "opacity-20" : "opacity-90") : "opacity-20"
          } hidden mx-auto md:flex flex-row h-30 w-screen max-w-[1920px] fixed top-0 z-50 px-5  bg-amber-100 border-b-5 border-indigo-200 justify-center items-center hover:opacity-90 transition-all duration-700 shadow-md`}
        >
          <div className="text-3xl font-boldonse ml-2">
            <Link
              to="/"
              onClick={(e) => {
                let home = document.getElementById("home");
                e.preventDefault();
                home && home.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Archa
              <span className="text-sky-600 text-3xl">Design</span>
            </Link>
          </div>
          <ul className="flex flex-row gap-12 items-center ml-20">
            <li className="border-4 rounded-xl border-indigo-200 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-all duration-600 text-xl font-lalezar hover:scale-[1.1]">
              <Link
                to="educational"
                onClick={(e) => {
                  let education = document.getElementById("educational");
                  e.preventDefault();
                  education && education.scrollIntoView({ behavior: "smooth" });
                }}
              >
                برنامه های آموزشی
              </Link>
            </li>
            <li className="border-4 rounded-xl border-indigo-200 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-all duration-600 text-xl font-lalezar hover:scale-[1.1]">
              <Link
                to="/about"
                onClick={(e) => {
                  let about = document.getElementById("about");
                  e.preventDefault();
                  about && about.scrollIntoView({ behavior: "smooth" });
                }}
              >
                درباره ی ما
              </Link>
            </li>
            <li className="border-4 rounded-xl border-indigo-200 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-all duration-600  text-xl font-lalezar hover:scale-[1.1]">
              <Link
                to="/architects"
                onClick={(e) => {
                  let architects = document.getElementById("architects");
                  e.preventDefault();
                  architects &&
                    architects.scrollIntoView({ behavior: "smooth" });
                }}
              >
                تیم معماران
              </Link>
            </li>
            <li className="border-4 rounded-xl border-indigo-200 hover:border-stone-500 hover:font-bold px-6 py-4 hover:bg-gray-300 transition-all duration-600 text-xl font-lalezar hover:scale-[1.1]">
              <Link
                to="/projects"
                onClick={(e) => {
                  let projects = document.getElementById("projects");
                  e.preventDefault();
                  projects && projects.scrollIntoView({ behavior: "smooth" });
                }}
              >
                پروژه های ما
              </Link>
            </li>
          </ul>

          <ul className="flex flex-row mx-auto my-auto md:gap-15 md:place-items-center">
            <li className="hover:font-bold flex gap-7">
              <Link to="#">
                <img className="size-10" src={X} />
              </Link>
              <Link className="size-10" to="#">
                <img src={instagram} />
              </Link>
              <Link to="#">
                <img className="size-10" src={facebook} />
              </Link>
              <Link to="#">
                <img className="size-11 mb-1" src={Telegram} />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="py-3">
          <div className="md:hidden flex justify-around items-start">
            <div className="text-md font-boldonse">
              <Link to="/">
                Archa
                <span className="text-sky-600 text-md">Design</span>
              </Link>
            </div>
            <div className="flex gap-4 mb-2">
              <Link to="#">
                <img className="size-6" src={X} />
              </Link>
              <Link className="size-6" to="#">
                <img src={instagram} />
              </Link>
              <Link to="#">
                <img className="size-6" src={facebook} />
              </Link>
              <Link to="#">
                <img className="size-7" src={Telegram} />
              </Link>
            </div>
            <button className="">
              <img
                className="size-6 right-4"
                src={HamburgerMenu}
                onClick={handleClick}
              />
            </button>
          </div>
          {isOpen && (
            <div className="md:hidden px-4 pb-4 bg-stone-200 shadow-md flex flex-col items-end">
              <Link
                to="/about"
                className="block py-2 text-gray-700 hover:text-blue-600 font-lalezar font-bold"
                onClick={(e) => {
                  let about = document.getElementById("about");
                  e.preventDefault();
                  about && about.scrollIntoView({ behavior: "smooth" });
                }}
              >
                درباره ی ما
              </Link>
              <Link
                to="/architects"
                className="block py-2 text-gray-700 hover:text-blue-600 font-lalezar font-bold"
                onClick={(e) => {
                  let architects = document.getElementById("architects");
                  e.preventDefault();
                  architects &&
                    architects.scrollIntoView({ behavior: "smooth" });
                }}
              >
                تیم معماران
              </Link>
              <Link
                to="/projects"
                className="block py-2 text-gray-700 hover:text-blue-600 font-lalezar font-bold"
                onClick={(e) => {
                  let project = document.getElementById("projects");
                  e.preventDefault();
                  project && project.scrollIntoView({ behavior: "smooth" });
                }}
              >
                پروژه های ما
              </Link>
              <Link
                to="/educational"
                className="block py-2 text-gray-700 hover:text-blue-600 font-lalezar font-bold"
                onClick={(e) => {
                  let education = document.getElementById("educational");
                  e.preventDefault();
                  education && education.scrollIntoView({ behavior: "smooth" });
                }}
              >
                برنامه‌های آموزشی
              </Link>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
