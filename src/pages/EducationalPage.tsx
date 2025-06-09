/*import { useState } from "react";
import {
  useGetAllCoursesQuery,
  useEnrollInCourseMutation,
} from "../store/index";
import max from "../assets/images/3d max.svg";
import autocad from "../assets/images/autocad.svg";
import sketchup from "../assets/images/sketchup.svg";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";

export default function EducationalPage() {
  const [isOpen1, setIsOpen1] = useState<string>("second");
  const [isOpen2, setIsOpen2] = useState<string>("second");
  const [isOpen3, setIsOpen3] = useState<string>("second");

  const [name1, setName1] = useState<string>("");
  const [lastName1, setLastName1] = useState<string>("");
  const [phone1, setPhone1] = useState<string>("");

  const [name2, setName2] = useState<string>("");
  const [lastName2, setLastName2] = useState<string>("");
  const [phone2, setPhone2] = useState<string>("");

  const [name3, setName3] = useState<string>("");
  const [lastName3, setLastName3] = useState<string>("");
  const [phone3, setPhone3] = useState<string>("");

  const { data: courses, isLoading } = useGetAllCoursesQuery();
  const [enrollInCourse] = useEnrollInCourseMutation();

  const courseId1 = courses?.[0]?._id;
  const courseId2 = courses?.[1]?._id;
  const courseId3 = courses?.[2]?._id;

  const handleSubmit1 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name1 || !lastName1 || !phone1) return;

    try {
      await enrollInCourse({
        courseId: courseId1,
        enrollmentData: {
          name: name1,
          lastName: lastName1,
          phoneNumber: phone1,
        },
      }).unwrap();

      alert("ثبت نام موفقیت آمیز بود");

      setName1("");
      setLastName1("");
      setPhone1("");
    } catch (error) {
      console.error("Enrolment failed:", error);
      alert("ثبت نام انجام نشد. لطفا دوباره تلاش کنید");
    }
  };

  const handleSubmit2 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name2 || !lastName2 || !phone2) return;

    try {
      await enrollInCourse({
        courseId: courseId2,
        enrollmentData: {
          name: name2,
          lastName: lastName2,
          phoneNumber: phone2,
        },
      }).unwrap();

      alert("ثبت نام موفقیت آمیز بود");

      setName2("");
      setLastName2("");
      setPhone2("");
    } catch (error) {
      console.error("Enrolment failed:", error);
      alert("ثبت نام انجام نشد. لطفا دوباره تلاش کنید");
    }
  };

  const handleSubmit3 = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name3 || !lastName3 || !phone3) return;

    try {
      await enrollInCourse({
        courseId: courseId3,
        enrollmentData: {
          name: name3,
          lastName: lastName3,
          phoneNumber: phone3,
        },
      }).unwrap();

      alert("ثبت نام موفقیت آمیز بود");

      setName3("");
      setLastName3("");
      setPhone3("");
    } catch (error) {
      console.error("Enrolment failed:", error);
      alert("ثبت نام انجام نشد. لطفا دوباره تلاش کنید");
    }
  };

  return (
    <section
      id="educational"
      className="scroll-mt-30 h-auto w-screen max-w-[1920px] mx-auto"
    >
      <div className="basis-auto p-10 flex flex-col gap-5 lg:gap-12 bg-gray-200">
        <div
          data-course-id={courses?.[0]?._id}
          data-course-title={courses?.[0]?.title}
          className=" flex-col relative place-items-center lg:flex lg:flex-row mx-auto lg:w-260 lg:justify-around"
        >
          <div>
            <img
              className={`lg:h-50 lg:w-50 h-25 w-25 transition-all duration-700 ease-in-out ${
                isOpen1 === "first" ? "scale-[0.90]" : "scale-[1.3]"
              }`}
              onClick={() => {
                setIsOpen1(isOpen1 === "first" ? "second" : "first");
              }}
              src={autocad}
            />
          </div>
          <div
            className={`flex flex-col bg-slate-100 transition-all duration-700 ease-in-out absolute top-34 inset-0 lg:left-80 lg:top-5 shadow-xl ${
              isOpen1 === "first"
                ? "p-2 border-4 rounded-xl border-gray-500 w-75 h-50 lg:w-170 lg:h-45 opacity-100 pointer-events-auto"
                : "w-0 h-50 opacity-0 pointer-events-none"
            } `}
          >
            <form onSubmit={handleSubmit1} className=" flex flex-col gap-1">
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={name1}
                placeholder="نام"
                onChange={(e) => setName1(e.target.value)}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={lastName1}
                placeholder="نام خانوادگی"
                onChange={(e) => setLastName1(e.target.value)}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="number"
                value={phone1}
                placeholder="شماره تماس"
                onChange={(e) => setPhone1(e.target.value)}
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
              {isLoading
                ? "در حال بارگذاری..."
                : courses?.[0]?.title || "عنوان پیدا نشد"}
            </h1>
            <div className="text-center lg:absolute lg:flex lg:flex-row top-2 left-2 font-lalezar cursor-default">
              <img className="size-9 hidden lg:block" src={LeftArrow} />
              <h2 className="font-lalezar pt-1 font-bold text-sky-800 cursor-default">
                برای ثبت‌نام بر روی آیکون نرم‌افزار کلیک کنید
              </h2>
            </div>

            <p className="font-lalezar text-center lg:text-right text-md cursor-default pt-2">
              اتودسک اتوکد نرم‌افزاری که برای ترسیم نقشه های مهندسی و صنعتی به
              کار می‌رود. مطمئنا مهندسان نقشه کشی و عمران این ابزار را بسیار
              بهتر از افراد معمولی می شناسند. کاربران اتوکد امکان استفاده از
              محیط‌های دو بعدی و سه بعدی را دارند. در همه جای جهان اگر قرار باشد
              نقشه ای کشیده شود ، همه آن را با محصول اتوکد ترسیم خواهند کرد
              سهولت کار با ابزار اتوکد و سبک بودن این نرم افزار، آن را در میان
              محبوب ترین برنامه های نفشه کشی در میان مهندسین قرار داده است
            </p>
          </div>
        </div>
        <div
          data-course-id={courses?.[1]?._id}
          data-course-title={courses?.[1]?.title}
          className="flex-col relative place-items-center lg:flex mx-auto lg:w-260 lg:justify-around lg:flex-row-reverse"
        >
          <div>
            <img
              className={`lg:h-50 lg:w-50 h-25 w-25 transition-all duration-700 ease-in-out ${
                isOpen2 === "first" ? "scale-[0.90]" : "scale-[1.3]"
              }`}
              onClick={() => {
                setIsOpen2(isOpen2 === "first" ? "second" : "first");
              }}
              src={max}
            />
          </div>
          <div
            className={`flex flex-col bg-slate-100 shadow-xl transition-all duration-700 ease-in-out absolute top-34 inset-0 lg:right-68 lg:top-5 ${
              isOpen2 === "first"
                ? "p-2 border-4 rounded-xl border-gray-500 w-75 h-50 lg:w-170 lg:h-45 opacity-100 pointer-events-auto"
                : "w-0 h-50 opacity-0 pointer-events-none"
            } `}
          >
            <form onSubmit={handleSubmit2} className=" flex flex-col gap-1">
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={name2}
                placeholder="نام"
                onChange={(e) => setName2(e.target.value)}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={lastName2}
                placeholder="نام خانوادگی"
                onChange={(e) => setLastName2(e.target.value)}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="number"
                value={phone2}
                placeholder="شماره تماس"
                onChange={(e) => setPhone2(e.target.value)}
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
              {isLoading
                ? "در حال بارگذاری..."
                : courses?.[1]?.title || "عنوان پیدا نشد"}
            </h1>
            <div className="text-center lg:absolute lg:flex lg:flex-row top-2 right-2 font-lalezar cursor-default">
              <h2 className="font-lalezar pt-1 font-bold text-sky-800 cursor-default">
                برای ثبت‌نام بر روی آیکون نرم‌افزار کلیک کنید
              </h2>
              <img className="size-9 hidden lg:block" src={RightArrow} />
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
        <div
          data-course-id={courses?.[2]?._id}
          data-course-title={courses?.[2]?.title}
          className="flex-col relative place-items-center lg:flex lg:flex-row mx-auto lg:w-260 lg:justify-around"
        >
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
            <form onSubmit={handleSubmit3} className=" flex flex-col gap-1">
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={name3}
                placeholder="نام"
                onChange={(e) => setName3(e.target.value)}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="text"
                value={lastName3}
                placeholder="نام خانوادگی"
                onChange={(e) => setLastName3(e.target.value)}
              />
              <input
                className="border-2 rounded-xl border-fuchsia-300  p-1 font-lalezar"
                type="number"
                value={phone3}
                placeholder="شماره تماس"
                onChange={(e) => setPhone3(e.target.value)}
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
              {isLoading
                ? "در حال بارگذاری..."
                : courses?.[2]?.title || "عنوان پیدا نشد"}
            </h1>
            <div className="text-center lg:absolute lg:flex lg:flex-row top-2 left-2 font-lalezar cursor-default">
              <img className="size-9 hidden lg:block" src={LeftArrow} />
              <h2 className="font-lalezar pt-1 font-bold text-sky-800 cursor-default">
                برای ثبت‌نام بر روی آیکون نرم‌افزار کلیک کنید
              </h2>
            </div>

            <p className="font-lalezar text-center lg:text-right text-md cursor-default pt-2">
              نرم افزار اسکچ آپ یک نرم افزار مدل سازی پیشرفته ی 3 بعدی و بهینه
              سازی برای طیف وسیعی از نرم افزارهای معماری، عمران، مکانیک و حتی
              طراحی کاراکترهای بازی های کامپیوتری است. این نرم افزار مجموعه ای
              از ابزارهای حرفه ای و قدرتمند را برای شما آماده کرده تا توسط آنان
              قادر باشید انواع مدل های 3 بعدی را طراحی کنید. توسط این برنامه،
              شما می توانید مدل های مورد نظر خود را از ابتدا طراحی کرده و یا با
              استفاده از طرح هایی که به صورت آماده قرار گرفته اند استفاده کنید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} */
import { useState, useEffect } from "react";
import {
  useGetAllCoursesQuery,
  useEnrollInCourseMutation,
  RootState,
} from "../store/index";
import { useSelector } from "react-redux";
import { Modal } from "../components/Modal";
import { LoginForm } from "../components/LoginForm";
import { SignupForm } from "../components/SignupForm";
import { motion, AnimatePresence } from "framer-motion";
import {
  useGetAllStudentsByCourseQuery,
  useLazyGetAllStudentsByCourseQuery,
  useGetCurrentUserQuery,
} from "../store";
import max from "../assets/images/3d max.svg";
import autocad from "../assets/images/autocad.svg";
import sketchup from "../assets/images/sketchup.svg";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";

//const courseImages: Record<string, string> = {
//  autocad,
//  max,
//  sketchup,
// add more course image mappings here, use course title or id keys as needed
//};

interface course {
  _id: string;
  title: string;
  description: string;
}

export default function EducationalPage() {
  const { data: courses, isLoading } = useGetAllCoursesQuery();
  const [enrollInCourse] = useEnrollInCourseMutation();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginMode, setLoginMode] = useState(true);

  const { isAuthenticated } = useSelector((state: RootState) => {
    return state.auth;
  });

  const { data: currentUser, isLoading: isUserLoading } =
    useGetCurrentUserQuery();

  // States are stored in a single object keyed by course index or course id
  const [openCourse, setOpenCourse] = useState<string | null>(null);
  const [formData, setFormData] = useState<
    Record<string, { name: string; lastName: string; phone: string }>
  >({});

  const toggleCourse = (id: string) => {
    setOpenCourse((prev) => (prev === id ? null : id));
  };

  const handleInputChange = (
    courseId: string,
    field: "name" | "lastName" | "phone",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        [field]: value,
      },
    }));
  };

  const openModal = (login: boolean) => {
    setLoginMode(login);
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent, courseId: string) => {
    e.preventDefault();

    if (!isAuthenticated) {
      openModal(true);
      return;
    }

    const data = formData[courseId];
    if (!data?.name || !data?.lastName || !data?.phone) return;

    try {
      await enrollInCourse({
        courseId,
        enrollmentData: {
          name: data.name,
          lastName: data.lastName,
          phoneNumber: data.phone,
        },
      }).unwrap();

      alert("ثبت نام موفقیت آمیز بود");

      // Clear form for that course
      setFormData((prev) => ({
        ...prev,
        [courseId]: { name: "", lastName: "", phone: "" },
      }));
    } catch (error) {
      console.error("Enrollment failed:", error);
      alert("ثبت نام انجام نشد. لطفا دوباره تلاش کنید");
    }
  };

  // Helper to get image based on course title (adjust as needed)
  const getCourseImage = (title: string) => {
    if (title.toLowerCase().includes("autocad")) return autocad;
    if (
      title.toLowerCase().includes("3d max") ||
      title.toLowerCase().includes("max")
    )
      return max;
    if (title.toLowerCase().includes("sketchup")) return sketchup;
    return ""; // fallback or default image
  };

  const [triggerGetStudents, { data: students, isFetching }] =
    useLazyGetAllStudentsByCourseQuery();

  useEffect(() => {
    if (students) {
      console.log("Enrolled students:", students);
    }
  }, [students]);

  const handleFetchStudents = (courseId: string) => {
    triggerGetStudents(courseId);
  };

  return (
    <section
      id="educational"
      className="scroll-mt-30 h-auto w-screen max-w-[1920px] mx-auto"
    >
      <div className="basis-auto p-10 flex flex-col gap-5 lg:gap-12 bg-gray-200">
        {isLoading ? (
          <p>در حال بارگذاری...</p>
        ) : (
          courses.map((course: course, idx: number) => {
            const isOpen = openCourse === course._id;
            const form = formData[course._id] || {
              name: "",
              lastName: "",
              phone: "",
            };
            const isSecondView = !isOpen;

            return (
              <div
                key={course._id}
                data-course-id={course._id}
                data-course-title={course.title}
                className={`flex-col relative place-items-center lg:flex ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } mx-auto lg:w-260 lg:justify-around`}
              >
                <div>
                  <img
                    className={`lg:h-50 lg:w-50 h-25 w-25 transition-all duration-700 ease-in-out ${
                      isOpen ? "scale-[0.90]" : "scale-[1.3]"
                    } cursor-pointer`}
                    onClick={() => toggleCourse(course._id)}
                    src={getCourseImage(course.title)}
                    alt={course.title}
                  />
                </div>
                <div
                  className={`flex flex-col bg-slate-100 shadow-xl transition-all duration-700 ease-in-out absolute top-34 inset-0 ${
                    idx % 2 === 1
                      ? "lg:right-68 lg:top-5"
                      : "lg:left-80 lg:top-5"
                  } ${
                    isOpen
                      ? "p-2 border-4 rounded-xl border-gray-500 w-75 h-50 lg:w-170 lg:h-45 opacity-100 pointer-events-auto"
                      : "w-0 h-50 opacity-0 pointer-events-none"
                  }`}
                >
                  <form
                    onSubmit={(e) => handleSubmit(e, course._id)}
                    className="flex flex-col gap-1"
                  >
                    <input
                      className="border-2 rounded-xl border-fuchsia-300 p-1 font-lalezar"
                      type="text"
                      value={form.name}
                      placeholder="نام"
                      onChange={(e) =>
                        handleInputChange(course._id, "name", e.target.value)
                      }
                    />
                    <input
                      className="border-2 rounded-xl border-fuchsia-300 p-1 font-lalezar"
                      type="text"
                      value={form.lastName}
                      placeholder="نام خانوادگی"
                      onChange={(e) =>
                        handleInputChange(
                          course._id,
                          "lastName",
                          e.target.value
                        )
                      }
                    />
                    <input
                      className="border-2 rounded-xl border-fuchsia-300 p-1 font-lalezar"
                      type="number"
                      value={form.phone}
                      placeholder="شماره تماس"
                      onChange={(e) =>
                        handleInputChange(course._id, "phone", e.target.value)
                      }
                    />
                    <div className="mt-2 mx-auto">
                      <button
                        className="border-2 border-gray-500 rounded-sm bg-sky-500 focus:bg-sky-700 mx-auto px-4 mr-3 font-lalezar text-gray-900 hover:bg-sky-600 hover:scale-[1.1] transition-all duration-800"
                        type="submit"
                      >
                        ثبت‌نام
                      </button>
                      {currentUser?.role === "admin" && (
                        <button
                          type="button"
                          onClick={() => handleFetchStudents(course._id)}
                          className="border-2 border-gray-500 rounded-sm bg-amber-400 focus:bg-amber-600 mx-auto px-4 font-lalezar text-gray-900 hover:bg-amber-500 hover:scale-[1.1] transition-all duration-800"
                        >
                          لیست ثبت‌نامی‌ها
                        </button>
                      )}
                    </div>
                  </form>
                </div>
                <div
                  className={`flex flex-col relative p-2 bg-slate-100 border-4 rounded-xl border-gray-600 w-75 h-80 mt-10 lg:w-170 lg:h-40 shadow-xl transition-all duration-700 ease-in-out ${
                    isSecondView
                      ? "opacity-100 pointer-events-auto"
                      : "w-0 h-50 opacity-0 pointer-events-none"
                  }`}
                >
                  <h1
                    className={`font-bold font-boldonse text-xl text-center ${
                      idx % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }  cursor-default`}
                  >
                    {course.title || "عنوان پیدا نشد"}
                  </h1>
                  <div
                    className={`text-center lg:absolute lg:flex lg:flex-row top-2 ${
                      idx % 2 === 1 ? "right-2" : "left-2"
                    } font-lalezar cursor-default`}
                  >
                    {idx % 2 === 1 ? (
                      <>
                        <h2 className="font-lalezar pt-1 font-bold text-sky-800 cursor-default">
                          برای ثبت‌نام بر روی آیکون نرم‌افزار کلیک کنید
                        </h2>
                        <img
                          className="size-9 hidden lg:block"
                          src={RightArrow}
                        />
                      </>
                    ) : (
                      <>
                        <img
                          className="size-9 hidden lg:block"
                          src={LeftArrow}
                        />
                        <h2 className="font-lalezar pt-1 font-bold text-sky-800 cursor-default">
                          برای ثبت‌نام بر روی آیکون نرم‌افزار کلیک کنید
                        </h2>
                      </>
                    )}
                  </div>
                  <p className="font-lalezar text-center lg:text-right text-md cursor-default pt-2 whitespace-pre-line">
                    {course.description || "شرح دوره موجود نیست"}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
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
    </section>
  );
}
