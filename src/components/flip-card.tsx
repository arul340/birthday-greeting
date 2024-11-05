import { useState } from "react";

interface CouponProps {
  front: string;
  back: string;
}

const FlipCard = ({ front, back }: CouponProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className="group w-full h-48 m [perspective:1000px]"
      onClick={() => {
        // Only flip on click if on mobile
        if (window.innerWidth < 1024) {
          handleFlip();
        }
      }}
    >
      <div
        className={`relative h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] 
          lg:group-hover:[transform:rotateY(180deg)] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
      >
        {/* Front side */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] flex items-center justify-center">
          <img
            className="h-full w-full rounded-xl transform transition-transform duration-500 object-contain"
            src={front}
          />
        </div>

        {/* Back side */}
        <div className="absolute inset-0 h-full w-full rounded-xl  [transform:rotateY(-180deg)] [backface-visibility:hidden] flex items-center justify-center">
          <img
            className="h-full w-full rounded-xl transform transition-transform duration-500 object-contain"
            src={back}
          />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
