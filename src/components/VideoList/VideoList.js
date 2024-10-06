import { useEffect, useState } from "react";
import getVideoList from "~/services/getVideoList"
import VideoCard from "./VideoCard";

function VideoList({ path }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const videoData = await getVideoList(path, 4);
            setVideos(Object.values(videoData.data));
        }
        fetchData()
            .catch(console.error);
    }, [path])
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        const videoCards = document.querySelectorAll('.video-card');
        videoCards.forEach(card => observer.observe(card));

        return () => {
            videoCards.forEach(card => observer.unobserve(card));
        };
    }, [videos]);
    return (
        <div className="flex flex-col gap-[50px] py-4 ">
            {
                videos.map((video) => (
                    <div className="video-card" key={video.id}>
                        <VideoCard video={video}></VideoCard>
                    </div>
                ))
            }
        </div>
    );
}

export default VideoList;