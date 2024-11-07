import { IoChevronForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface MenuProps {
  image: string;
  title: string;
  bgColor: string;
  buttonColor: string;
  buttonText: string;
  buttonLink: string;
  textColor: string;
  onClick?: () => void;
}

const CardMenu = ({
  image,
  bgColor,
  title,
  buttonColor,
  buttonText,
  buttonLink,
  textColor,
  onClick,
}: MenuProps) => {
  return (
    <div className={`flex flex-col ${bgColor}`}>
      {/* image */}
      <img
        src={image}
        alt={title}
        className="w-[90%] mx-auto h-auto object-cover"
      />
      {/* title and button */}
      <div
        className={`flex flex-col items-center justify-center font-montserrat  pb-20`}
      >
        <h1 className={`uppercase font-bold text-2xl ${textColor}`}>{title}</h1>
        <button className="mt-10" onClick={onClick}>
          <Link
            to={buttonLink}
            className={`relative p-5 px-10 font-semibold uppercase ${textColor} transition-all duration-300 ${buttonColor} text-xs tracking-[.3em] inline-flex items-center group`}
          >
            {/* Text */}
            <p className="transition-all duration-300 ml-2 flex items-center">
              {buttonText}
              <span className="absolute right-6 transform -translate-x-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                <IoChevronForwardOutline />
              </span>
            </p>
            {/* Arrow */}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CardMenu;
