import mountain from "../assets/mountain.jpg";
import building from "../assets/images/architecture/building3.jpg";

export default function AboutPage() {
  return (
    <section id="about" className="bg-gray-200">
      <div className="py-16">
        <div className="flex flex-col gap-15 basis-auto lg:flex lg:flex-row mx-auto my-auto justify-around items-center w-screen h-auto bg-gray-200 perspective-normal">
          <div className="group h-90 w-70 lg:h-130 lg:w-100 border-7 border-stone-400 rounded-xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d lg:hover:rotate-y-3 transition-all duration-700 scale-[1.02] hover:scale-[0.9] shadow-2xl">
            <img
              className="w-40 h-28 lg:h-54 lg:w-80 mx-15 -mt-15 border-7 rounded-lg border-double border-stone-500 shadow-2xl scale-[0.8] group-hover:scale-[1.06] transition-all duration-700"
              src={mountain}
            />
            <h1 className="text-lg lg:text-4xl font-lalezar font-bold my-4 lg:my-7">
              طراحی داخلی
            </h1>
            <p className="text-lg mt-2 lg:text-xl/8 font-underdog text-justify mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, laudantium earum. Magnam laboriosam totam, cumque,
              quis laborum non nulla, unde maxime pariatur quas officiis eaque
              aut fuga qui aliquid ratione.
            </p>
          </div>
          <div className="group h-90 w-70 lg:h-130 lg:w-100 border-7 border-stone-400 rounded-xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d transition duration-700 scale-[1.02] hover:scale-[0.9] shadow-2xl">
            <img
              className="w-40 h-28 lg:h-54 lg:w-80 mx-15 -mt-15 border-7 border-double object-cover rounded-lg border-stone-500 shadow-2xl scale-[0.8] group-hover:scale-[1.06] transition-all duration-700"
              src={building}
            />
            <h1 className="text-lg lg:text-4xl font-lalezar font-bold my-4 lg:my-7">
              طراحی نمای بنا
            </h1>
            <p className="text-lg mt-2 lg:text-xl/8 font-underdog text-justify mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, laudantium earum. Magnam laboriosam totam, cumque,
              quis laborum non nulla, unde maxime pariatur quas officiis eaque
              aut fuga qui aliquid ratione.
            </p>
          </div>
          <div className="group h-90 w-70 lg:h-130 lg:w-100 border-7 border-stone-400 rounded-xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d lg:hover:-rotate-y-3 transition duration-700 scale-[1.02] hover:scale-[0.9]  shadow-2xl">
            <img
              className="w-40 h-28 lg:h-54 lg:w-80 mx-15 -mt-15 border-7 border-double rounded-lg border-stone-500 shadow-2xl scale-[0.8] group-hover:scale-[1.06] transition-all duration-700"
              src={mountain}
            />
            <h1 className="text-lg lg:text-4xl font-lalezar font-bold my-4 lg:my-7">
              مشاوره
            </h1>
            <p className="text-lg mt-2 lg:text-xl/8 font-underdog text-justify mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, laudantium earum. Magnam laboriosam totam, cumque,
              quis laborum non nulla, unde maxime pariatur quas officiis eaque
              aut fuga qui aliquid ratione.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
