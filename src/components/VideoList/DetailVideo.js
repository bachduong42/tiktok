import { useCallback, useEffect, useState } from "react";
import { MdClose, MdMoreHoriz, MdOutlineMusicNote } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { getVideo } from "~/services/getVideo";
import Button from "../Button";
import { CommentIcon, IconDetailVideo1, IconDetailVideo2, IconDetailVideo3, IconDetailVideo4, IconDetailVideo5, IsLikeIcon, SaveIcon, ShareIcon, UnLikeIcon } from "../Icons/Icons";
import { getComment } from "~/services/comment";
import CommentItem from "../Comment";

function DetailVideo() {
    const { uuid } = useParams();
    const [video, setVideo] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    console.log("id:", uuid)
    const fetchDetailVideo = useCallback(async () => {
        setLoading(true)
        const videoData = await getVideo(uuid);
        setVideo(videoData);
        setLoading(false)
    }, [uuid]);
    const fetchComments = useCallback(async () => {
        setLoading(true)
        const commentData = await getComment(uuid);
        setComments(commentData);
        setLoading(false)
    }, [uuid]);

    useEffect(() => {
        fetchDetailVideo();
        fetchComments();
    }, [fetchDetailVideo, fetchComments]);

    const handleClose = () => {
        navigate('/explore')
    }

    return (
        <div className="w-full flex h-screen">
            <div className="w-3/5 bg-black h-full relative">
                <video
                    controls
                    className="w-[50%] h-full object-contain flex justify-center items-center mx-auto rounded-md"
                    src={video.file_url}
                    muted
                />
                <div
                    onClick={handleClose}
                    className="w-[40px] h-[40px] bg-[#54545480] rounded-full cursor-pointer absolute top-2 left-4 items-center flex justify-center">
                    <MdClose className="text-white w-[25px] h-[25px] font-extrabold" />
                </div>
                <div className="w-[40px] h-[40px] bg-[#54545480] rounded-full cursor-pointer absolute top-2 right-4 items-center flex justify-center">
                    <MdMoreHoriz className="text-white w-[25px] h-[25px] font-extrabold" />
                </div>

            </div>
            <div className="w-2/5 h-screen bg-white pt-0 pr-8  flex flex-col">
                <div className="w-full bg-[#16182308] h-auto p-4 mx-5 rounded-xl flex flex-col gap-2 mt-3">
                    {video.user && (
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <img src={video.user.avatar} alt="" className="w-[40px] h-[40px] rounded-full" />
                                <div className="flex flex-col gap-1">
                                    <div className="font-bold text-[20px] text-start display-text leading-5">{video.user.nickname}</div>
                                    <div className="text-[14px] text-[#161823] leading-4">{video.user.first_name + ' ' + video.user.last_name}</div>
                                </div>
                            </div>
                            <Button primary className="font-bold">Follow</Button>
                        </div>
                    )}
                    <div className="text-[#161823] leading-4 text-base text-start mt-2">{video.description}</div>
                    <div className="flex gap-2 text-start">
                        <MdOutlineMusicNote />
                        <div className="text-sm text-[#161823] leading-4 font-normal cursor-pointer hover:underline">{video.music}</div>
                    </div>
                </div>
                <div className="flex justify-between  py-4 pl-8">
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-row mb-2 items-center gap-1">
                            <button className="w-[30px] h-[30px] bg-[#1618230f] rounded-[90px] items-center flex justify-center">
                                {video.is_liked ? <IsLikeIcon width="17px" height="17px"></IsLikeIcon> : <UnLikeIcon width="17px" height="17px" />}
                            </button>
                            <span className="text-xs leading-4 text-[#161823bf]">{video.likes_count}</span>
                        </div>
                        <div className="flex flex-row mb-2 items-center gap-1">
                            <button className="w-[30px] h-[30px] bg-[#1618230f] rounded-[90px] items-center flex justify-center">
                                <CommentIcon width="17px" height="17px"></CommentIcon>
                            </button>
                            <span className="text-xs leading-4 text-[#161823bf]">{video.comments_count}</span>
                        </div>
                        <div className="flex flex-row mb-2 items-center gap-1">
                            <button className="w-[30px] h-[30px] bg-[#1618230f] rounded-[90px] items-center flex justify-center">
                                <SaveIcon width="17px" height="17px"></SaveIcon>
                            </button>
                            <span className="text-xs leading-4 text-[#161823bf]">0</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <IconDetailVideo1></IconDetailVideo1>
                        <IconDetailVideo2></IconDetailVideo2>
                        <IconDetailVideo3></IconDetailVideo3>
                        <IconDetailVideo4></IconDetailVideo4>
                        <IconDetailVideo5></IconDetailVideo5>
                        <ShareIcon className="cursor-pointer"></ShareIcon>
                    </div>
                </div>
                <div className="w-full px-4">
                    <div className="w-full h-[32px] border-b-2 border-black font-bold">Comments({video.comments_count})</div>
                    <div className="flex flex-col gap-3">
                        {
                            comments &&
                            comments.map((comment) => {
                                <CommentItem key={comment.id} comment={comment}></CommentItem>
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DetailVideo;