import ImageSlider from "../components/ImageSlider";
import Jurassic from "../assets/images/jurassic-park.png";
import Building from "../assets/images/building.jpg";
import Mountain from "../assets/mountain.jpg";
import building1 from "../assets/images/architecture/building1.jpg";
import building2 from "../assets/images/architecture/building2.jpg";
import building3 from "../assets/images/architecture/building3.jpg";

const album1 = [Jurassic, Building, Mountain];
const album2 = [building1, building2, building3];

const content = (
  <>
    <div className="absolute top-0 left-0 w-full h-full bg-amber-200 opacity-5 hover:opacity-95 transition-all duration-700 flex flex-col justify-start pt-5 md:pt-0 md:justify-center items-center">
      <h1 className="text-md font-lalezar">پروژه ی شماره یک</h1>
      <h2 className="text-sm font-lalezar">طراحی داخلی خانه ی 100 متری</h2>
      <h3 className="text-sm font-lalezar">کارفرما: آقای صادقی</h3>
      <p className="text-xs font-lalezar text-center px-11">
        طراحی داخلی مدرن با کف پوش پارکت و مبلمانی که با طیف رنگی کف پوش و
        دیوارها همخوانی داشته و باعث همبستگی کل اجزای خانه می شود
      </p>
    </div>
  </>
);

export default function ProjectsPage() {
  return (
    <section id="projects" className="h-screen w-screen">
      <div className="h-screen w-screen bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-2 overflow-y-scroll">
        <ImageSlider images={album1} content={content} />
        <ImageSlider images={album2} content={content} />
        <ImageSlider images={album1} content={content} />
        <ImageSlider images={album1} content={content} />
      </div>
    </section>
  );
}
