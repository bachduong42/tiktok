import { memo, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "~/components/Button";
import CheckBox from "~/components/Checkbox";
import { ReplaceIcon } from "~/components/Icons/Icons";
import config from "~/config";
import { createNewVideo } from "~/services/createVideoService";

function DetailUpload() {
    const location = useLocation();
    const { video } = location.state || {};
    const navigate = useNavigate();
    console.log("re-render");
    const descriptionRef = useRef(null);
    const musicRef = useRef(null);
    const [privacy, setPrivacy] = useState("public");
    const [allows, setAllows] = useState([]);

    const [selectedVideo, setSelectedVideo] = useState(video);
    const [videoUrl, setVideoUrl] = useState("");
    useEffect(() => {
        if (selectedVideo) {
            const newVideoUrl = URL.createObjectURL(selectedVideo);
            setVideoUrl(newVideoUrl);
            return () => {
                URL.revokeObjectURL(newVideoUrl);
            };
        }
    }, [selectedVideo])
    const handleVideoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedVideo(file);
        }
    };
    const handleAllowChange = (permission) => {
        setAllows((prevAllows) =>
            prevAllows.includes(permission)
                ? prevAllows.filter((item) => item !== permission)
                : [...prevAllows, permission]
        );
    };
    const handleDiscard = () => {
        navigate(config.routes.home);
    };
    const handlePostVideo = async () => {
        const formData = new FormData();
        formData.append("description", descriptionRef.current.value);
        if (selectedVideo) {
            console.log(selectedVideo)
            formData.append("upload_file", selectedVideo);
        }
        formData.append("thumbnail_time", 5);
        formData.append("music", musicRef.current.value);
        formData.append("viewable", privacy);
        allows.forEach((allow) => {
            formData.append("allows[]", allow);
        });
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
        try {
            console.log(formData)
            const response = await createNewVideo(formData);

            if (response) {
                toast.success("Upload video successfull");
                navigate(config.routes.home);
            }
        } catch (error) {
            toast.error("The system is currently under maintenance ")
            // console.error('Axios Error:', error);
            // if (error.response) {
            //     console.error('Response error status:', error.response.status);
            //     console.error('Response error data:', error.response.data);

            //     // Log validation errors specifically
            //     if (error.response.data.errors) {
            //         for (const [key, value] of Object.entries(error.response.data.errors)) {
            //             console.error(`${key}: ${value.join(", ")}`); // Log each validation error
            //         }
            //     }
            // } else {
            //     console.error('Error message:', error.message);
            // }
        }

    }
    return (
        <div className="flex w-full h-screen bg-[#f8f8f8] items-center justify-center pt-[90px] pb-[240px] my-0 mx-auto flex-col">
            <div className="w-[80%] h-[90px] bg-white mb-5 rounded-lg mt-[200px]">
                {selectedVideo ? (
                    <div className="py-1">
                        <div className="flex w-full justify-between px-4 items-center">
                            <div className="font-bold text-xl ">{selectedVideo.name}</div>
                            <Button
                                onClick={() => document.getElementById('video-upload').click()}
                                leftIcon={<ReplaceIcon></ReplaceIcon>}
                                className="w-[123px] h-[32px] bg-[#f2f2f2] mt-2">Replace</Button>
                            <input
                                type="file"
                                id="video-upload"
                                accept="video/*"
                                className="hidden"
                                onChange={handleVideoChange}
                            />
                        </div>
                        <div className="flex flex-row gap-2 px-4">
                            <span className=" text-[#0000007a] text-[15px]">Size: </span>
                            <span className="text-[17px] font-bold">{(selectedVideo.size / 1024 / 1024).toFixed(2)} MB</span>

                        </div>
                    </div>
                ) : (
                    <div>No video selected.</div>
                )}
            </div>
            <div className="w-[80%] bg-white mb-2 rounded-lg h-screen text-start px-4 flex gap-3 pt-4 pb-4">
                <div className="w-2/3 h-auto">
                    <div className="flex-col flex gap-3 w-full">
                        <div className="flex flex-col gap-2">
                            <span className="font-medium text-base text-black">Description</span>
                            <textarea
                                ref={descriptionRef}
                                // value={description}
                                // onChange={(event) => setDescription(event.target.value)}
                                name="" id="" className="w-full h-[75px] bg-[#f2f2f2] outline-none px-2 py-1 rounded-md"></textarea>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-medium text-base text-black">Music</span>
                            <input
                                ref={musicRef}
                                // value={nameMusic}
                                // onChange={(event) => setNameMusic(event.target.value)}
                                type="text"
                                className="w-full h-[35px] bg-[#f2f2f2] outline-none px-2 py-1 rounded-md" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-medium text-base">Who can watch this video</span>
                            <select
                                value={privacy}
                                onChange={(event) => setPrivacy(event.target.value)}
                                name="privacy" id="privacy"
                                className="border rounded-md p-2 bg-[#f2f2f2] w-[150px] outline-none">
                                <option value="public">Public</option>
                                <option value="friend">Friend</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-medium text-base">Allow users to:</span>
                            <div className="flex flex-row gap-4">
                                <CheckBox
                                    label="Comment"
                                    name="allowComment"
                                    value="comment"
                                    checked={allows.includes("comment")}
                                    onChange={() => handleAllowChange("comment")}
                                />
                                <CheckBox
                                    label="Duet"
                                    name="allowDuet"
                                    value="duet"
                                    checked={allows.includes("duet")}
                                    onChange={() => handleAllowChange("duet")}
                                />
                                <CheckBox
                                    label="Stitch"
                                    name="allowStitch"
                                    value="stitch"
                                    checked={allows.includes("stitch")}
                                    onChange={() => handleAllowChange("stitch")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-16">
                        <Button primary onClick={handlePostVideo}>Post</Button>
                        <Button
                            onClick={handleDiscard}
                            className="bg-[#f2f2f2] w-[120px] items-center flex justify-center font-bold"
                        >Discard</Button>
                    </div>

                </div>
                <div className="w-1/3 pt-4">
                    {videoUrl && (
                        <video
                            controls
                            className="w-[300px] h-[470px] object-cover flex justify-center items-center mx-auto rounded-md"
                            src={URL.createObjectURL(selectedVideo)}
                            muted
                        />
                    )}
                </div>
            </div>
        </div >
    );
}

export default memo(DetailUpload);