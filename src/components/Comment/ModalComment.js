import { useCallback, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { createComment, getComment, updateComment } from "~/services/comment";
import CommentItem from "./CommentItem";
import { CommentIcon1, CommentIcon2 } from "../Icons/Icons";

function ModalComment({ isOpen, onClose, video }) {
    const [loading, setLoading] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentValue, setCommentValue] = useState("");
    const [editComment, setEditComment] = useState(null);
    const handleInsertComment = async () => {
        try {
            if (editComment) {
                await updateComment(commentValue, editComment.id);
            } else {
                await createComment(commentValue, video.uuid);
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
    const fetchComments = useCallback(async () => {
        setLoading(true)
        const commentData = await getComment(video.uuid);
        setComments(commentData);
        setLoading(false)
    }, [video.uuid]);

    useEffect(() => {
        if (isOpen) {
            fetchComments();
        }

    }, [fetchComments, isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-end">
            <div className="bg-white w-96 h-screen p-4 mt-[100px] max-w-[600px] border-gray-300 border-2 flex flex-col z-10 transition-all duration-150">
                <div className="flex w-full justify-between ">
                    <h2 className="text-lg flex gap-1"><b>Bình luận</b>({comments.length})</h2>
                    <button onClick={onClose} className="w-[20px] h-[20px] flex items-center justify-center"><MdClose className="text-black text-[20px] font-bold" /></button>
                </div>
                <div className="flex flex-col gap-3 h-[550px] overflow-y-auto pt-2 ">
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
                <div className="w-full h-[80px]  py-3 px-2 border-t-2 flex items-center">
                    <div className="w-10/12 h-[40px] relative flex flex-row  bg-[#1618230f] rounded-lg px-[9px] cursor-text border-transparent items-center">
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
                        className={`w-1/12 font-bold text-[14px] text-start pl-1 leading-10 ${commentValue ? 'text-[#fe2c55]' : 'text-[#16182357]'}`}>
                        {editComment ? "UPDATE" : "POST"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalComment;