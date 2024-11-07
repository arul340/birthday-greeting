// Countdown.tsx
import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date; // The target date to count down to
  onClick: () => void; // Callback for when the Start button is clicked
}

const Countdown = ({ targetDate, onClick }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      0
    );
    const minutes = Math.max(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      0
    );
    const seconds = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);

    return { days, hours, minutes, seconds, distance };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.distance <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-header text-white">
      <h2 className="lg:text-3xl 2xl:text-5xl text-3xl font-bold lg:mb-10 mb-5 text-mandy/60 text-center">
        Countdown to <span className="text-mandy">Lorem Ipsum's</span> Birthday
      </h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        <div className="flex flex-col items-center">
          <div className="bg-mandy/60 lg:p-4 lg:px-6 p-3 w-28 rounded-lg lg:text-3xl text-xl font-semibold text-center">
            {timeLeft.days}
            <p className="font-light text-sm">Days</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-mandy/60 lg:p-4 lg:px-6 p-3 w-28 rounded-lg lg:text-3xl text-xl font-semibold text-center">
            {timeLeft.hours}
            <p className="font-light text-sm ">Hours</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-mandy/60 lg:p-4 lg:px-6 p-3 w-28 rounded-lg lg:text-3xl text-xl font-semibold text-center">
            {timeLeft.minutes}
            <p className="font-light text-sm ">Minutes</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-mandy/60 lg:p-4 lg:px-6 p-3 w-28 rounded-lg lg:text-3xl text-xl font-semibold text-center">
            {timeLeft.seconds}
            <p className="font-light text-sm ">Seconds</p>
          </div>
        </div>
      </div>

      <button
        onClick={onClick}
        className="mt-8 px-8 py-2 text-white rounded-lg bg-mandy hover:bg-mandy/80 transition"
      >
        Start
      </button>
    </div>
  );
};

export default Countdown;
