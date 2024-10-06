import { useEffect, useState } from "react";
import getVideoList from "~/services/getVideoList"
import VideoCard from "./VideoCard";
import VideoExploreCard from "./VideoExploreCard";

function VideoList({ path, explore }) {
    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);

    const fetchVideos = async (pageNumber) => {
        setLoading(true);
        try {
            const videoData = await getVideoList(path, pageNumber);
            if (videoData && videoData.data) {
                setVideos(prevVideos => [...prevVideos, ...Object.values(videoData.data)]);
            }
        } catch (error) {
            console.error("Failed to fetch videos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchVideos(page);
    }, [page]);

    const handleScroll = () => {
        if (loading) return;
        const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        if (nearBottom) {
            setPage(prevPage => prevPage + 1);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    return (
        <div className={`w-full grid  ${explore ? 'grid-cols-4 gap-[30px]' : 'grid-cols-1 gap-[50px]'} justify-items-center`}>
            {
                videos.map((video) => (
                    <div className="video-card" key={video.id}>
                        {explore ? <VideoExploreCard video={video}></VideoExploreCard> : <VideoCard video={video}></VideoCard>}
                    </div>
                ))
            }
        </div>
    );
}

export default VideoList;