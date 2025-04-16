import mountain from "../assets/mountain.jpg";

export default function AboutPage() {
  return (
    <section id="about" className="bg-gray-200">
      <div className="py-4">
        <div className="flex flex-col gap-15 basis-auto overflow-y-auto md:flex md:flex-row mx-auto my-auto justify-around items-center w-screen h-screen bg-gray-200 perspective-normal">
          <div className="h-90 w-70 md:h-130 md:w-110 border-7 border-stone-400 rounded-xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d hover:rotate-y-3 transition-all duration-700 hover:scale-[1.04] shadow-2xl">
            <img
              className="w-40 md:w-80 mx-15 -mt-15 border-7 rounded-lg border-double border-stone-500 shadow-2xl"
              src={mountain}
            />
            <h1 className="text-lg md:text-3xl font-boldonse font-bold my-4 md:my-12">
              Interior Design
            </h1>
            <p className="text-md mt-2 md:text-xl/8 font-underdog text-justify mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, laudantium earum. Magnam laboriosam totam, cumque,
              quis laborum non nulla, unde maxime pariatur quas officiis eaque
              aut fuga qui aliquid ratione.
            </p>
          </div>
          <div className="h-90 w-70 md:h-130 md:w-110 border-7 border-stone-400 rounded-xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d transition duration-700 hover:scale-[1.04]  shadow-2xl">
            <img
              className="w-40 md:w-80 mx-15 -mt-15 border-7 border-double rounded-lg border-stone-500 shadow-2xl"
              src={mountain}
            />
            <h1 className="text-lg md:text-3xl font-boldonse font-bold my-4 md:my-12">
              Facade Design
            </h1>
            <p className="text-md mt-2 md:text-xl/8 font-underdog text-justify mx-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, laudantium earum. Magnam laboriosam totam, cumque,
              quis laborum non nulla, unde maxime pariatur quas officiis eaque
              aut fuga qui aliquid ratione.
            </p>
          </div>
          <div className="h-90 w-70 md:h-130 md:w-110 border-7 border-stone-400 rounded-xl bg-amber-50 flex flex-col place-items-center opacity-45 hover:opacity-100 transform-3d hover:-rotate-y-3 transition duration-700 hover:scale-[1.04]  shadow-2xl">
            <img
              className="w-40 md:w-80 mx-15 -mt-15 border-7 border-double rounded-lg border-stone-500 shadow-2xl"
              src={mountain}
            />
            <h1 className="text-lg md:text-3xl font-boldonse font-bold my-4 md:my-12">
              Consultant
            </h1>
            <p className="text-md mt-2 md:text-xl/8 font-underdog text-justify mx-4">
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
