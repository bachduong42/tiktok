import { Link } from "react-router-dom";
import noImages from "~/assets/images/noimage.jpg"
import Button from "../Button";
import { unFollowService } from "~/services/follow";
function AccountFollowingItem({ acc, unFollow }) {
    const userAvatar = acc && acc.avatar && acc.avatar !== 'https://files.fullstack.edu.vn/f8-tiktok/'
        ? acc.avatar
        : noImages;
    const handleUnFollow = async () => {
        await unFollowService(acc.id);
        unFollow(acc.id);
    }
    return (
        <div className="w-full px-4 py-4 flex justify-between h-[90px]">
            <Link to={`/@${acc.nickname}`} className="w-1/2 flex gap-3">
                <img src={userAvatar} alt="" className="w-[40px] h-[40px] rounded-[90px]" />
                <div className="flex flex-col items-start">
                    <div className="text-base font-bold leading-[21px] text-ellipsis whitespace-nowrap">{acc.nickname}</div>
                    <div className="text-[14px] text-[#16182380]">{acc.first_name + ' ' + acc.last_name}</div>
                </div>
            </Link>
            <Button
                onClick={handleUnFollow}
                outline className="h-[40px]">UnFollow</Button>
        </div>

    );
}

export default AccountFollowingItem;