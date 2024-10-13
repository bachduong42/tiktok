import config from "~/config";
import Menu, { MenuItem } from "./Menu"

import { ExploreIcon, ExploreIconActive, FollowingIcon, FollowingIconActive, HomeIcon, HomeIconActive, LiveIcon, LiveIconActive, ProfileIcon } from "~/components/Icons";
import Button from "~/components/Button";
import imageCoins from "~/assets/images/coins.png"
import Image from "~/components/Image";
import sidebarImage from "~/assets/images/sidebarImage.png"
import FollowingAccounts from "~/components/FollowingAccounts";
import { useContext, useState } from "react";
import { UserContext } from "~/contexts/UserContext";
import AuthModal from "~/components/Authentication";

function Sidebar() {
    const { user } = useContext(UserContext)
    const [openDialogLogin, setOpenDialogLogin] = useState(false);

    return (
        <div className={`lg:w-1/6 w-[72px] lg:border-none border border-r-[1px] border-[#1618231f] border-header
            flex flex-col pt-3 pb-[26px] pl-2 mb-2 fixed top-0 left-0 mt-[60px] overflow-y-auto h-screen sidebar ${openDialogLogin ? 'z-20' : 'z-10'} bg-white`}>
            <div className="flex flex-col -z-50">
                <Menu>
                    <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon></HomeIcon>} activeIcon={<HomeIconActive></HomeIconActive>}></MenuItem>
                    <MenuItem title="Explore" to={config.routes.explore} icon={<ExploreIcon></ExploreIcon>} activeIcon={<ExploreIconActive></ExploreIconActive>}></MenuItem>
                    {user ? <MenuItem
                        title="Following"
                        to={config.routes.follow}
                        icon={<FollowingIcon />}
                        activeIcon={<FollowingIconActive />}

                    /> : <></>}
                    <MenuItem title="Friend" to={config.routes.friend} icon={<ExploreIcon></ExploreIcon>} activeIcon={<ExploreIconActive></ExploreIconActive>}></MenuItem>
                    {/* <MenuItem
                        title="Profile"
                        to={config.routes.myinfo}
                        icon={<ProfileIcon />}
                        activeIcon={<ProfileIcon />}
                        user={user}
                        
                    /> */}
                    {user ? <MenuItem
                        title="Profile"
                        to={config.routes.myinfo}
                        icon={<ProfileIcon />}
                        activeIcon={<ProfileIcon />}
                        user={user}
                    /> : <></>}
                </Menu>
                <hr className="my-3" />
                <FollowingAccounts label="Suggested Accounts"></FollowingAccounts>
                {user ? (

                    <></>

                ) :
                    <div className="hidden lg:flex flex-col  w-[208px] px-2 gap-3 ">
                        <span className="text-[#16182380] text-base leading-[21px] text-start">Log in to follow creators, like videos, and view comments.</span>
                        <Button
                            onClick={() => setOpenDialogLogin(true)}
                            outline className="h-[48px]">Log in</Button>

                    </div>
                }
                <hr className="mt-4" />
                <div className="relative lg:flex hidden justify-center items-center box-border px-2 h-[52px] w-[208px] mt-4 cursor-pointer">
                    <Image src={imageCoins} alt={imageCoins} className=""></Image>
                    <div className="text-[#fff5c9] text-[13px] font-bold leading-4 m-0 absolute w-[141px] items-center justify-start flex-row left-[50px] text-start " >Create TikTok effects, get a reward</div>
                </div>
                <div className="lg:flex hidden flex-col text-start gap-2 mt-2">
                    <div className="text-[15px] leading-[22px] mt-0 cursor-pointer text-[#1618237d] font-[TikTokDisplayFont]">Company</div>
                    <div className="text-[15px] leading-[22px] mt-0 cursor-pointer text-[#1618237d] font-[TikTokDisplayFont]">Program</div>
                    <div className="text-[15px] leading-[22px] mt-0 cursor-pointer text-[#1618237d] font-[TikTokDisplayFont]">Terms & Policies</div>
                    <span className="text-[12px] leading-[16px] mt-[5px] mr-[6px] cursor-pointer text-[#1618237d] inline-block">© 2024 TikTok</span>
                </div>
                <div className="flex lg:hidden justify-start px-[8px] mt-2"><img src={sidebarImage} alt={sidebarImage} className="lg:hidden flex w-[32px] h-[32px] justify-center items-center" /></div>
            </div>
            {openDialogLogin && <AuthModal onClose={() => setOpenDialogLogin(false)}></AuthModal>}
        </div>
    );
}


export default Sidebar;