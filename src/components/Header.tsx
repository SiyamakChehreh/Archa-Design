import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useGetCurrentUserQuery } from "../store";
import { logout, RootState } from "../store";
import X from "../assets/images/x.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import Telegram from "../assets/images/telegram3.svg";
import HamburgerMenu from "../assets/images/hamburger-menu-icon.svg";
import { Modal } from "./Modal";
import MyCoursesModal from "./MyCoursesModal";
import { LoginForm } from "./LoginForm";
import { SignupForm } from "./SignupForm";
import { motion, AnimatePresence } from "framer-motion";
import { StudentsModal } from "./StudentsModal";
import { CreateCourseModal } from "./CreateCourseModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [studentsModalOpen, setStudentsModalOpen] = useState(false);
  const [createCourseModal, setCreateCourseModal] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginMode, setLoginMode] = useState(true);

  const location = useLocation();
  const dispatch = useDispatch();

  const { isAuthenticated, email } = useSelector(
    (state: RootState) => state.auth
  );

  const { data: currentUser } = useGetCurrentUserQuery();

  console.log(currentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const isHome = location.pathname === "/";

  const openModal = (login: boolean) => {
    setLoginMode(login);
    setModalOpen(true);
  };

  const handleShowCourses = () => {
    setOpen(!open);
  };

  const handleShowTools = () => {
    setToolsOpen(!toolsOpen);
  };

  const handleStudentsModal = () => {
    setStudentsModalOpen(!studentsModalOpen);
  };

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
            <li className="border-4 rounded-xl border-indigo-200 hover:border-stone-500 hover:font-bold shadow-xl px-6 py-4 hover:bg-gray-300 transition-all duration-600 text-xl font-lalezar hover:scale-[1.1]">
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
            <li className="border-4 rounded-xl border-indigo-200 hover:border-stone-500 hover:font-bold shadow-xl px-6 py-4 hover:bg-gray-300 transition-all duration-600 text-xl font-lalezar hover:scale-[1.1]">
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
            <li className="border-4 rounded-xl border-indigo-200 hover:border-stone-500 hover:font-bold shadow-xl px-6 py-4 hover:bg-gray-300 transition-all duration-600  text-xl font-lalezar hover:scale-[1.1]">
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
            <li className="border-4 rounded-xl border-indigo-200 hover:border-stone-500 hover:font-bold shadow-xl px-6 py-4 hover:bg-gray-300 transition-all duration-600 text-xl font-lalezar hover:scale-[1.1]">
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
          {isAuthenticated ? (
            <div className="flex-col justify-items-center justify-around ml-5">
              <div className="font-underdog font-bold text-md">{email}</div>
              <div className="flex flex-row gap-6">
                <button
                  onClick={handleLogout}
                  className="hover:bg-rose-300 border-2 border-indigo-200 shadow-xl rounded-2xl px-4 py-2 mt-4 font-lalezar transition-all duration-700 hover:scale-[1.3]"
                >
                  خروج
                </button>
                {currentUser?.role === "admin" ? (
                  <button
                    onClick={handleShowTools}
                    className="hover:bg-amber-300 border-2 border-indigo-200 shadow-xl rounded-2xl px-4 py-2 mt-4 font-lalezar transition-all duration-700 hover:scale-[1.3]"
                  >
                    ابزارها
                  </button>
                ) : (
                  <button
                    onClick={handleShowCourses}
                    className="hover:bg-rose-300 border-2 border-indigo-200 shadow-xl rounded-2xl px-4 py-2 mt-4 font-lalezar transition-all duration-700 hover:scale-[1.3]"
                  >
                    دوره‌ها
                  </button>
                )}
                {open && <MyCoursesModal onClose={() => setOpen(false)} />}
                {toolsOpen && (
                  <div className="bg-amber-200 border-indigo-200 border-3 rounded-xl absolute z-40 top-[120px] right-4 py-3 mx-auto justify-items-center flex flex-col gap-4 w-full max-w-xs shadow-2xl">
                    <button
                      onClick={handleStudentsModal}
                      className="font-lalezar border-2 hover:bg-amber-300 border-gray-400 rounded-md mx-auto px-12 py-2 transition-all duration-700 cursor-pointer shadow-md"
                    >
                      لیست تمامی متقاضیان
                    </button>
                    <button
                      onClick={() => setCreateCourseModal(!createCourseModal)}
                      className="font-lalezar border-2 hover:bg-amber-300 border-gray-400 rounded-md mx-auto px-12 py-2 transition-all duration-700 cursor-pointer shadow-md"
                    >
                      اضافه کردن دوره‌ی جدید
                    </button>
                  </div>
                )}
                <StudentsModal
                  isModalOpen={studentsModalOpen}
                  onClose={() => setStudentsModalOpen(false)}
                />
                <CreateCourseModal
                  isCreateCourseOpen={createCourseModal}
                  onClose={() => setCreateCourseModal(false)}
                />
              </div>
            </div>
          ) : (
            <button
              onClick={() => openModal(true)}
              className="ml-15 border-4 rounded-4xl bg-sky-500 border-indigo-200 hover:border-stone-700 hover:font-bold px-4 py-2 hover:bg-sky-400 transition-all duration-600 text-xl font-lalezar hover:scale-[1.1]"
            >
              عضویت/ورود
            </button>
          )}
          <Modal
            isLoginMode={isLoginMode}
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
          >
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setLoginMode(true)}
                className={`px-4 py-2 rounded-l-lg font-lalezar ${
                  isLoginMode ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                ورود
              </button>
              <button
                onClick={() => setLoginMode(false)}
                className={`px-4 py-2 rounded-r-lg font-lalezar ${
                  !isLoginMode ? "bg-indigo-400 text-white" : "bg-gray-200"
                }`}
              >
                عضویت
              </button>
            </div>

            <AnimatePresence mode="wait">
              {isLoginMode ? (
                <motion.div
                  key="login"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <LoginForm onClose={() => setModalOpen(false)} />
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <SignupForm onClose={() => setModalOpen(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </Modal>
        </nav>
        <nav className="py-3">
          <div className="md:hidden flex justify-around items-start">
            <div className="text-md font-boldonse">
              <Link to="/">
                Archa
                <span className="text-sky-600 text-md">Design</span>
              </Link>
            </div>
            <div className="flex gap-4 mb-2 ml-15 mx-auto">
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
            {isAuthenticated ? (
              <div className="">
                <button
                  onClick={handleLogout}
                  className="hover:bg-rose-300 border-2 border-blue-500 rounded-2xl mx-auto px-2 mr-2 font-lalezar transition-all duration-700 hover:scale-[1.1]"
                >
                  خروج
                </button>
                {currentUser?.role === "user" && (
                  <button
                    onClick={handleShowCourses}
                    className="hover:bg-rose-300 border-2 border-blue-500 rounded-2xl mx-auto px-2 mr-2 font-lalezar transition-all duration-700 hover:scale-[1.1]"
                  >
                    دوره‌ها
                  </button>
                )}
                {open && <MyCoursesModal onClose={() => setOpen(false)} />}
              </div>
            ) : (
              <button
                onClick={() => openModal(true)}
                className="border-blue-500 border-2 mx-auto px-2 rounded-2xl bg-gray-300 font-lalezar"
              >
                عضویت/ورود
              </button>
            )}

            <Modal
              isLoginMode={isLoginMode}
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            >
              <div className="flex justify-center mb-4">
                <button
                  onClick={() => setLoginMode(true)}
                  className={`px-4 py-2 rounded-l-lg font-lalezar ${
                    isLoginMode ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  ورود
                </button>
                <button
                  onClick={() => setLoginMode(false)}
                  className={`px-4 py-2 rounded-r-lg font-lalezar ${
                    !isLoginMode ? "bg-indigo-400 text-white" : "bg-gray-200"
                  }`}
                >
                  عضویت
                </button>
              </div>

              <AnimatePresence mode="wait">
                {isLoginMode ? (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <LoginForm onClose={() => setModalOpen(false)} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SignupForm onClose={() => setModalOpen(false)} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Modal>
            <button className="mr-6">
              <img
                className="size-6 right-4 hover:scale-[1.2] transition-all duration-700"
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
              {isAuthenticated && currentUser?.role === "admin" && (
                <div className="flex flex-col">
                  <button className="block py-2 text-gray-700 hover:text-blue-600 font-lalezar font-bold">
                    لیست تمامی متقاضیان
                  </button>
                  <button className="block py-2 text-gray-700 hover:text-blue-600 font-lalezar font-bold">
                    اضافه کردن دوره‌ی جدید
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}
