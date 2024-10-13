import { useCallback, useEffect, useState } from "react";
import { MdClose, MdMoreHoriz, MdOutlineMusicNote } from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getVideo } from "~/services/getVideo";
import Button from "../Button";
import { CommentIcon1, CommentIcon2, IconDetailVideo1, IconDetailVideo2, IconDetailVideo3, IconDetailVideo4, IconDetailVideo5, ShareIcon } from "../Icons/Icons";
import { createComment, getComment, updateComment } from "~/services/comment";
import CommentItem from "../Comment";
import noImage from "~/assets/images/noimage.jpg";
import ButtonList from "./ButtonList";
import { likeVideo, unLikeVideo } from "~/services/like";

function DetailVideo() {
    const { uuid } = useParams();
    const [video, setVideo] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const [commentValue, setCommentValue] = useState("");
    const [editComment, setEditComment] = useState(null);
    const location = useLocation();
    const backprofile = location.state;

    // console.log("id:", uuid)

    const fetchDetailVideo = useCallback(async () => {
        setLoading(true)
        const videoData = await getVideo(uuid);
        setVideo(videoData.data);
        setLoading(false)
    }, [uuid]);

    const avatarUrl = (video.user && video.user.avatar === "https://files.fullstack.edu.vn/f8-tiktok/")
        ? noImage
        : (video.user ? video.user.avatar : noImage);
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
        if (backprofile) {
            const nickname = video.user.nickname;
            navigate(`/${nickname}`);
        } else {
            navigate('/explore')
        }

    }
    const handleInsertComment = async () => {
        try {
            if (editComment) {
                await updateComment(commentValue, editComment.id);
            } else {
                await createComment(commentValue, uuid);
            }
            setCommentValue("");
            setEditComment(null);
            fetchComments();
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleEditComment = (comment) => {
        setEditComment(comment);
        setCommentValue(comment.comment);
    };
    const onLikeToggle = async (videoId, isLiked) => {
        try {
            let updatedVideo;
            if (isLiked) {
                updatedVideo = await unLikeVideo(videoId);
            } else {
                updatedVideo = await likeVideo(videoId);
            }
            setVideo(updatedVideo);
        } catch (error) {
            console.error("Error toggling like:", error);
        }
    }
    const handleGetUser = async (nickname) => {
        try {
            navigate(`/${nickname}`);
        } catch (error) {
            console.log("Error: User not found");
        }
    };

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
                                <img
                                    onClick={() => handleGetUser(video.user.nickname)}
                                    src={avatarUrl} alt="" className="w-[40px] h-[40px] rounded-full" />
                                <div className="flex flex-col gap-1">
                                    <div onClick={() => handleGetUser(video.user.nickname)} className="font-bold text-[20px] text-start display-text leading-5 ">{video.user.nickname}</div>
                                    <div className="text-[14px] text-[#161823] leading-4 text-start">{video.user.first_name + ' ' + video.user.last_name}</div>
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
                    <ButtonList video={video} onLikeToggle={() => onLikeToggle(video.id, video.is_liked)} detail className></ButtonList>
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
                    <div className="w-full h-[32px] border-b-2 border-gray-400 font-bold">Comments({comments.length})</div>
                    <div className="flex flex-col gap-3 h-[400px] overflow-y-auto pt-2">
                        {
                            comments &&
                            comments.map((comment) => (
                                <CommentItem
                                    key={comment.id} comment={comment}
                                    fetchComments={fetchComments}
                                    onEdit={() => handleEditComment(comment)}
                                ></CommentItem>
                            ))
                        }
                    </div>
                    <div className="w-full h-[80px] px-6 py-3 border-t-2 flex items-center">
                        <div className="w-11/12 h-[40px] relative flex flex-row  bg-[#1618230f] rounded-lg px-[9px] cursor-text border-transparent items-center">
                            <input
                                type="text"
                                value={commentValue}
                                onChange={(e) => setCommentValue(e.target.value)}
                                className="w-full h-full bg-transparent outline-none" />
                            <div className="flex gap-2 absolute right-2 items-center">
                                <CommentIcon1></CommentIcon1>
                                <CommentIcon2></CommentIcon2>
                            </div>
                        </div>
                        <button
                            onClick={handleInsertComment}
                            disabled={!commentValue}
                            className={`w-1/12 font-bold text-[14px] leading-10 pl-2 ${commentValue ? 'text-[#fe2c55]' : 'text-[#16182357]'}`}>
                            {editComment ? "UPDATE" : "POST"}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DetailVideo;