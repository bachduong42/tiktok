import Button from "~/components/Button";
import { UploadIconPage } from "~/components/Icons/Icons";
import upload1 from "~/assets/images/upload1.svg"
import upload2 from "~/assets/images/upload2.svg"
import upload3 from "~/assets/images/upload3.svg"
import upload4 from "~/assets/images/upload4.svg"
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function Upload() {
    const fileInputRef = useRef(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const navigate = useNavigate();
    const handleSelectVideo = () => {
        fileInputRef.current.click();
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedVideo(file);
            navigate('/detailupload', { state: { video: file } });
        }
    };
    return (
        <div className="flex w-full h-full bg-[#f8f8f8] items-center justify-center pt-[90px] flex-col">
            <div className="w-[80%] h-[550px] border-2 flex bg-white flex-col  rounded-[6px] items-center justify-center  gap-1  p-8 mb-8">
                <div
                    onClick={handleSelectVideo}
                    className="w-full h-full border-dashed border-[#00000026] border-[1px] bg-[#f8f8f8] items-center justify-center flex flex-col cursor-pointer rounded-[6px]">
                    <UploadIconPage></UploadIconPage>
                    <div className="font-bold text-[24px]"> {selectedVideo ? selectedVideo.name : "Select video to upload"}</div>
                    <div className="text-[#000000a6] "> {selectedVideo ? <p><strong>Size:</strong> {(selectedVideo.size / 1024 / 1024).toFixed(2)} MB</p> : "Or drag and drop it here"}</div>
                    <div className="flex gap-2">
                        {/* <Button primary className="w-[200px] h-[40px] mt-4">  {selectedVideo ? "Change video" : "Select video"}</Button>
                        {
                            selectedVideo && <Button className="w-[200px] h-[40px] mt-4" outline>Upload</Button>
                        } */}
                        <Button primary className="w-[200px] h-[40px] mt-4">Select video</Button>
                    </div>
                    <input
                        type="file"
                        accept="video/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                    />


                </div>

                <div className="w-full px-8 flex flex-row pt-6">
                    <div className="flex gap-2 w-1/4 text-start">
                        <img src={upload1} alt="" className=" justify-start w-[25px] h-[24px]" />
                        <div className="flex flex-col text-start gap-2">
                            <div className="font-semibold text-base leading-4">Size and duration</div>
                            <div className="text-[#0000007a] text-sm">Maximum size: 10 GB, video duration: 60 minutes.</div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-1/4 text-start">
                        <img src={upload2} alt="" className=" justify-start w-[25px] h-[24px]" />
                        <div className="flex flex-col text-start gap-2">
                            <div className="font-semibold text-base leading-4">File formats</div>
                            <div className="text-[#0000007a] text-sm">Recommended: “.mp4”. Other major formats are supported.</div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-1/4 text-start">
                        <img src={upload3} alt="" className=" justify-start w-[25px] h-[24px]" />
                        <div className="flex flex-col text-start gap-2">
                            <div className="font-semibold text-base leading-4">Video resolutions</div>
                            <div className="text-[#0000007a] text-sm">Minimum resolution: 720p. 2K and 4K are supported.</div>
                        </div>
                    </div>
                    <div className="flex gap-2 w-1/4 text-start">
                        <img src={upload4} alt="" className=" justify-start w-[25px] h-[24px]" />
                        <div className="flex flex-col text-start gap-2">
                            <div className="font-semibold text-base leading-4">Aspect ratios</div>
                            <div className="text-[#0000007a] text-sm">Recommended: 16:9 for landscape, 9:16 for vertical.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] h-[70px] border-2 flex bg-white  rounded-[6px] items-center mb-16 px-8 justify-between">
                <div className="flex flex-col text-start">
                    <div className="font-semibold text-base leading-4">Create high quality videos on CapCut Online</div>
                    <div className="text-[#0000007a] text-sm">Automatically shorten your videos and create videos from scripts with AI-powered features.</div>
                </div>
                <div className="bg-[#0000000d] h-[40px] rounded-[6px] min-w-[108px] px-4 leading-5 font-bold flex items-center justify-center cursor-pointer">Try now</div>
            </div>

        </div>
    );
}

export default Upload;