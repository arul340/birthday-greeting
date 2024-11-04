import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rotationDegree = scrollY * 0.1; // parallax speed
  const parallaxOffset = scrollY * 0.5; // parallax speed

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-header min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 lg:px-24 font-montserrat h-screen flex items-center">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 items-center relative">
            <div className="flex flex-col space-y-4 col-span-2 z-10 bg-header lg:mt-0 mt-20">
              <p className="uppercase text-lg tracking-widest font-medium text-gray-500">
                Hi Sayang,
              </p>
              <h1 className="font-black text-[#2B343A] uppercase lg:text-7xl md:text-5xl text-4xl leading-[1.2] tracking-wider">
                Happy Birthday! &lt;3
              </h1>
            </div>

            <div
              className="absolute hidden lg:block lg:top-5 right-10 w-[32rem] h-[32rem] border-[15px] border-white z-0"
              style={{
                transform: `translateY(${parallaxOffset}px) scale(1.1)`,
                transition: "transform 0.1s ease-out",
              }}
            />

            <div
              className="relative flex justify-center md:justify-end col-span-1 z-10"
              style={{
                transform: `rotate(${rotationDegree}deg)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <img
                src="hero.png"
                alt="Bouquet"
                className="object-cover max-w-full h-auto lg:mt-20 -rotate-12  lg:scale-150"
              />
            </div>
          </div>
        </section>
        <div className="w-full h-32 bg-header"></div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
