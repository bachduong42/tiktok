import { useState } from "react";
import noImage from "../../assets/images/noimage.jpg"
import Button from "~/components/Button";
import { ProfileLeftFavoritesIcon, ProfileLeftLikedIcon, ProfileLeftRepostsIcon, ProfileLeftVideoIcon, SettingIcon, ShareProfile } from "~/components/Icons/Icons";
import EditMyProfile from "./EditMyProfile";

function ProfileUser({ myInfo }) {
    const [openEditProfile, setOpenEditProfile] = useState(false)
    const userAvatar = myInfo && myInfo.avatar && myInfo.avatar !== 'https://files.fullstack.edu.vn/f8-tiktok/'
        ? myInfo.avatar
        : noImage;
    const [activeCity, setActiveCity] = useState("Videos");
    const handleChangeTab = (cityName) => {
        setActiveCity(cityName);
    }

    return (
        <div className="w-full h-full pt-[32px] px-[24px] pb-[36px]">
            <div className="flex w-full gap-7 ">
                <img
                    src={userAvatar} alt=""
                    className="w-[212px] h-[212px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-[12px] w-full justify-center">
                    <div className="flex gap-[12px] items-center">
                        <div className="text-[24px] leading-[30px] text-[#161823] font-bold">{myInfo.nickname || 'Nickname'}</div>
                        <div className="text-[18px] font-semibold">{myInfo.first_name || "Name"}</div>
                    </div>
                    <div className="flex gap-[12px] items-center">
                        <Button primary onClick={() => setOpenEditProfile(true)}>Edit profile</Button>
                        {openEditProfile && <EditMyProfile onClose={() => setOpenEditProfile(false)}></EditMyProfile>}
                        <Button className="bg-[#f2f2f2] w-[136px] h-[36px] font-semibold hover:bg-[#0000001f] transition-all duration-100">Promote post</Button>
                        <button className="bg-[#f2f2f2] w-[36px] h-[36px] hover:bg-[#0000001f] transition-all duration-100 items-center justify-center flex rounded-[6px]">
                            <SettingIcon></SettingIcon>
                        </button>
                        <button className="bg-[#f2f2f2] w-[36px] h-[36px] hover:bg-[#0000001f] transition-all duration-100 items-center justify-center flex rounded-[6px]">
                            <ShareProfile></ShareProfile>
                        </button>
                    </div>
                    <div className="flex gap-[20px]">
                        <div className="flex gap-1 items-center">
                            <div className="font-bold text-base leading-5">{myInfo.followings_count || 0}</div>
                            <div className="text-base font-normal leading-5 text-[#857a83]">Following</div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="font-bold text-base leading-5">{myInfo.followers_count || 0}</div>
                            <div className="text-base font-normal leading-5 text-[#857a83]">Followers</div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="font-bold text-base leading-5">{myInfo.likes_count || 0}</div>
                            <div className="text-base font-normal leading-5 text-[#857a83]">Likes</div>
                        </div>
                    </div>
                    <div className="text-start leading-5 whitespace-pre-line max-w-[600px] font-normal">{myInfo.bio || 'No bio yet.'}</div>
                </div>
            </div>
            <div>
                <div className="flex flex-row mt-8 relative">
                    <div
                        className="absolute bottom-0 h-[2px] bg-black transition-transform duration-300 ease-out"
                        style={{
                            width: "146px",
                            transform: `translateX(${["Videos", "Reposts", "Favorites", "Liked"].indexOf(activeCity) * 146}px)`
                        }}
                    />
                    <Button
                        leftIcon={<ProfileLeftVideoIcon></ProfileLeftVideoIcon>}
                        className={`w-[146px] flex items-center justify-center font-semibold px-8 text-center cursor-pointer gap-1 py-2 text-[18px] leading-6 text-[#161823] ${activeCity === 'Videos' ? 'active ' : ''}`}
                        onClick={() => handleChangeTab('Videos')}
                    >Videos</Button>
                    <Button
                        leftIcon={<ProfileLeftRepostsIcon></ProfileLeftRepostsIcon>}
                        className={`w-[146px] flex items-center justify-center font-semibold px-8 text-center cursor-pointer gap-1 py-2 text-[18px] leading-6 text-[#161823] ${activeCity === 'Reposts' ? 'active ' : ''}`}
                        onClick={() => handleChangeTab('Reposts')}>Reposts</Button>
                    <Button
                        leftIcon={<ProfileLeftFavoritesIcon></ProfileLeftFavoritesIcon>}
                        className={`w-[146px] flex items-center justify-center font-semibold px-8 text-center cursor-pointer gap-1 py-2 text-[18px] leading-6 text-[#161823] ${activeCity === 'Favorites' ? 'active ' : ''}`}
                        onClick={() => handleChangeTab('Favorites')}>Favorites</Button>
                    <Button
                        leftIcon={<ProfileLeftLikedIcon></ProfileLeftLikedIcon>}
                        className={`w-[146px] flex items-center justify-center font-semibold px-8 text-center cursor-pointer gap-1 py-2 text-[18px] leading-6 text-[#161823] ${activeCity === 'Liked' ? 'active ' : ''}`}
                        onClick={() => handleChangeTab('Liked')}>Liked</Button>
                </div>

                <div id="Videos" className={`${activeCity === 'Videos' ? '' : 'hidden'}`}>
                    <h2>Videos</h2>
                    <p>London is the capital city of England.</p>
                </div>

                <div id="Reposts" className={`${activeCity === 'Reposts' ? '' : 'hidden'}`}>
                    <h2>Paris</h2>
                    <p>Paris is the capital of France.</p>
                </div>

                <div id="Favorites" className={`${activeCity === 'Favorites' ? '' : 'hidden'}`}>
                    <h2>Favorites</h2>
                    <p>Favorites is the capital of Japan.</p>
                </div>
                <div id="Liked" className={`${activeCity === 'Liked' ? '' : 'hidden'}`}>
                    <h2>Liked</h2>
                    <p>Favorites is the capital of Japan.</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;