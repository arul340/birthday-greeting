// GiftBox.tsx
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

interface GiftBoxProps {
  toggleModal: () => void;
}

const GiftBox = ({ toggleModal }: GiftBoxProps) => {
  const [step, setStep] = useState(1);
  const stepMinutes = [2000, 2000, 1000];

  const openBox = () => {
    if (step < 3) {
      // Stop incrementing after step-3
      setStep((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (step === 1) return;

    if (step < 3) {
      const timeoutId = setTimeout(openBox, stepMinutes[step - 1]);
      return () => clearTimeout(timeoutId);
    }
  }, [step]);

  return (
    <div
      className={`merrywrap step-${step}`}
      onClick={step === 1 ? openBox : toggleModal}
    >
      <canvas id="snowfall"></canvas>
      <div className="giftbox">
        <div className="cover">
          <div></div>
        </div>
        <div className="box"></div>
      </div>
      <div
        className="letter-card relative bg-rose text-center p-10 rounded-lg shadow-lg max-w-md lg:w-full w-[90%] text-[#2B343A] overflow-y-auto font-inter no-scrollbar"
        style={{ opacity: step === 3 ? 1 : 0, maxHeight: "80vh" }} // Limit height to 90% of the viewport
      >
        {/* Close Button */}
        <button
          onClick={toggleModal}
          className="absolute top-3 right-3 text-black text-2xl font-bold"
        >
          <IoCloseOutline className="text-lg" />
        </button>

        {/* Title */}
        <h2 className="text-3xl  font-inter mb-2">Happy birthday, sayang!</h2>

        {/* Subtitle */}
        <p className="text-gray-800 mb-4 text-sm">
          to the one brought so much joy, laughter, and happiness into my life,
          the one I'm grateful for.
        </p>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-4" />

        {/* Letter Content */}
        <div className="space-y-4 text-gray-900 pr-2 text-sm text-justify">
          <p>
            <strong>My dearest Michelle</strong>
          </p>
          <p>
            I can hardly believe that another year has passed, and here we are
            celebrating another birthday. I hope this day brings you all the joy
            and happiness that you deserve.
          </p>
          <p>
            I want you to know how much I love and appreciate everything that
            you do for me. You make me feel loved, cared for, and valued, and I
            feel incredibly lucky to have you in my life. You have brought so
            much happiness and joy into my life, and I can't imagine a world
            without you. I want you to know how much I love and appreciate
            everything that you do for me. You make me feel loved, cared for,
            and valued, and I feel incredibly lucky to have you in my life. You
            have brought so much happiness and joy into my life, and I can't
            imagine a world without you. I want you to know how much I love and
            appreciate everything that you do for me. You make me feel loved,
            cared for, and valued, and I feel incredibly lucky to have you in my
            life. You have brought so much happiness and joy into my life, and I
            can't imagine a world without you.
          </p>
          <p>I admire you for so many reasons - your ...</p>
        </div>
      </div>
    </div>
  );
};

export default GiftBox;
