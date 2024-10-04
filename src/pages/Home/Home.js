import VideoList from "~/components/VideoList/VideoList";

function Home() {
    return (
        <div className="flex flex-col w-full items-center relative z-0">
            <VideoList path='for-you'></VideoList>
        </div>
    );
}

export default Home;