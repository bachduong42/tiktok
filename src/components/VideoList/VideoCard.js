import { MdMusicNote } from "react-icons/md";
import { useState } from "react";

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
            <div className="flex flex-col">

            </div>
        </div>
    );
}

export default VideoCard;