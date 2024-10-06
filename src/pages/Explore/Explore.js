import VideoList from "~/components/VideoList/VideoList";

function Explore() {
    return (

        <div className="w-full flex flex-col px-[48px] ">
            <div className="flex gap-4 pt-[28px] pb-[16px]">
                <button className="flex items-center justify-center bg-black text-white rounded-lg text-[17px] cursor-pointer px-3 h-[42px]">All</button>
                <button className="flex items-center justify-center bg-[#1618230f] text-[#161823] rounded-lg text-[17px] cursor-pointer px-3 h-[42px]">Singing & Dancing</button>
                <button className="flex items-center justify-center bg-[#1618230f] text-[#161823] rounded-lg text-[17px] cursor-pointer px-3 h-[42px]">Comedy</button>
                <button className="flex items-center justify-center bg-[#1618230f] text-[#161823] rounded-lg text-[17px] cursor-pointer px-3 h-[42px]">Sports</button>
            </div>
            <VideoList path='for-you' explore></VideoList>
        </div>
    );
}

export default Explore;