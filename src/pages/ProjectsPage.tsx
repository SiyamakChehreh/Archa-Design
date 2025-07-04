import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
import arch1 from "../assets/images/architecture/project3/pic1.jpg";
import arch2 from "../assets/images/architecture/project3/archa2.jpg";
import arch3 from "../assets/images/architecture/project3/archa3.jpg";
import arch4 from "../assets/images/architecture/project3/arch4.jpg";
import arch5 from "../assets/images/architecture/project3/arch5.jpg";
import arch6 from "../assets/images/architecture/project3/arch6.jpg";
import img1 from "../assets/images/architecture/project2/pic1.jpg";
import img2 from "../assets/images/architecture/project2/pic2.jpg";
import img3 from "../assets/images/architecture/project2/pic3.jpg";
import img4 from "../assets/images/architecture/project2/pic4.jpg";
import img5 from "../assets/images/architecture/project2/pic5.jpg";
import img6 from "../assets/images/architecture/project2/pic6.jpg";
import pic1 from "../assets/images/architecture/project1/pic1.jpg";
import pic2 from "../assets/images/architecture/project1/pic2.jpg";
import pic3 from "../assets/images/architecture/project1/pic3.jpg";
import pic4 from "../assets/images/architecture/project1/pic4.jpg";
import pic5 from "../assets/images/architecture/project1/pic5.jpg";
import pic6 from "../assets/images/architecture/project1/pic6.jpg";
import pic7 from "../assets/images/architecture/project1/pic7.jpg";

const album1 = [arch1, arch2, arch3, arch4, arch5, arch6];
const album2 = [img1, img2, img3, img4, img5, img6];
const album3 = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

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
  const [isActive, setIsActive] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="h-auto w-screen md:mt-0 scroll-mt-30 max-w-[1920px] mx-auto"
    >
      <div className="bg-gray-200 grid grid-cols-1 lg:grid-cols-2 pb-4">
        {[album1, album2, album3, album2].map((album, index) => (
          <ImageSlider
            key={index}
            content={content}
            images={album}
            onClick={() => setIsActive(index)}
            isActive={isActive === index}
            onClose={() => setIsActive(null)}
          />
        ))}
      </div>
    </section>
  );
}
