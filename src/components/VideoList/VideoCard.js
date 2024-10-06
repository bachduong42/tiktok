import { MdAdd, MdMoreHoriz, MdMusicNote } from "react-icons/md";
import { useRef, useState } from "react";
import Image from "../Image";
import { CommentIcon, IsLikeIcon, MuteIcon, SaveIcon, ShareIcon, UnLikeIcon, VolumnIcon } from "../Icons/Icons";

function VideoCard({ video }) {
    const [volume, setVolume] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isHoverVideo, setIsHoverVideo] = useState(false);
    const videoRef = useRef(null);
    const toggleShowMore = () => {
        setShowMore(prev => !prev);
    };
    const handleChangeVolume = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    }
    return (
        <div className="w-[482px] h-[629px] flex gap-6">
            <div
                onMouseEnter={() => setIsHoverVideo(true)}
                onMouseLeave={() => setIsHoverVideo(false)}
                className="flex gap-5 w-[354px] h-[629px] relative bg-white cursor-pointer">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={volume === 0}
                    className="w-full h-full object-cover block rounded-[20px]">
                    <source src={video.file_url} type="video/mp4" />
                </video>
                <div className="absolute w-full h-full inset-0 bg-black bg-opacity-5 rounded-[20px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-30 z-10"></div>
                <div className="flex w-full absolute top-0 left-0 text-start p-3 justify-between inset-0 h-[50px] z-20">
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
                <div className="absolute text-[#ffffffe6] flex flex-col bottom-0 left-0 gap-2 pb-5 text-start pl-3 w-full">

                    <span className="text-[14px] leading-[18px] inline-block hover:underline cursor-pointer">{video.user.nickname}</span>
                    <span className="text-[14px] leading-[18px] inline w-[90%] cursor-pointer">
                        {showMore ? video.description : video.description.length > 50 ? `${video.description.substring(0, 40)}...` : video.description}
                        {video.description.length > 50 && (
                            <span
                                className="font-semibold cursor-pointer"
                                onClick={toggleShowMore}>
                                {showMore ? "...less" : " more"}
                            </span>
                        )}
                    </span>
                    <div className="flex justify-start items-center gap-1 text-start cursor-pointer ">
                        <MdMusicNote></MdMusicNote>
                        <span>-</span>
                        <span className="overflow-hidden text-[14px] leading-[18px] hover:underline"> {video.music}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-end ">
                <div className="relative w-[48px] h-[48px] justify-center items-center mb-6">
                    <Image src={video.user.avatar} alt="" className="w-[48px] h-[48px] rounded-[90px]" />
                    {!video.user.is_followed &&
                        <button className="w-[24px] h-[24px] bg-[#fe2c55] absolute bottom-0 left-1/2 rounded-[90px] flex  transform translate-x-[-50%] translate-y-[30%] justify-center items-center">
                            <MdAdd className="w-[20px] h-[20px] text-white justify-center items-center" />
                        </button>
                    }
                </div>
                <div className="flex flex-col mb-2">
                    <button className="w-[48px] h-[48px] bg-[#1618230f] rounded-[90px] items-center flex justify-center">
                        {video.is_liked ? <IsLikeIcon></IsLikeIcon> : <UnLikeIcon />}
                    </button>
                    <span className="text-xs leading-4 text-[#161823bf]">{video.likes_count}</span>
                </div>
                <div className="flex flex-col mb-2">
                    <button className="w-[48px] h-[48px] bg-[#1618230f] rounded-[90px] items-center flex justify-center">
                        <CommentIcon></CommentIcon>
                    </button>
                    <span className="text-xs leading-4 text-[#161823bf]">{video.comments_count}</span>
                </div>
                <div className="flex flex-col mb-2">
                    <button className="w-[48px] h-[48px] bg-[#1618230f] rounded-[90px] items-center flex justify-center">
                        <SaveIcon></SaveIcon>
                    </button>
                    <span className="text-xs leading-4 text-[#161823bf]">0</span>
                </div>
                <div className="flex flex-col ">
                    <button className="w-[48px] h-[48px] bg-[#1618230f] rounded-[90px] items-center flex justify-center">
                        <ShareIcon></ShareIcon>
                    </button>
                    <span className="text-xs leading-4 text-[#161823bf]">{video.shares_count}</span>
                </div>
            </div>
        </div >
    );
}

export default VideoCard;