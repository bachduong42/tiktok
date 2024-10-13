import { useCallback, useEffect, useState } from "react";
import { getVideoList } from "~/services/getVideo"
import VideoCard from "./VideoCard";
import VideoExploreCard from "./VideoExploreCard";
import { likeVideo, unLikeVideo } from "~/services/like";
import AuthModal from "../Authentication";


function VideoList({ path, explore }) {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));
    const [showLogin, setShowLogin] = useState(false);
    // console.log(isLogin)
    const fetchVideos = useCallback(async (pageNumber) => {
        setLoading(true);
        try {
            const videoData = await getVideoList(path, pageNumber);
            if (videoData && videoData.data) {
                setVideos((prevVideos) => {
                    const newVideos = [...prevVideos, ...Object.values(videoData.data)];
                    const uniqueVideos = newVideos.filter((video, index, self) =>
                        index === self.findIndex((v) => v.id === video.id)
                    );
                    return uniqueVideos;
                });
            }

        } catch (error) {
            console.error("Failed to fetch videos:", error);
        } finally {
            setLoading(false);
        }
    }, [path]);

    useEffect(() => {
        fetchVideos(page);
    }, [page, fetchVideos]);

    const handleScroll = useCallback(() => {
        if (loading) return;
        const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        if (nearBottom) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [loading]);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
    const handleLikeToggle = async (videoId, isLiked) => {
        if (isLogin == null) {
            setShowLogin(true);
            return;
        }
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
        <>
            <div className={`w-full grid  ${explore ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[30px]' : 'grid-cols-1 gap-[50px]'} justify-items-center`}>
                {
                    videos.map((video) => (
                        <div className="video-card w-full justify-center flex" key={video.id} >
                            {explore ?
                                <VideoExploreCard
                                    isLogin={isLogin}
                                    video={video}
                                    showModalLogin={() => setShowLogin(true)}
                                    onLikeToggle={() => handleLikeToggle(video.id, video.is_liked)}
                                ></VideoExploreCard>
                                :
                                <VideoCard
                                    isLogin={isLogin}
                                    showModalLogin={() => setShowLogin(true)}
                                    video={video}
                                    onLikeToggle={() => handleLikeToggle(video.id, video.is_liked)}>
                                </VideoCard>}
                        </div>
                    ))
                }
                {showLogin && <AuthModal onClose={() => setShowLogin(false)}></AuthModal>}
            </div>

        </>
    );
}

export default VideoList;