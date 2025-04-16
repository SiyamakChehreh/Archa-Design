import building from "../assets/images/building.jpg";
import { useState } from "react";

function HomePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  const content =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod provident sapiente placeat quae. Dolore autem sapiente, aut, quas recusandae similique harum obcaecati aspernatur quo doloremque, quidem ratione magnam vitae.Tenetur quod provident sapiente placeat quae. Dolore autem sapiente, aut, quas recusandae similique harum obcaecati aspernatur quo doloremque, quidem ratione magnam vitae";

  const showContent = isExpanded ? content : `${content.substring(0, 150)}...`;

  return (
    <div>
      <section>
        <div className="relative h-screen w-screen mx-auto">
          <img
            className="absolute mx-auto inset-0 w-full h-full object-fill z-0 opacity-55 border-b-4 border-stone-500"
            src={building}
            alt="building"
          />

          <div className="relative z-10 flex flex-col md:items-end md:w-150 md:float-right justify-center min-h-screen mr-5">
            <h1 className="md:text-5xl sm:text-lg font-boldonse text-right">
              Pay Less{" "}
            </h1>
            <h1 className="md:text-5xl font-boldonse text-right mt-3">
              Gain More!
            </h1>
            <p className="md:text-xl/9 mx-auto ml-15 my-4 font-underdog text-right text-shadow-xl">
              {showContent}
            </p>
            <button
              onClick={toggleContent}
              className="mx-auto outline-4 outline-offset-2 outline-sky-600 rounded-4xl bg-sky-700 text-white hover:bg-sky-500 hover:font-bold md:mt-4 py-3 px-5 mr-0 md:mr-4"
            >
              {isExpanded ? "show less" : "show more"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
