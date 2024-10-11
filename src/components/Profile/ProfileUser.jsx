import { useEffect, useState } from "react";
import noImage from "../../assets/images/noimage.jpg"
import Button from "~/components/Button";
import { LockIcon, NoContentIcon, ProfileLeftFavoritesIcon, ProfileLeftLikedIcon, ProfileLeftRepostsIcon, ProfileLeftVideoIcon, SettingIcon, ShareProfile } from "~/components/Icons/Icons";
import EditMyProfile from "./EditMyProfile";
import { MdMoreHoriz } from "react-icons/md";
import { getUserVideos } from "~/services/getVideo";
import VideoExploreCard from "../VideoList/VideoExploreCard";

function ProfileUser({ myInfo, profile }) {
    const [videos, setVideos] = useState([])
    const [openEditProfile, setOpenEditProfile] = useState(false)
    const userAvatar = myInfo && myInfo.avatar && myInfo.avatar !== 'https://files.fullstack.edu.vn/f8-tiktok/'
        ? myInfo.avatar
        : noImage;
    const [activeCity, setActiveCity] = useState("Videos");
    const handleChangeTab = (cityName) => {
        setActiveCity(cityName);
    }
    const fetchVideos = async () => {
        try {
            console.log(myInfo.id)
            const videoData = await getUserVideos(myInfo.id);
            setVideos(videoData.data);
            console.log(videoData.data)
        } catch (error) {
            console.error("Failed to fetch videos:", error);
        } finally {

        }
    };

    useEffect(() => {
        fetchVideos();
    }, [myInfo.id]);

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
                        {profile ? (
                            <>
                                <Button primary>Follow</Button>
                                <Button className="bg-[#f2f2f2] w-[136px] h-[36px] font-semibold hover:bg-[#0000001f] transition-all duration-100 flex justify-center">Message</Button>
                                <button className="bg-[#f2f2f2] w-[36px] h-[36px] hover:bg-[#0000001f] transition-all duration-100 items-center justify-center flex rounded-[6px]">
                                    <ShareProfile></ShareProfile>
                                </button>
                                <button className="bg-[#f2f2f2] w-[36px] h-[36px] hover:bg-[#0000001f] transition-all duration-100 items-center justify-center flex rounded-[6px]">
                                    <MdMoreHoriz />
                                </button>
                            </>) :
                            (
                                <>
                                    <Button primary onClick={() => setOpenEditProfile(true)}>Edit profile</Button>
                                    {openEditProfile && <EditMyProfile onClose={() => setOpenEditProfile(false)}></EditMyProfile>}
                                    <Button className="bg-[#f2f2f2] w-[136px] h-[36px] font-semibold hover:bg-[#0000001f] transition-all duration-100 flex justify-center">Promote post</Button>
                                    <button className="bg-[#f2f2f2] w-[36px] h-[36px] hover:bg-[#0000001f] transition-all duration-100 items-center justify-center flex rounded-[6px]">
                                        <SettingIcon></SettingIcon>
                                    </button>
                                    <button className="bg-[#f2f2f2] w-[36px] h-[36px] hover:bg-[#0000001f] transition-all duration-100 items-center justify-center flex rounded-[6px]">
                                        <ShareProfile></ShareProfile>
                                    </button>
                                </>
                            )
                        }

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
                <div className="w-full justify-between flex">
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
                </div>

                <div id="Videos" className={`${activeCity === 'Videos' ? '' : 'hidden'}`}>
                    {videos.length > 0 ?
                        (<div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[30px] justify-items-center mt-5">
                            {videos.map((video) => (
                                <div className="video-card w-full justify-center flex" key={video.id} >
                                    <VideoExploreCard video={video}></VideoExploreCard>
                                </div>
                            ))}
                        </div>) : (
                            <div className="w-full flex flex-col justify-center items-center mt-16">
                                <div className="flex justify-center">
                                    <div className="w-[92px] h-[92px] rounded-full bg-[#f8f8f8] flex justify-center items-center">
                                        <NoContentIcon />
                                    </div>
                                </div>
                                <span className="text-2xl mt-6 leading-8 display-text font-bold">No content</span>
                                <span>This user has not published any videos.</span>
                            </div>)}
                </div>

                <div id="Reposts" className={`${activeCity === 'Reposts' ? '' : 'hidden'}`}>
                    {/* {profile ?
                        ( */}
                    <div className="w-full flex flex-col justify-center items-center mt-16">
                        <div className="flex justify-center">
                            <div className="w-[92px] h-[92px] rounded-full bg-[#f8f8f8] flex justify-center items-center">
                                <NoContentIcon />
                            </div>
                        </div>
                        <span className="text-2xl mt-6 leading-8 display-text font-bold">This user's reposts videos are private</span>
                        <span>Videos reposts by {myInfo.nickname} are currently hidden</span>
                    </div>
                    {/* ) :
                        (
                            <></>
                        )} */}
                </div>

                <div id="Favorites" className={`${activeCity === 'Favorites' ? '' : 'hidden'}`}>
                    {profile ?
                        (
                            <div className="w-full flex flex-col justify-center items-center mt-16">
                                <div className="flex justify-center">
                                    <LockIcon />
                                </div>
                                <span className="text-2xl mt-6 leading-8 display-text font-bold">This user's favorites videos are private</span>
                                <span>Videos favorites by {myInfo.nickname} are currently hidden</span>
                            </div>
                        ) :
                        (
                            <></>
                        )}
                </div>
                <div id="Liked" className={`${activeCity === 'Liked' ? '' : 'hidden'}`}>
                    {profile ?
                        (
                            <div className="w-full flex flex-col justify-center items-center mt-16">
                                <div className="flex justify-center"> <LockIcon /></div>
                                <span className="text-2xl mt-6 leading-8 display-text font-bold">This user's liked videos are private</span>
                                <span>Videos liked by {myInfo.nickname} are currently hidden</span>
                            </div>
                        ) :
                        (
                            <></>
                        )}
                </div>
            </div>
        </div>
    );
}

export default ProfileUser;