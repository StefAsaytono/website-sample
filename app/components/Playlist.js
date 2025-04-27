import React, { useRef, useState, useEffect } from "react";
import FluidEffect from "./FluidEffect";

const songs = [
  {
    title: "Die With A Smile",
    file: "/songs/song1.mp3",
    artist: "Lady Gaga & Bruno Mars",
    bgColor:
      "linear-gradient(178deg,rgb(54, 79, 94) 0%, rgb(23, 36, 54) 50%, rgb(14, 31, 39) 100%)",
    image: "/images/DieWithASmile.png",
  },
  {
    title: "Dandelions",
    file: "/songs/song2.mp3",
    artist: "Ruth B.",
    bgColor:
      "linear-gradient(178deg,rgb(73, 73, 73) 0%, rgb(49, 49, 49) 50%, rgb(24, 24, 24) 100%)",
    image: "/images/Dandelions.jpg",
  },
  {
    title: "Espresso",
    file: "/songs/song3.mp3",
    artist: "Sabrina Carpenter",
    bgColor:
      "linear-gradient(178deg,rgb(90, 94, 54) 0%, rgb(48, 44, 35) 50%, rgb(39, 32, 22) 100%)",
    image: "/images/Espresso.png",
  },
];

const Playlist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  const playPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentIndex(nextIndex);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const value = parseFloat(e.target.value);
    audio.currentTime = value;
    setCurrentTime(value);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying && audio) {
      audio.play();
    }
  }, [currentIndex]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div
      data-aos="fade-up"
      className="mockup-phone border-primary h-full relative"
      onMouseMove={(e) => {
        const circle = document.getElementById("cursor");
        if (circle) {
          circle.style.left = e.clientX + "px";
          circle.style.top = e.clientY + "px";
        }
      }}
      onMouseEnter={() =>
        (document.getElementById("cursor").style.display = "block")
      }
      onMouseLeave={() =>
        (document.getElementById("cursor").style.display = "none")
      }
    >
      <div
        id="cursor"
        className="w-6 h-6 bg-white opacity-80 rounded-full fixed pointer-events-none z-50"
        style={{ display: "none" }}
      ></div>
      <div className="mockup-phone-display">
        <div
          className="h-full w-full"
          style={{
            background: "#2A7B9B",
            background: songs[currentIndex].bgColor,
          }}
        >
          <h1 className="flex gap-5  align-center mx-10 pt-10 pb-6 text-xlg font-medium text-pretty text-gray-300 sm:text-xl/8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                clipRule="evenodd"
              />
            </svg>
            My Playlist
          </h1>
          <div className="flex justify-center px-5 ">
            <img
              className="h-70 w-70 rounded-sm shadow-lg"
              src={songs[currentIndex].image}
              alt=""
            />
          </div>

          <div className="p-8 text-base-content">
            <h1 className="mx-8 text-xlg font-medium text-pretty text-gray-200 sm:text-xl/8">
              {songs[currentIndex].title}
            </h1>
            <h1 className="mx-8 text-sm  text-pretty text-gray-400 sm:text-sm">
              {songs[currentIndex].artist}
            </h1>
            <div className="max-w-md mx-auto rounded-xl p-6 space-y-6">
              <div className="flex justify-center items-center gap-4 ">
                <button onClick={prevTrack}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-white hover:text-blue-400"
                  >
                    <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
                  </svg>
                </button>
                <button onClick={playPause}>
                  {isPlaying ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-8 text-white hover:text-blue-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-8 text-white hover:text-blue-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <button onClick={nextTrack}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-white hover:text-blue-400"
                  >
                    <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-200">{formatTime(currentTime)}</span>
                <input
                  type="range"
                  className="flex-1 h-1 bg-black rounded-lg appearance-none"
                  style={{
                    background: `linear-gradient(to right, white ${
                      (currentTime / duration) * 100
                    }%, rgb(50, 46, 80) ${(currentTime / duration) * 100}%)`,
                  }}
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleSeek}
                />
                <span className="text-gray-200">{formatTime(duration)}</span>
              </div>

              <audio
                ref={audioRef}
                src={songs[currentIndex].file}
                onTimeUpdate={handleTimeUpdate}
                onEnded={nextTrack}
                onLoadedMetadata={handleTimeUpdate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
