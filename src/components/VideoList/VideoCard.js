import { MdAdd, MdMusicNote } from "react-icons/md";
import { useState } from "react";
import Image from "../Image";
import { IsLikeIcon, UnLikeIcon } from "../Icons/Icons";

function VideoCard({ video }) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(prev => !prev);
    };
    return (
        <div className="w-[482px] h-[629px] flex gap-6">
            <div className="flex gap-5 w-[354px] h-[629px] relative bg-white">
                <video autoPlay loop muted className="w-full h-full object-cover block rounded-md">
                    <source src={video.file_url} type="video/mp4" />
                </video>
                <div className="absolute w-full h-full inset-0 bg-black  bg-opacity-5"></div>
                <div className="absolute text-[#ffffffe6] flex flex-col bottom-0 left-0 gap-5 pb-5 text-start pl-3 w-full">
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
            <div className="flex flex-col items-center justify-center gap-5">
                <div className="relative w-[48px] h-[48px] justify-center items-center">
                    <Image src={video.user.avatar} alt="" className="w-[48px] h-[48px] rounded-[90px]" />
                    {!video.user.is_followed &&
                        <button className="w-[24px] h-[24px] bg-[#fe2c55] absolute bottom-0 left-1/2 rounded-[90px] flex  transform translate-x-[-50%] translate-y-[30%] justify-center items-center">
                            <MdAdd className="w-[20px] h-[20px] text-white justify-center items-center" />
                        </button>
                    }
                </div>
                <div className="flex flex-col gap-0">
                    <button className="w-[48px] h-[48px] bg-[#1618230f] rounded-[90px] items-center flex justify-center">
                        {video.is_liked ? <IsLikeIcon></IsLikeIcon> : <UnLikeIcon />}
                    </button>
                    <span className="text-xs leading-4 text-[#161823bf]">{video.likes_count}</span>
                </div>
                <div className="flex flex-col gap-0">
                    <button className="w-[48px] h-[48px] bg-[#1618230f] rounded-[90px] items-center flex justify-center">
                        {video.is_liked ? <IsLikeIcon></IsLikeIcon> : <UnLikeIcon />}
                    </button>
                    <span className="text-xs leading-4 text-[#161823bf]">{video.likes_count}</span>
                </div>


            </div>
        </div>
    );
}

export default VideoCard;