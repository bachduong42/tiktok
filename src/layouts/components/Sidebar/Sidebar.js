import config from "~/config";
import Menu, { MenuItem } from "./Menu"

import { ExploreIcon, ExploreIconActive, FollowingIcon, FollowingIconActive, HomeIcon, HomeIconActive, LiveIcon, LiveIconActive, ProfileIcon } from "~/components/Icons";

function Sidebar() {
    return (
        <div className="w-1/5 flex flex-col pt-[20px] pb-[26px] pl-2">
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon></HomeIcon>} activeIcon={<HomeIconActive></HomeIconActive>}></MenuItem>
                <MenuItem title="Explore" to={config.routes.explore} icon={<ExploreIcon></ExploreIcon>} activeIcon={<ExploreIconActive></ExploreIconActive>}></MenuItem>
                <MenuItem title="Following" to={config.routes.follow} icon={<FollowingIcon></FollowingIcon>} activeIcon={<FollowingIconActive></FollowingIconActive>}></MenuItem>
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon></LiveIcon>} activeIcon={<LiveIconActive></LiveIconActive>}></MenuItem>
                <MenuItem title="Profile" to={config.routes.friend} icon={<ProfileIcon></ProfileIcon>} activeIcon={<ProfileIcon></ProfileIcon>}></MenuItem>
            </Menu>
            <hr />
        </div>
    );
}

export default Sidebar;