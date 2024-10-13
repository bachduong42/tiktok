import { useCallback, useEffect, useState } from "react";
import VideoCard from "~/components/VideoList/VideoCard";
import { getFollowingList } from "~/services/follow";
import { getUserVideos } from "~/services/getVideo";
import { likeVideo, unLikeVideo } from "~/services/like";

function Following() {
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));
    const fetchAccounts = useCallback(async () => {
        setLoading(true);
        let allAccounts = [];
        let page = 1;
        let hasMore = true;
        try {
            while (hasMore) {
                const accountData = await getFollowingList(page);

                if (accountData.length > 0) {
                    allAccounts = [...allAccounts, ...accountData];
                    page += 1;
                } else {
                    hasMore = false;
                }
            }
            if (allAccounts.length === 0) return;
            let videosList = [];
            for (const acc of allAccounts) {
                const userVideos = await getUserVideos(acc.id);
                videosList = [...videosList, ...userVideos];
            }
            setVideos(videosList);
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAccounts();
    }, [fetchAccounts]);



    const handleLikeToggle = async (videoId, isLiked) => {
        try {
            let updatedVideo;
            if (isLiked) {
                updatedVideo = await unLikeVideo(videoId);
            } else {
                updatedVideo = await likeVideo(videoId);
            }
            setVideos((prevVideos) =>
                prevVideos.map((video) =>
                    video.id === videoId
                        ? { ...video, is_liked: updatedVideo.is_liked, likes_count: updatedVideo.likes_count }
                        : video
                )
            );

        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };


    return (
        <div className="w-full grid grid-cols-1 gap-[50px] justify-items-center ">
            {videos.map((video) => (
                <div className="video-card w-full justify-center flex" key={video.id} >
                    <VideoCard
                        isLogin={isLogin}
                        video={video}
                        onLikeToggle={() => handleLikeToggle(video.id, video.is_liked)}>
                    </VideoCard>
                </div>
            ))}
        </div>
    );
}

export default Following;