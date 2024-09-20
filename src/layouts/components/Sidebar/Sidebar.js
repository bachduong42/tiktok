import config from "~/config";
import Menu, { MenuItem } from "./Menu"

import { ExploreIcon, ExploreIconActive, FollowingIcon, FollowingIconActive, HomeIcon, HomeIconActive, LiveIcon, LiveIconActive, ProfileIcon } from "~/components/Icons";
import Button from "~/components/Button";
import imageCoins from "~/assets/images/coins.png"
import Image from "~/components/Image";
import FollowingAccounts from "~/components/FollowingAccounts";

function Sidebar() {
    const currentUser = true
    return (
        <div className="w-1/6 flex flex-col pt-[20px] pb-[26px] pl-2">
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon></HomeIcon>} activeIcon={<HomeIconActive></HomeIconActive>}></MenuItem>
                <MenuItem title="Explore" to={config.routes.explore} icon={<ExploreIcon></ExploreIcon>} activeIcon={<ExploreIconActive></ExploreIconActive>}></MenuItem>
                <MenuItem title="Following" to={config.routes.follow} icon={<FollowingIcon></FollowingIcon>} activeIcon={<FollowingIconActive></FollowingIconActive>}></MenuItem>
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon></LiveIcon>} activeIcon={<LiveIconActive></LiveIconActive>}></MenuItem>
                <MenuItem title="Profile" to={config.routes.friend} icon={<ProfileIcon></ProfileIcon>} activeIcon={<ProfileIcon></ProfileIcon>}></MenuItem>
            </Menu>
            <hr />
            {currentUser ? (

                <FollowingAccounts label="Following Accounts"></FollowingAccounts>

            ) :
                <div className="flex flex-col w-full pt-[20px] px-2 pb-6 gap-3">
                    <span className="text-[#16182380] text-base leading-[21px]">Log in to follow creators, like videos, and view comments.</span>
                    <Button outline className="h-[48px]">Log in</Button>
                </div>
            }
            {/* <hr />
            <div className="relative flex justify-center items-center box-border px-2 h-[52px] mt-2">
                <Image src={imageCoins} alt={imageCoins} className="w-full"></Image>
                <div className="text-[#fff5c9] text-[13px] font-bold leading-4 m-0 absolute w-[141px] items-center justify-start flex-row " >Create TikTok effects, get a reward</div>
            </div> */}

        </div>
    );
}


export default Sidebar;