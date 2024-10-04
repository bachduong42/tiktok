import { useEffect, useState } from "react";
import getVideoList from "~/services/getVideoList"
import VideoCard from "./VideoCard";

function VideoList({ path }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const videoData = await getVideoList(path, 7);
            setVideos(Object.values(videoData.data));
        }
        fetchData()
            .catch(console.error);
    }, [])

    return (
        <div className="flex flex-col gap-[50px] py-4">
            {
                videos.map((video) => (
                    <VideoCard key={video.id} video={video}></VideoCard>
                ))
            }
        </div>
    );
}

export default VideoList;