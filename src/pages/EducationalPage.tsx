import { useState, useEffect } from "react";
import {
  useGetAllCoursesQuery,
  useEnrollInCourseMutation,
  useGetCurrentUserQuery,
  useDeleteCourseMutation,
  RootState,
} from "../store/index";
import { useSelector } from "react-redux";
import { CourseStudentsModal } from "../components/CourseStudentsModal";
import { Modal } from "../components/Modal";
import { LoginForm } from "../components/LoginForm";
import { SignupForm } from "../components/SignupForm";
import { motion, AnimatePresence } from "framer-motion";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";

interface course {
  _id: string;
  title: string;
  description: string;
  image: string;
}

export default function EducationalPage() {
  const {
    data: courses,
    isLoading,
    refetch: refetchCourses,
  } = useGetAllCoursesQuery();
  console.log(courses);

  const [enrollInCourse] = useEnrollInCourseMutation();
  const [deleteCourse] = useDeleteCourseMutation();

  const [isCourseModalOpen, setCourseModalOpen] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginMode, setLoginMode] = useState(true);

  const { isAuthenticated } = useSelector((state: RootState) => {
    return state.auth;
  });

  const { data: currentUser, refetch } = useGetCurrentUserQuery();

  useEffect(() => {
    refetch();
  }, [isAuthenticated]);

  console.log(currentUser);

  const handleDeleteCourse = (courseId: string) => {
    deleteCourse(courseId);
    refetchCourses();
  };

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

  const openCourseModal = () => {
    setCourseModalOpen(true);
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
                    src={course.image}
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
                      ? "p-2 border-4 rounded-xl border-gray-500 w-75 h-65 lg:w-170 lg:h-45 opacity-100 pointer-events-auto"
                      : "w-0 h-50 opacity-0 pointer-events-none"
                  }`}
                >
                  <form
                    onSubmit={(e) => handleSubmit(e, course._id)}
                    className="flex flex-col gap-1 h-auto"
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
                    <div className="mt-2 mx-auto flex flex-col gap-2 md:flex-row">
                      <button
                        className="border-2 border-gray-500 rounded-sm bg-sky-500 focus:bg-sky-700 px-4 md:mr-3 font-lalezar text-gray-900 hover:bg-sky-600 hover:scale-[1.1] transition-all duration-800"
                        type="submit"
                      >
                        ثبت‌نام
                      </button>
                      {currentUser?.role === "admin" && (
                        <div className="flex flex-col gap-2 md:flex-row">
                          <button
                            type="button"
                            onClick={() => openCourseModal()}
                            className="border-2 border-gray-500 rounded-sm bg-amber-400 focus:bg-amber-600 mx-auto px-4 font-lalezar text-gray-900 hover:bg-amber-500 hover:scale-[1.1] transition-all duration-800"
                          >
                            لیست ثبت‌نامی‌ها
                          </button>
                          <button
                            className="border-2 border-gray-500 rounded-sm bg-rose-300 md:ml-3 px-4 font-lalezar text-gray-900 hover:bg-rose-400 hover:scale-[1.1] transition-all duration-800"
                            onClick={() => handleDeleteCourse(course._id)}
                          >
                            حذف دوره
                          </button>
                        </div>
                      )}
                    </div>
                  </form>
                  <CourseStudentsModal
                    isCourseOpen={isCourseModalOpen}
                    onClose={() => setCourseModalOpen(false)}
                    courseId={course._id}
                  />
                </div>
                <div
                  className={`flex flex-col relative p-2 bg-slate-100 border-4 rounded-xl border-gray-600 w-75 h-auto mt-10 lg:w-170 lg:h-auto shadow-xl transition-all duration-700 ease-in-out ${
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
