import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Countdown from "./countdown";
import Navbar from "./navbar";

const Layout = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State for loading
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // Ref for the timeout

  const handleClick = () => {
    setIsLoading(true); // Start loading
    setIsClicked(true);
    if (audioRef.current) {
      audioRef.current.play();
    }

    // Set a timeout for loading
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000); // Adjust the timeout duration as needed
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const targetDate = new Date("2024-11-16T14:58:00");

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} src="song.mp3" loop />

      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen bg-header">
          <div className="rounded-full w-16 h-16 border-4 border-mandy border-t-transparent animate-spin"></div>
        </div>
      ) : !isClicked ? (
        <Countdown targetDate={targetDate} onClick={handleClick} />
      ) : (
        <>
          <Navbar />
          <main className="min-h-screen bg-white">
            <Outlet />
          </main>
        </>
      )}
    </>
  );
};

export default Layout;
