import { useState, useEffect, useRef } from "react";
import CardMenu from "@/components/card-menu";
import GiftBox from "@/components/giftbox"; // Import GiftBox component

const menus = [
  {
    image: "menu/letter.webp",
    buttonColor: "bg-[#A19996]",
    bgColor: "bg-[#D4C8C5]",
    title: "Letter",
    buttonText: "Read It",
    buttonLink: "",
    textColor: "text-black",
  },
  {
    image: "menu/coupons.webp",
    buttonColor: "bg-[#DDA7AD]",
    bgColor: "bg-[#EFB4BC]",
    title: "Coupons",
    buttonText: "Claim Them",
    buttonLink: "/coupons",
    textColor: "text-black",
  },
  {
    image: "menu/gift.webp",
    buttonColor: "bg-[#D05D6C]",
    bgColor: "bg-[#E26475]",
    title: "Timeline",
    buttonText: "Click to Open",
    buttonLink: "/timeline",
    textColor: "text-white",
  },
  {
    image: "menu/quiz.webp",
    buttonColor: "bg-[#953558]",
    bgColor: "bg-[#A23A60]",
    title: "Gallery",
    buttonText: "Click to Open",
    buttonLink: "/gallery",
    textColor: "text-white",
  },
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGreetingOpen, setIsGreetingOpen] = useState(true);
  const greetingModalRef = useRef<HTMLDivElement | null>(null); // Ref for greeting modal
  const giftBoxModalRef = useRef<HTMLDivElement | null>(null); // Ref for gift box modal

  const handleScroll = () => {
    const maxScrollY = 300; // Limit scrolling effect to 300px
    const newScrollY = window.scrollY;

    if (newScrollY <= maxScrollY) {
      setScrollY(newScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rotationDegree = scrollY * 0.1;
  const parallaxOffset = scrollY * 0.5;

  // Function to open and close the gift box modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Close greeting modal when clicking outside
  const handleGreetingModalClick = (e: React.MouseEvent) => {
    if (
      greetingModalRef.current &&
      !greetingModalRef.current.contains(e.target as Node)
    ) {
      setIsGreetingOpen(false);
    }
  };

  // Close gift box modal when clicking outside
  const handleGiftBoxModalClick = (e: React.MouseEvent) => {
    if (
      giftBoxModalRef.current &&
      !giftBoxModalRef.current.contains(e.target as Node)
    ) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen bg-header overflow-hidden">
        <section className="container mx-auto px-4 lg:px-24 font-montserrat min-h-screen flex items-center pt-48">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 items-center relative">
            <div className="flex flex-col space-y-4 col-span-2 z-10 bg-header lg:mt-0 mt-20">
              <p className="uppercase text-lg tracking-[.3em] font-medium text-gray-500">
                Hi Sayang,
              </p>
              <h1 className="font-black text-[#2B343A] uppercase lg:text-7xl md:text-5xl text-4xl leading-[1.2] tracking-wider">
                Happy
              </h1>
              <h1 className="font-black text-[#2B343A] uppercase lg:text-7xl md:text-5xl text-4xl leading-[1.2] tracking-wider">
                Birthday! &lt;3
              </h1>
            </div>

            <div
              className="absolute hidden lg:block lg:top-5 right-10 w-[32rem] h-[32rem] border-[15px] border-white z-0"
              style={{
                transform: `translateY(${parallaxOffset}px) scale(1.1)`,
                transition: "transform 0.4s ease-out",
              }}
            />

            <div
              className="relative flex justify-center md:justify-end col-span-1 z-10"
              style={{
                transform: `rotate(${rotationDegree}deg)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <img
                src="hero.webp"
                alt="Bouquet"
                className="object-cover max-w-full h-auto lg:mt-32 -rotate-12 lg:scale-150"
              />
            </div>
          </div>
        </section>
        <div className="w-full h-48 bg-header"></div>
      </div>

      {/* Greeting Modal */}
      {isGreetingOpen && (
        <div
          className="fixed inset-0 flex items-start top-[4.8rem]  bg-black bg-opacity-50 z-40"
          onClick={handleGreetingModalClick}
        >
          <div
            ref={greetingModalRef}
            className="relative p-8 max-w-full lg:mx-40 mx-10 w-full bg-white top-10"
          >
            <span className="px-4 py-2 bg-[#E26475] text-white rounded-full">
              Happy birthday! &lt;3
            </span>
          </div>
        </div>
      )}

      {/* Menu Section */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {menus.map((item) => (
          <CardMenu
            key={item.title}
            image={item.image}
            title={item.title}
            bgColor={item.bgColor}
            buttonColor={item.buttonColor}
            buttonText={item.buttonText}
            buttonLink={item.title === "Letter" ? "" : item.buttonLink}
            textColor={item.textColor}
            onClick={item.title === "Letter" ? toggleModal : undefined}
          />
        ))}
      </div>

      {/* Modal for GiftBox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleGiftBoxModalClick} // Call the click handler here
        >
          <div
            ref={giftBoxModalRef}
            className="relative p-8 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <GiftBox toggleModal={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
