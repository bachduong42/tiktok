import Image from "../Image";
import { Wrapper as PopperWrapper } from "~/components/Popper"
import Tippy from '@tippyjs/react/headless';
import Button from "../Button";
import { useNavigate } from "react-router-dom";
function UserToolTip({ video, children, showUser, handleHideResult }) {
    const navigate = useNavigate();

    const handleGetUser = async (nickname) => {
        try {
            navigate(`/${nickname}`);
        } catch (error) {
            console.log("Lỗi không tìm thấy người dùng");
        }
    }

    return (
        <Tippy
            onClickOutside={handleHideResult}
            interactive
            visible={showUser}
            placement="bottom-start"
            render={attrs => (
                <div className="w-[320px]  items-start flex" tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <div className="flex justify-between px-5 pt-5">
                            <Image
                                onClick={() => handleGetUser(video.user.nickname)}
                                src={video.user.avatar} className="w-[48px] h-[48px] rounded-[90px] cursor-pointer"></Image>
                            <Button outline className="w-[100px] h-[40px]">Follow</Button>
                        </div>
                        <div className="flex flex-col text-start px-5 pt-3 gap-1">
                            <div
                                onClick={() => handleGetUser(video.user.nickname)}
                                className="text-xl font-bold leading-6 text-[#161823] display-text cursor-pointer">{video.user.nickname}</div>
                            <div className="text-[#161823 text-sm leading-[18px] font-semibold ">{video.user.first_name}</div>
                            <div className="flex gap-2 py-2  border-b-2 pb-2">
                                <div className="flex gap-1 items-center">
                                    <span className="display-text font-bold text-[17px] leading-5 text-[#161823]">{video.followers_count || 0}</span>
                                    <span className="text-[#161823bf] display-text-semi text-[17px] leading-5">Followers</span>
                                </div>
                                <div className="flex gap-1  items-center">
                                    <span className="display-text font-bold text-[17px] leading-5 text-[#161823]">{video.likes_count || 0}</span>
                                    <span className="text-[#161823bf] display-text-semi text-[17px] leading-5">Likes</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-start w-full flex px-5 pt-2 pb-8 text-sm text-[#161823bf]">{video.user.bio || 'No bio yet'}</div>
                    </PopperWrapper>
                </div>
            )}>{children}</Tippy>
    );
}

export default UserToolTip;