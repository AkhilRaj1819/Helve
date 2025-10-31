import { useState, useRef, useEffect } from "react";
import { IoPlay, IoPause } from "react-icons/io5";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import disc from "./assets/icons/disc1.png";
import music from "./assets/music/background-music.mp3";

function App() {
  const [rotating, setRotating] = useState(false);
  const [playing, setPlaying] = useState(false);
  const discRef = useRef(null);
  const rotation = useRef(0);
  const audioRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const rotate = () => {
      if (rotating && discRef.current) {
        rotation.current += 0.8; // rotation speed
        discRef.current.style.transform = `rotate(${rotation.current}deg)`;
      }
      animationFrame = requestAnimationFrame(rotate);
    };

    animationFrame = requestAnimationFrame(rotate);

    return () => cancelAnimationFrame(animationFrame);
  }, [rotating]);

  const togglePlay = () => {
    if (!playing) {
      audioRef.current.play();
      setRotating(true);
    } else {
      audioRef.current.pause();
      setRotating(false);
    }
    setPlaying(!playing);
  };

  return (
    <>
      {/* Floating Disc + Button */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center z-50">
        <div className="relative">
          <img
            ref={discRef}
            src={disc}
            alt="Music Disc"
            className="h-[9vh] w-[9vh] object-contain"
          />
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/40 text-[#fffbeb] rounded-full p-2 hover:bg-black/50 transition-all duration-300"
          >
            {playing ? <IoPause size={22} /> : <IoPlay size={22} />}
          </button>
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={music} loop />

      {/* Rest of your App */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
