import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import avaDefault from "~/assets/images/noimage.jpg"
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className="w-full px-4 py-[9px] flex gap-3 hover:bg-[#162c2408]">
            <img src={data.avatar || avaDefault} alt="" className="w-[40px] h-[40px] rounded-[90px]" />
            <div className="flex flex-col items-start">
                <div className="text-base font-bold leading-[21px] text-ellipsis whitespace-nowrap">{data.nickname}</div>
                <div className="text-[14px] text-[#16182380]">{data.full_name}</div>
            </div>
        </Link>
    );
}

AccountItem.prototype = {
    data: PropTypes.object.isRequired
}

export default AccountItem;