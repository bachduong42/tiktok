import { MdAdd, MdCheck, MdMoreHoriz, MdMusicNote } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import Image from "../Image";
import { CommentIcon, IsLikeIcon, MuteIcon, SaveIcon, ShareIcon, UnLikeIcon, VolumnIcon } from "../Icons/Icons";
import UserToolTip from "../Popper/UserToolTip";
import { useNavigate } from "react-router-dom";
import ModalComment from "../Comment/ModalComment";
import { likeVideo, unLikeVideo } from "~/services/like";
import ButtonList from "./ButtonList";

function VideoCard({ video, onLikeToggle }) {
    const [volume, setVolume] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isHoverVideo, setIsHoverVideo] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [showModalComment, setShowModalComment] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const videoRef = useRef(null);
    const navigate = useNavigate();
    // const [like, setLike] = useState(video.is_liked);
    // const [countLikes, setCountLikes] = useState(video.likes_count);

    const toggleShowMore = () => {
        setShowMore(prev => !prev);
    };

    const handleChangeVolume = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };


    const handleHideResult = () => {
        setShowUser(false);
    };

    const handleMuteIcon = () => {
        setVolume(0);
        videoRef.current.volume = 0;
    };

    const handleGetUser = async (nickname) => {
        try {
            navigate(`/${nickname}`);
        } catch (error) {
            console.log("Error: User not found");
        }
    };

    const toggleModalComment = () => {
        setShowModalComment(prev => !prev);
        console.log(video.is_liked);
    };
    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setShowUser(false);
        }, 2000);
        setTimeoutId(id);
    };
    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }
        setShowUser(true);
    };

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
                <div className="flex w-full absolute top-0 left-0 text-start p-3 justify-between inset-0 h-[50px]">
                    <div className="flex gap-2 w-[112px]"
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}>
                        {volume === 0 ? (
                            <MuteIcon className="text-white" />
                        ) : (
                            isHoverVideo && <VolumnIcon className="text-white" onClick={handleMuteIcon} />
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
                    <span className="text-[14px] leading-[18px] inline-block hover:underline cursor-pointer display-text">{video.user.nickname}</span>
                    <span className="text-[14px] leading-[18px] inline w-[90%] cursor-pointer">
                        {showMore ? video.description : video.description.length > 50 ? `${video.description.substring(0, 40)}...` : video.description}
                        {video.description.length > 50 && (
                            <span className="font-semibold cursor-pointer" onClick={toggleShowMore}>
                                {showMore ? "...less" : " more"}
                            </span>
                        )}
                    </span>
                    <div className="flex justify-start items-center gap-1 text-start cursor-pointer">
                        <MdMusicNote />
                        <span>-</span>
                        <span className="overflow-hidden text-[14px] leading-[18px] hover:underline">{video.music}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-end">
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative w-[48px] h-[48px] justify-center items-center mb-6">
                    <UserToolTip video={video} showUser={showUser} handleHideResult={handleHideResult} setShowUser={setShowUser}>
                        <Image
                            onClick={() => handleGetUser(video.user.nickname)}
                            src={video.user.avatar}
                            alt=""
                            className="w-[48px] h-[48px] rounded-[90px] cursor-pointer"
                            onMouseEnter={() => setShowUser(true)}

                        />
                    </UserToolTip>
                    {!video.user.is_followed ? (
                        <button
                            className="w-[24px] h-[24px] bg-[#fe2c55] absolute bottom-0 left-1/2 rounded-[90px] flex transform translate-x-[-50%] translate-y-[30%] justify-center items-center">
                            <MdAdd className="w-[20px] h-[20px] text-white justify-center items-center" />
                        </button>
                    ) : (
                        <button className="w-[24px] h-[24px] bg-white absolute bottom-0 left-1/2 rounded-[90px] flex transform translate-x-[-50%] translate-y-[30%] justify-center items-center">
                            <MdCheck className="w-[20px] h-[20px] text-[#fe2c55] justify-center items-center" />
                        </button>
                    )}
                </div>
                <ButtonList video={video} onLikeToggle={onLikeToggle} showModalComment={() => setShowModalComment(true)}></ButtonList>
            </div>
            {showModalComment && (
                <ModalComment isOpen={showModalComment} onClose={toggleModalComment} video={video} />

            )}
        </div>
    );
}

export default VideoCard;
