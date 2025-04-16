import mountain from "../assets/mountain.jpg";

export default function ArchitectsPage() {
  return (
    <section id="architects">
      <div className="flex flex-col h-screen w-screen">
        <div className="h-45 md:h-75 gap-5 md:gap-15 w-screen bg-gray-200 flex flex-row  justify-center items-center perspective-normal">
          <div className="h-25 w-35 md:h-60 md:w-75 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300 rounded-xl relative hover:rotate-y-360 transform-3d transition-all duration-1000 shadow-2xl">
            <img
              className="h-23 w-33 md:h-58 md:w-73 top-1 left-1 rounded-xl absolute"
              src={mountain}
            />
          </div>
          <div className="h-25 w-75 md:h-60 md:w-170 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300 rounded-xl relative shadow-2xl">
            <div className="flex flex-col h-23 w-73 md:h-58 md:w-168 bg-amber-50 rounded-lg md:gap-5 px-2 py-1 absolute top-1 left-1 scale-[0.97] hover:scale-[1.00] transition-all duration-700 shadow-2xl">
              <h1 className="font-lalezar font-bold text-center text-sm md:text-2xl pt-0 md:pt-2">
                روح الله احمدی
              </h1>
              <h1 className="font-lalezar text-center font-bold text-sm md:text-lg">
                مدیر عامل شرکت آرکا دیزاین
              </h1>
              <p className="font-lalezar text-center text-xs md:text-lg">
                مهندس روح الله احمدی فارغ التحصیل مقطع کارشناسی رشته ی معماری از
                دانشگاه تهران و مقطع کارشناسی ارشد از دانشگاه هنر لصفهان در سال
                1385 می باشد.
              </p>
            </div>
          </div>
        </div>
        <div className="h-104 w-screen bg-gray-200">
          <div className="h-104 w-screen flex flex-row items-end justify-center gap-28">
            <div className="border-10 border-fuchsia-100 rounded-lg bg-stone-300 h-70 w-60 mb-10 relative perspective-normal opacity-60 hover:opacity-100 hover:scale-[1.1] transition-all duration-800 drop-shadow-2xl">
              <div className="absolute bg-amber-600 h-45 w-45 rounded-full -top-18 -left-20 transform-3d hover:rotate-x-360 transition-all duration-800 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300">
                <img
                  className="h-43 w-43 left-1 right-1 top-1 rounded-full object-cover absolute "
                  src={mountain}
                />
              </div>
              <div className="flex flex-col mt-18 mr-2">
                <h1 className="text-right font-boldonse">Thomas Party</h1>
                <h1 className="text-right font-boldonse text-sm my-2 mr-4">
                  3D Designer
                </h1>
                <p className="text-center font-underdog">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur veritatis laboriosam illum at perspiciatis.
                </p>
              </div>
            </div>
            <div className="border-10 border-fuchsia-100 rounded-lg bg-stone-300 h-70 w-60 mb-10 relative perspective-normal opacity-60 hover:opacity-100 hover:scale-[1.1] transition-all duration-800 drop-shadow-2xl">
              <div className="absolute bg-amber-600 h-45 w-45 rounded-full -top-18 -left-20 transform-3d hover:rotate-x-360 transition-all duration-800 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300">
                <img
                  className="h-43 w-43 left-1 right-1 top-1 rounded-full object-cover absolute "
                  src={mountain}
                />
              </div>
              <div className="flex flex-col mt-18 mr-2">
                <h1 className="text-right font-boldonse">Thomas Party</h1>
                <h1 className="text-right font-boldonse text-sm my-2 mr-4">
                  3D Designer
                </h1>
                <p className="text-center font-underdog">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur veritatis laboriosam illum at perspiciatis.
                </p>
              </div>
            </div>
            <div className="border-10 border-fuchsia-100 rounded-lg bg-stone-300 h-70 w-60 mb-10 relative perspective-normal opacity-60 hover:opacity-100 hover:scale-[1.1] transition-all duration-800 drop-shadow-2xl">
              <div className="absolute bg-amber-600 h-45 w-45 rounded-full -top-18 -left-20 transform-3d hover:rotate-x-360 transition-all duration-800 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300">
                <img
                  className="h-43 w-43 left-1 right-1 top-1 rounded-full object-cover absolute "
                  src={mountain}
                />
              </div>
              <div className="flex flex-col mt-18 mr-2">
                <h1 className="text-right font-boldonse">Thomas Party</h1>
                <h1 className="text-right font-boldonse text-sm my-2 mr-4">
                  3D Designer
                </h1>
                <p className="text-center font-underdog">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur veritatis laboriosam illum at perspiciatis.
                </p>
              </div>
            </div>
            <div className="border-10 border-fuchsia-100 rounded-lg bg-stone-300 h-70 w-60 mb-10 relative perspective-normal opacity-60 hover:opacity-100 hover:scale-[1.1] transition-all duration-800 drop-shadow-2xl">
              <div className="absolute bg-amber-600 h-45 w-45 rounded-full -top-18 -left-20 transform-3d hover:rotate-x-360 transition-all duration-800 animate-rotate-border bg-conic/[from_var(--border-angle)] from-stone-300 via-amber-400 to-stone-300">
                <img
                  className="h-43 w-43 left-1 right-1 top-1 rounded-full object-cover absolute "
                  src={mountain}
                />
              </div>
              <div className="flex flex-col mt-18 mr-2">
                <h1 className="text-right font-boldonse">Thomas Party</h1>
                <h1 className="text-right font-boldonse text-sm my-2 mr-4">
                  3D Designer
                </h1>
                <p className="text-center font-underdog">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur veritatis laboriosam illum at perspiciatis.
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
