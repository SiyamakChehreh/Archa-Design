import mountain from "../assets/mountain.jpg";

export default function ArchitectsPage() {
  return (
    <section
      className="h-auto w-screen overflow-x-hidden scroll-mt-30"
      id="architects"
    >
      <div className="flex flex-col overflow-hidden h-auto w-screen gap-10 lg:gap-10 bg-gray-200">
        <div className="group h-auto lg:h-75 gap-5 lg:gap-15 w-auto bg-gray-200 flex flex-col lg:flex-row justify-center items-center perspective-normal">
          <div className="h-25 w-35 lg:h-60 lg:w-75 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300 rounded-xl relative group-hover:rotate-y-360 transform-3d transition-all duration-1000 shadow-2xl">
            <img
              className="h-23 w-33 lg:h-58 lg:w-73 top-1 left-1 rounded-xl absolute"
              src={mountain}
            />
          </div>
          <div className="h-25 w-60 lg:h-60 lg:w-170 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300 rounded-xl relative shadow-2xl">
            <div className="flex flex-col overflow-hidden h-23 w-59 lg:h-58 lg:w-168 bg-amber-50 rounded-lg lg:gap-5 px-2 py-1 absolute top-1 left-1 scale-[0.97] hover:scale-[1.00] transition-all duration-700 shadow-2xl">
              <h1 className="font-lalezar font-bold text-center text-sm lg:text-2xl pt-0 lg:pt-2 cursor-default">
                روح الله احمدی
              </h1>
              <h1 className="font-lalezar text-center font-bold text-sm lg:text-lg cursor-default">
                مدیر عامل شرکت آرکا دیزاین
              </h1>
              <p className="font-lalezar text-center text-xs lg:text-lg cursor-default">
                مهندس روح الله احمدی فارغ التحصیل مقطع کارشناسی رشته ی معماری از
                دانشگاه تهران و مقطع کارشناسی ارشد از دانشگاه هنر اصفهان می
                باشد.
              </p>
            </div>
          </div>
        </div>
        <div className="h-auto lg:h-auto mx-auto w-screen ">
          <div className="h-auto lg:h-auto mx-auto w-screen bg-gray-200 flex flex-row flex-wrap overflow-hidden items-end justify-center gap-10 lg:gap-25 lg:pl-18 pt-15">
            <div className="group h-50 w-40 lg:h-70 lg:w-60 mb-4 lg:mb-10 border-10 border-fuchsia-100 rounded-lg bg-stone-300 relative perspective-normal opacity-60 hover:opacity-100 hover:scale-[1.1] transition-all duration-800 drop-shadow-2xl">
              <div className="absolute bg-amber-600 size-22 lg:size-45 rounded-full -top-9 -left-10 lg:-top-18 lg:-left-20 transform-3d group-hover:rotate-x-360 transition-all duration-800 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300">
                <img
                  className="absolute size-20 lg:size-43 left-1 top-1 rounded-full object-cover"
                  src={mountain}
                />
              </div>
              <div className="flex flex-col mt-9 lg:mt-18 mr-2">
                <h1 className="text-right font-lalezar text-lg lg:text-2xl cursor-default">
                  محسن مخملباف
                </h1>
                <h1 className="text-right font-lalezar text-lg lg:text-xl my-1 mr-2 cursor-default">
                  طراح سه بعدی
                </h1>
                <p className="text-center font-lalezar text-xs lg:text-lg cursor-default">
                  مهندس محسن مخملباف فارغ التحصیل رشته ی طراحی داخلی در مقطع
                  کارشناسی ارشد از داشنگاه شهید بهشتی
                </p>
              </div>
            </div>
            <div className="group h-50 w-40 lg:h-70 lg:w-60 mb-4 lg:mb-10 border-10 border-fuchsia-100 rounded-lg bg-stone-300 relative perspective-normal opacity-60 hover:opacity-100 hover:scale-[1.1] transition-all duration-800 drop-shadow-2xl">
              <div className="absolute bg-amber-600 size-20 lg:size-45 rounded-full -top-9 -left-10 lg:-top-18 lg:-left-20 transform-3d group-hover:rotate-x-360 transition-all duration-800 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300">
                <img
                  className="absolute size-18 lg:size-43 left-1 top-1 rounded-full object-cover"
                  src={mountain}
                />
              </div>
              <div className="flex flex-col mt-9 lg:mt-18 mr-2">
                <h1 className="text-right font-lalezar text-lg lg:text-2xl cursor-default">
                  آرش رضایی
                </h1>
                <h1 className="text-right font-lalezar text-lg lg:text-xl my-1 mr-2 cursor-default">
                  طراح داخلی و نما
                </h1>
                <p className="text-center font-lalezar text-xs lg:text-lg cursor-default">
                  مهندس محسن مخملباف فارغ التحصیل رشته ی طراحی داخلی در مقطع
                  کارشناسی ارشد از داشنگاه شهید بهشتی
                </p>
              </div>
            </div>
            <div className="group h-50 w-40 lg:h-70 lg:w-60 mb-4 lg:mb-10 border-10 border-fuchsia-100 rounded-lg bg-stone-300  relative perspective-normal opacity-60 hover:opacity-100 hover:scale-[1.1] transition-all duration-800 drop-shadow-2xl">
              <div className="absolute bg-amber-600 size-20 lg:size-45 rounded-full -top-9 -left-10 lg:-top-18 lg:-left-20 transform-3d group-hover:rotate-x-360 transition-all duration-800 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300">
                <img
                  className="absolute size-18 lg:size-43 left-1 right-1 top-1 rounded-full object-cover"
                  src={mountain}
                />
              </div>
              <div className="flex flex-col mt-9 lg:mt-18 mr-2">
                <h1 className="text-right font-lalezar text-lg lg:text-2xl cursor-default">
                  احسان نعمتی
                </h1>
                <h1 className="text-right font-lalezar text-lg lg:text-xl my-1 mr-2 cursor-default">
                  طراح نما
                </h1>
                <p className="text-center font-lalezar text-xs lg:text-lg cursor-default">
                  مهندس محسن مخملباف فارغ التحصیل رشته ی طراحی داخلی در مقطع
                  کارشناسی ارشد از داشنگاه شهید بهشتی
                </p>
              </div>
            </div>
            <div className="group h-50 w-40 lg:h-70 lg:w-60 mb-4 lg:mb-10 border-10 border-fuchsia-100 rounded-lg bg-stone-300 relative perspective-normal opacity-60 hover:opacity-100 hover:scale-[1.1] transition-all duration-800 drop-shadow-2xl">
              <div className="absolute bg-amber-600 size-20 lg:size-45 rounded-full -top-9 -left-10 lg:-top-18 lg:-left-20 transform-3d group-hover:rotate-x-360 transition-all duration-800 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300">
                <img
                  className="absolute size-18 lg:size-43 left-1 right-1 top-1 rounded-full object-cover"
                  src={mountain}
                />
              </div>
              <div className="flex flex-col mt-9 lg:mt-18 mr-2">
                <h1 className="text-right font-lalezar text-lg lg:text-2xl cursor-default">
                  شهرزاد صمدی
                </h1>
                <h1 className="text-right font-lalezar text-lg lg:text-xl my-1 mr-2 cursor-default">
                  طراح سه بعدی
                </h1>
                <p className="text-center font-lalezar text-xs lg:text-lg cursor-default">
                  مهندس محسن مخملباف فارغ التحصیل رشته ی طراحی داخلی در مقطع
                  کارشناسی ارشد از داشنگاه شهید بهشتی
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*<section id="architects">
<div className="h-screen w-screen bg-neutral-900 flex flex-row justify-center items-center">
<div className="w-full max-w-sm animate-rotate-border rounded-lg bg-conic/[from_var(--border-angle)] from-yellow-200 via-sky-600 to-yellow-300 p-px">
  <div className="bg-gray-900 rounded-lg p-10">Hello world</div>
</div>
</div>
</section> */
