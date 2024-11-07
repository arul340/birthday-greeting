import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Countdown from "./countdown";

const Layout = () => {
  const [isClicked, setIsClicked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    setIsClicked(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const targetDate = new Date("2024-11-16T14:58:00");

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} src="song.mp3" loop />

      {!isClicked ? (
        <Countdown targetDate={targetDate} onClick={handleClick} />
      ) : (
        <>
          <main className="min-h-screen bg-white">
            <Outlet />
          </main>
        </>
      )}
    </>
  );
};

export default Layout;
