import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { songs } from "../utils/constants";
import { faBackward, faForward, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function MusicPlayer() {
    const [clicked, setClicked] = useState(false);
    const [audio, setAudio] = useState(new Audio(songs[0].link));

    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleAudioLoad = () => {
            setDuration(audio.duration / 60);
        }

        audio.addEventListener('loadedmetadata', handleAudioLoad);

        return () => {
            audio.removeEventListener('loadedmetadata', handleAudioLoad);
        }

    }, [audio, currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (audio && !audio.paused) {
                setCurrentTime(audio.currentTime);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [audio]);

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handleSliderClick = (e: React.MouseEvent<HTMLInputElement>) => {
        // Get the X coordinate
        const { clientX } = e; 

        // Reference the slider input element that triggered the event
        const slider = e.currentTarget;

        // Get the dimensions of the slider
        const { left, width } = slider.getBoundingClientRect();

        // Calculate the offset of the click from the left edge of the slider
        const offsetX = clientX - left;

        // Calculate the new time based on the offset
        const newTime = (offsetX / width) * duration;

        audio.currentTime = newTime; 
        setCurrentTime(newTime);
    };

    const handlePlay = (link: string, id: number) => {
        if (audio) {
            audio.pause();
        }

        const newAudio = new Audio(link);

        newAudio.onloadedmetadata = () => {
            setDuration(newAudio.duration);
        };

        setAudio(newAudio);
        setCurrentIndex(id);
        setClicked(true);

        newAudio.play();
    };


    const handleClickPlay = () => {
        if (clicked) {
            setClicked(false);
            audio.pause();
        }
        else {
            setClicked(true);
            handlePlay(songs[currentIndex??0].link, currentIndex??0);
        }
    };

    const handleForwards = () => {
        const index = (currentIndex + 1) % songs.length;
        handlePlay(songs[index].link, index);
    };

    const handleBackwards = () => {
        const index = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
        handlePlay(songs[index].link, index);
    };

    return (
        <div className="w-[90%] rounded-lg flex flex-col mx-auto mt-4 dark:bg-zinc-800 bg-violet-200 p-4 md:p-6">
            {
                (clicked && !audio.paused) && (
                    <div className="border-violet-500 dark:border-zinc-700 border-2 flex gap-10 justify-center items-center text-4xl p-4 rounded-lg dark:bg-[#1C1C1C] bg-violet-300">
                        <p className="text-center dark:text-white text-gray-800 "><span className="text-violet-500">Playing: </span>{songs[currentIndex].name}</p>
                    </div>
                )
            }
            
            
            <div className="my-4 dark:text-violet-500 text-gray-500 flex gap-10 justify-center items-center text-4xl">
                <FontAwesomeIcon className="cursor-pointer" icon={faBackward} onClick={handleBackwards} />
                <FontAwesomeIcon className="cursor-pointer" onClick={handleClickPlay} icon={clicked ? faPause : faPlay} />
                <FontAwesomeIcon className="cursor-pointer" icon={faForward} onClick={handleForwards} />
            </div>

            <div className="w-[90%] mx-auto mt-2 p-2 flex gap-4 items-center justify-around rounded-lg border-2 dark:border-zinc-700 border-violet-300">
                <p className="dark:text-white">{(currentTime / 60).toFixed(2)}</p>
                <input 
                    type="range" 
                    min={0} 
                    max={audio.duration || 0} 
                    value={currentTime}
                    onChange={handleRangeChange}
                    onMouseDown={handleSliderClick}
                    className="w-full"
                />
                <p className="dark:text-white">{duration ? duration.toFixed(2) : 'Loading...'}</p>
            </div>

            <div className="playlist max-h-[300px] overflow-y-scroll w-full rounded-md flex gap-2 flex-col mx-auto mt-4 p-1">
                {
                    songs.map(song => (
                        <div key={song.id} className={`${(currentIndex == song.id && clicked) ? 'border-2 dark:border-violet-400 border-violet-500' : ''} mr-2 rounded-xl p-2 flex gap-8 dark:bg-[#1C1C1C] bg-violet-300`}>
                            <div className="relative">
                                <img width={80} src={'albums/' + song.image} alt="" />
                                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-black bg-opacity-50 text-white rounded-full p-2" onClick={() => handlePlay(song.link, song.id)} >
                                    <FontAwesomeIcon icon={(currentIndex == song.id && clicked) ? faPause : faPlay} />
                                </button>
                            </div>
                            <div className="dark:text-white">
                                <p className="text-xl">{song.name}</p>
                                <p className="ml-4">{song.artist}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
