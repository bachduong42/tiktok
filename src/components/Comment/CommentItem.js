import noImage from "~/assets/images/noimage.jpg";
import { LikedIcon } from "../Icons/Icons";
import { MdEditSquare, MdMoreHoriz, MdOutlineDeleteOutline, MdOutlineFlag } from "react-icons/md";
import { useEffect, useState } from "react";
import Tippy from '@tippyjs/react/headless';
import { getCurrentUser } from "~/services/getUser";
import { deleteComment } from "~/services/comment";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
function CommentItem({ comment, fetchComments, onEdit }) {
    const [showMenu, setShowMenu] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [user, setUser] = useState(null);
    const [isMyComment, setIsMyComment] = useState(false);
    const navigate = useNavigate();
    const avatarUrl = comment.user.avatar === "https://files.fullstack.edu.vn/f8-tiktok/"
        ? noImage
        : comment.user.avatar;
    const handleOnClickOutSide = () => {
        setShowMenu(false);
    };
    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
            if (currentUser && comment.user.id === currentUser.id) {
                setIsMyComment(true);
            }
        };
        fetchUser();
    }, [comment.user.id]);
    const handleDeleteComment = async () => {
        try {
            const res = deleteComment(comment.id);
            fetchComments();
        }
        catch (error) {
            console.log(error)
        }
    }
    const handleGetUser = async (nickname) => {
        if (user && comment.user.id === user.id) {
            navigate('/my-profile');
        } else {
            navigate(`/${nickname}`);
        }
    }
    return (
        <div
            onMouseEnter={() => setShowMore(true)}
            onMouseLeave={() => setShowMore(false)}
            className="w-full justify-between flex px-2 py-2">
            <div className="flex flex-row w-9/10 gap-3">
                <img
                    onClick={() => handleGetUser(comment.user.nickname)}
                    src={avatarUrl} alt="" className="w-[40px] h-[40px] object-cover rounded-full cursor-pointer" />
                <div className="flex flex-col text-start gap-1">
                    <span
                        onClick={() => handleGetUser(comment.user.nickname)}
                        className="text-sm font-semibold leading-5 display-text cursor-pointer">{comment.user.first_name + ' ' + comment.user.last_name}</span>
                    <span className="text-base whitespace-pre-line break-words leading-5 ">{comment.comment}</span>
                    <span className="text-sm text-[#16182380] leading-5">{comment.created_at}</span>
                </div>

            </div>
            <div className="flex flex-col w-1/10 justify-center">
                <Tippy
                    onClickOutside={handleOnClickOutSide}
                    interactive
                    placement="bottom-end"
                    visible={showMenu}
                    render={(attrs) => (
                        <div className="bg-white w-[150px] shadow-lg rounded-md" {...attrs}>
                            <div className="flex flex-col text-start">
                                {isMyComment ?
                                    <>
                                        <Button
                                            leftIcon={<MdEditSquare />}
                                            className="cursor-pointer py-1 hover:text-[#fe2c55] text-[13px] font-bold"
                                            onClick={() => onEdit(comment)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            leftIcon={<MdOutlineDeleteOutline />}
                                            className="cursor-pointer py-1 hover:text-[#fe2c55] text-[13px] font-bold"
                                            onClick={handleDeleteComment}
                                        >
                                            Delete
                                        </Button>
                                    </>
                                    :
                                    <Button
                                        leftIcon={<MdOutlineFlag />}
                                        className="cursor-pointer py-1 hover:text-[#fe2c55] text-[14px] font-bold"
                                        onClick={() => {
                                        }}
                                    >
                                        Report
                                    </Button>
                                }


                            </div>
                        </div>
                    )}
                >
                    <div
                        onMouseEnter={() => setShowMenu(true)}
                        className="w-[20px] h-[20px]"> {showMore && <MdMoreHoriz className="text-[25px] pr-1" />}</div>
                </Tippy>
                <LikedIcon></LikedIcon>
                <span className="leading-5 text-base text-[#16182380]">{comment.likes_count}</span>
            </div>
        </div>
    );
}

export default CommentItem;