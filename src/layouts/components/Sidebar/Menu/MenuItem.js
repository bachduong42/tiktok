import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import noImage from "../../../../assets/images/noimage.jpg"

function MenuItem({ title, to, icon, activeIcon, user }) {
    // console.log(user)
    const userAvatar = user && user.avatar && user.avatar !== 'https://files.fullstack.edu.vn/f8-tiktok/'
        ? user.avatar
        : noImage;
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex text-center p-2 box-border rounded text-[32px] transition duration-200 ease-in-out items-center bg-white hover:bg-[#16182305] font-bold ${isActive ? "text-[#fe2c55]" : "text-[#161823fc]"
                }`
            }
        >
            {({ isActive }) => (
                <>
                    <span className="flex">
                        {user ? (
                            <img src={userAvatar} alt="User Avatar" className='w-[30px] h-[30px] rounded-[90px]' />
                        ) : (
                            isActive ? activeIcon : icon
                        )}

                    </span>
                    <span className='text-[18px] leading-6 ml-[6px] lg:block hidden'>{title}</span>
                </>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,       // Icon mặc định
    activeIcon: PropTypes.node.isRequired,  // Icon khi active
};

export default MenuItem;
