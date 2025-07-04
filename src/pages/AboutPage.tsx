import mountain from "../assets/mountain.jpg";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="bg-gray-200 scroll-mt-30 h-auto max-w-[1920px] mx-auto"
    >
      <div className="py-16">
        <div className="flex flex-col gap-15 lg:flex lg:flex-row justify-around items-center bg-gray-200 perspective-normal">
          <div className="group h-90 w-70 lg:h-130 lg:w-90 border-7 border-gray-600 rounded-4xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d lg:hover:rotate-y-3 transition-all duration-700 scale-[1.02] hover:scale-[0.9] shadow-2xl">
            <img
              className="w-40 h-28 lg:h-54 lg:w-80 mx-15 -mt-15 border-6 rounded-2xl border-cyan-800 shadow-2xl scale-[0.8] group-hover:scale-[1.06] transition-all duration-700"
              src={mountain}
            />
            <h1 className="text-lg lg:text-4xl font-lalezar font-bold lg:my-4 cursor-default">
              طراحی داخلی
            </h1>
            <p className="text-md lg:pt-10 lg:mt-0 lg:text-md/8 text-center font-lalezar mx-4 cursor-default">
              اصلی‌ترین و مهم‌ترین وظایف و امور شرکت آرکا دیزاین طراحی دکوراسیون
              داخلی و بازسازی نمای داخلی می‌باشد که با توجه به سابقه‌ی درخشان
              این شرکت در این امر و وجود نمونه‌های بسیار زیاد و درخشان طراحی
              داخلی، مشتریان عزیز می‌توانند با اطمینان به ماحصل و نتیجه‌، طراحی
              داخلی خانه‌های خود را به دستان پرسابقه و متعهد کارکنان این این
              شرکت بسپارند
            </p>
          </div>
          <div className="group h-90 w-70 lg:h-130 lg:w-90 border-7 border-gray-600 rounded-4xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d transition duration-700 scale-[1.02] hover:scale-[0.9] shadow-2xl">
            <img
              className="w-40 h-28 lg:h-54 lg:w-80 mx-15 -mt-15 border-6 object-cover rounded-2xl border-cyan-800 shadow-2xl scale-[0.8] group-hover:scale-[1.06] transition-all duration-700"
              src={mountain}
            />
            <h1 className="text-lg lg:text-4xl font-lalezar font-bold lg:my-4 cursor-default">
              طراحی نمای بنا
            </h1>
            <p className="text-sm lg:pt-8 lg:text-md/8 font-lalezar text-center mx-4 cursor-default">
              اولین موضوعی که مشتریان و خریداران به آن توجه می‌کنند نمای بیرونی
              یک ساختمان بوده. این موضوع اهمیت بسیار زیادی داشته و علاوه بر
              هماهنگی با پلان ساختمان، نمای آن نیز باید با محیط اطراف بنا هماهنگ
              بوده تا ساختمان به صورت یک جسم نامتجانس در نظر بینندگان جلوه نکند.
              کارفرمایان و متقاضیان عزیز می‌توانند با رجوع به بخش پروژه‌های کار
              شده از تجربه‌های پایان یافته و موفق در زمینه‌ی طراحی نما توسط شرکت
              آرکا دیزاین اطلاع یافته و طراحی نمای بیرونی بنای خود را به دستان
              ماهر و توانمند کارکنان این شرکت بسپارند
            </p>
          </div>
          <div className="group h-90 w-70 lg:h-130 lg:w-90 border-7 border-gray-600 rounded-4xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d lg:hover:-rotate-y-3 transition duration-700 scale-[1.02] hover:scale-[0.9]  shadow-2xl">
            <img
              className="w-40 h-28 lg:h-54 lg:w-80 mx-15 -mt-15 border-6 rounded-2xl border-cyan-800 shadow-2xl scale-[0.8] group-hover:scale-[1.06] transition-all duration-700"
              src={mountain}
            />
            <h1 className="text-lg lg:text-4xl font-lalezar font-bold lg:my-4 cursor-default">
              مشاوره
            </h1>
            <p className="text-sm lg:pt-5 lg:text-md/8 font-lalezar text-center mx-4 cursor-default">
              در شرایط کنونی که ساخت و ساز به یکی از ترفندهای شهروندان برای
              سرمایه‌گذاری تبدیل شده است و از این طریق می‌توان سرمایه خود را
              بیشتر و بیشتر کرد، اطلاع از روند ساخت و ساز و و هزینه‌های پیش‌بینی
              شده و پیش‌بینی نشده می‌تواند افراد را در این راه کمک شایانی کند.
              همچنین طراحی مناسب پلان و نما و ... می‌تواند بر روی قیمت نهایی
              ساختمان تاثیر بسزایی گذاشته و استفاده از ساختمان را برای کاربران
              آینده تسهیل کند. کارفرمایان عزیز می‌توانند با مشورت گرفتن از
              مشاوران این شرکت، با اطمینان خاطر در راه پر فراز و نشیب پیش روی
              خود قدم بگذارند
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
