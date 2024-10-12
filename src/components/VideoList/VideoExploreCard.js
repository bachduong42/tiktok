import { MdMoreHoriz } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { MuteIcon, VolumnIcon } from "../Icons/Icons";
import { useNavigate } from "react-router-dom";

function VideoExploreCard({ video }) {
    const [volume, setVolume] = useState(0);
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const [isHoverVideo, setIsHoverVideo] = useState(false);
    const videoRef = useRef(null);
    let hoverTimeout;
    const handleMouseEnter = () => {
        hoverTimeout = setTimeout(() => {
            setIsHoverVideo(true);
            if (videoRef.current && !videoRef.current.paused) {
                videoRef.current.play().catch(error => console.log(error));
            }
        }, 200);
    };
    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setIsHoverVideo(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };
    const handleChangeVolume = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    }
    useEffect(() => {
        if (isHoverVideo && videoRef.current) {
            videoRef.current.play().catch(error => console.log(error));
        }
    }, [isHoverVideo]);
    const openDetailVideo = (uuid) => {
        console.log("Click video")
        navigate(`/videos/${uuid}`);
    }
    return (
        <div className="w-full h-[426px] flex gap-6">
            <div
                onClick={() => openDetailVideo(video.uuid)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex gap-5 w-full h-full relative bg-white cursor-pointer">
                <video
                    ref={videoRef}
                    loop
                    muted={volume === 0}
                    className="w-full h-full object-cover block rounded-[20px]">
                    <source src={video.file_url} type="video/mp4" />
                </video>
                <div className="absolute w-full h-full inset-0 bg-black bg-opacity-5 rounded-[20px]"></div>
                <div className="flex w-full absolute top-0 left-0 text-start p-3 justify-between inset-0 h-[50px] ">
                    <div className="flex gap-2 w-[112px]"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}>
                        {volume === 0 ? (
                            <MuteIcon className="text-white" />
                        ) : (
                            isHoverVideo && <VolumnIcon className="text-white" />
                        )}
                        {isHover && (
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={handleChangeVolume}
                                className=""
                            />
                        )}
                    </div>
                    {isHoverVideo && <MdMoreHoriz className="text-white text-[25px]" />}
                </div>
            </div>
        </div>
    );
}

export default VideoExploreCard;