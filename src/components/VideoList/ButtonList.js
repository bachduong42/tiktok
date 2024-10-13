import { CommentIcon, IsLikeIcon, SaveIcon, ShareIcon, UnLikeIcon } from "../Icons/Icons";

function ButtonList({ video, onLikeToggle, showModalComment, detail }) {
    return (
        <div className={`flex ${detail ? "flex-row gap-4" : "flex-col"} items-center justify-end`}>
            <div className={`flex ${detail ? " items-center gap-2" : "flex-col"} mb-2`}>
                {video.is_liked ? (
                    <button
                        onClick={onLikeToggle}
                        className={`${detail ? "w-[30px] h-[30px]" : "w-[48px] h-[48px]"} bg-[#1618230f] rounded-[90px] items-center flex justify-center`}>
                        <IsLikeIcon width={detail ? "17px" : "24px"} height={detail ? "17px" : "24px"} />
                    </button>
                ) :
                    (
                        <button
                            onClick={onLikeToggle}
                            className={`${detail ? "w-[30px] h-[30px]" : "w-[48px] h-[48px]"} bg-[#1618230f] rounded-[90px] items-center flex justify-center`}>
                            <UnLikeIcon width={detail ? "17px" : "24px"} height={detail ? "17px" : "24px"} />
                        </button>
                    )}
                <span className="text-xs leading-4 text-[#161823bf]">{video.likes_count}</span>
            </div>
            <div className={`flex ${detail ? " items-center gap-2" : "flex-col"} mb-2`}>
                <button
                    onClick={showModalComment}
                    className={`${detail ? "w-[30px] h-[30px]" : "w-[48px] h-[48px]"} bg-[#1618230f] rounded-[90px] items-center flex justify-center`}>
                    <CommentIcon
                        // width={detail ? "17px" : "24px"} height={detail ? "17px" : "24px"}
                        className={`${detail ? "" : "text-[21px]"}`} />
                </button>
                <span className="text-xs leading-4 text-[#161823bf]">{video.comments_count}</span>
            </div>
            <div className={`flex ${detail ? " items-center gap-2" : "flex-col"} mb-2`}>
                <button
                    className={`${detail ? "w-[30px] h-[30px]" : "w-[48px] h-[48px]"} bg-[#1618230f] rounded-[90px] items-center flex justify-center`}>
                    <SaveIcon className={`${detail ? "" : "text-[21px]"}`} />
                </button>
                <span className="text-xs leading-4 text-[#161823bf]">0</span>
            </div>
            <div className={`flex  ${detail ? "flex-row items-center gap-2" : "flex-col"} *:`}>
                <button
                    className={`${detail ? "w-[30px] h-[30px]" : "w-[48px] h-[48px]"} bg-[#1618230f] rounded-[90px] items-center flex justify-center`}>
                    <ShareIcon className={`${detail ? "" : "text-[21px]"}`} />
                </button>
                <span className="text-xs leading-4 text-[#161823bf]">0</span>
            </div>
        </div>
    );
}

export default ButtonList;