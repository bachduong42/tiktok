import { useCallback, useEffect, useState } from "react";
import { getVideoList } from "~/services/getVideo"
import VideoCard from "./VideoCard";
import VideoExploreCard from "./VideoExploreCard";

function VideoList({ path, explore }) {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

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

    return (
        <div className={`w-full grid  ${explore ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[30px]' : 'grid-cols-1 gap-[50px]'} justify-items-center`}>
            {
                videos.map((video) => (
                    <div className="video-card w-full justify-center flex" key={video.id} >
                        {explore ? <VideoExploreCard video={video}></VideoExploreCard> : <VideoCard video={video}></VideoCard>}
                    </div>
                ))
            }
        </div>
    );
}

export default VideoList;