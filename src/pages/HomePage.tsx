import building from "../assets/images/building.jpg";
import building2 from "../assets/images/architecture/building5.jpg";
import { useState } from "react";

function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const content =
    " دفتر معماری آرکا دیزاین در سال 1394 با تلاش مهندس روح‌الله احمدی در شهر گرگان، با هدف طراحی داخلی منازل مسکونی و دفاتر اداری ایجاد شد. رفته رفته با افزایش پروژه‌ها و تعداد کارمندان، امور دیگری نیز در دستور کار این شرکت قرار گرفت. از مهم‌ترین این امور می‌توان به طراحی نمای ساختمان و مشاوره‌های مختلف در رابطه با انواع ساخت و ساز و طراحی‌ها نیز به خدمات این مجموعه اضافه گردید. این مجموعه در حال حاضر با در احتیار داشتن کادری مجرب و متعهد در همه‌ی امور ساحتمانی آماده‌ی خدمت‌رسانی به متقاضیان گرامی می‌باشد";

  return (
    <section id="home">
      <div className="relative h-screen max-h-[1200px] w-screen max-w-[1920px] mx-auto">
        <img
          className="hidden md:block overflow-x-hidden absolute mx-auto inset-0 w-[100%] h-full object-fill z-0 opacity-55 border-b-4 border-stone-500"
          src={building}
          alt="building"
        />
        <img
          className="md:hidden blur-xs absolute mx-auto inset-0 w-full h-full object-fill z-0 opacity-95 border-b-4 border-stone-500"
          src={building2}
          alt="building"
        />

        <div className="relative overflow-x-hidden z-10 flex flex-col md:w-150 float-right pt-7 md:mt-30 pr-7">
          <h1 className="md:text-5xl text-2xl font-extrabold font-lalezar text-white md:text-black text-right cursor-default">
            فضا را تصور کن
          </h1>
          <h1 className="md:text-5xl text-2xl font-extrabold font-lalezar text-right mt-3 text-white md:text-black cursor-default">
            تصوراتت را زندگی کن
          </h1>
          <p></p>
          <div
            className={`overflow-hidden transition-all duration-700 ${
              isExpanded ? "max-h-96 opacity-100" : "max-h-23 opacity-100"
            }`}
          >
            <p className="md:text-xl/9 mx-auto ml-15 my-4 font-lalezar text-right text-shadow-xl text-white md:text-black cursor-default">
              {content}
            </p>
          </div>
          <button
            onClick={toggleContent}
            className="mx-auto outline-4 outline-offset-2 outline-sky-600 rounded-4xl bg-sky-700 text-white hover:bg-sky-500 font-lalezar hover:font-bold transform-content transition-all duration-500 md:my-4 md:px-3 my-3 px-3 mr-0 md:mr-4"
          >
            {isExpanded ? "کمتر" : "بیشتر"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
