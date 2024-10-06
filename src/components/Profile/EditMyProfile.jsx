import { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { UserContext } from "~/contexts/UserContext";
import noImage from "../../assets/images/noimage.jpg"
import { EditProfileIcon } from "../Icons/Icons";
import Button from "../Button";
import { updateProfile } from "~/services/updateProfile";
import { toast } from "react-toastify";
function EditMyProfile({ onClose }) {
    const { user } = useContext(UserContext);
    const [isChange, setIsChange] = useState(false);

    const handleClose = () => {
        onClose();
    };

    const [nickname, setNickname] = useState(user.nickname);
    const [firstName, setFirstName] = useState(user.first_name);
    const [bio, setBio] = useState(user.bio);
    const [avatar, setAvatar] = useState({ url: user.avatar || noImage })
    const handleFileChange = (e) => {
        const [file] = e.target.files;

        if (!file) return;

        const types = ['image/jpeg', 'image/jpg', 'image/png'];
        if (types.includes(file.type)) {
            file.url = URL.createObjectURL(file);
            setAvatar(file);
            setIsChange(true);
        } else {
            toast.error('Định dạng file không hợp lệ!', { autoClose: 3000 });
        }
    };

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(avatar.url);
        };
    }, [avatar]);

    const handleInputChange = (e, setFunction, initialValue) => {
        setFunction(e.target.value);
        setIsChange(e.target.value !== initialValue);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('nickname', nickname);
        formData.append('first_name', firstName);
        formData.append('bio', bio);
        if (avatar.type) formData.append('avatar', avatar);

        const result = await updateProfile(formData);

        console.log(result);
        onClose();
        window.location.reload();
    }
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-500"></div>
            <div
                className="fixed inset-0 flex w-full h-screen justify-center items-center text-center z-1000"
                onClick={handleClose}
            >
                <div
                    className="w-[700px] h-[700px] border-2 rounded-xl shadow-xl bg-white pt-2 flex flex-col items-center flex-grow-0 flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between w-full px-6 pt-6 pb-3 border-b-2 ">
                        <div className="text-[24px] font-semibold">Edit Profile</div>
                        <MdClose
                            onClick={handleClose}
                            className="bg-[#16182308] text-[25px] rounded-[90px] cursor-pointer"
                        />
                    </div>
                    <div className="px-6 w-full border-b-2">
                        <div className="w-full h-[128px] py-4 flex border-b-2">
                            <div className="w-[120px] mr-[24px] text-start text-[#161823 text-base font-semibold leading-6]">Profile photo</div>
                            <div className="w-[224px] relative flex justify-end">
                                <img src={avatar.url} alt="" className="w-[96px] h-[96px] rounded-full" />
                                <div className="absolute bottom-0 right-0">
                                    <div className="w-[32px] h-[32px] bg-white cursor-pointer border border-[#d0d0d3] rounded-full flex items-center justify-center">
                                        <label htmlFor="avatar-upload">
                                            <EditProfileIcon></EditProfileIcon>
                                        </label>
                                        <input
                                            id="avatar-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[167px] py-4 flex border-b-2">
                            <div className="w-[120px] mr-[24px] text-start text-[#161823 text-base font-semibold leading-6]">Username</div>
                            <div className="w-[360px] flex flex-col">
                                <input
                                    value={nickname}
                                    type="text"
                                    onChange={(e) => handleInputChange(e, setNickname, user.nickname)}
                                    className="w-full h-[38px] bg-[#1618230f] text-base leading-6 outline-none py-[7px] px-3 rounded focus-within:bg-[#1618230f] focus-within:border focus-within:border-[#16182333]" />
                                <div className="flex text-[#161823bf] text-[12px] mt-4">
                                    <span>www.tiktok.com/@</span>
                                    <span>{nickname}</span>
                                </div>
                                <div className="flex text-[#161823bf] text-[12px] mt-2 text-start">
                                    Usernames can only contain letters, numbers, underscores, and periods. Changing your username will also change your profile link.
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[97px] py-4 flex border-b-2">
                            <div className="w-[120px] mr-[24px] text-start text-[#161823 text-base font-semibold leading-6]">Name</div>
                            <div className="w-[360px] flex flex-col">
                                <input
                                    placeholder="Your name"
                                    value={firstName}
                                    type="text"
                                    onChange={(e) => handleInputChange(e, setFirstName, user.first_name)}
                                    className="w-full h-[38px] bg-[#1618230f] text-base leading-6 outline-none py-[7px] px-3 rounded focus-within:bg-[#1618230f] focus-within:border focus-within:border-[#16182333]" />

                                <div className="flex text-[#161823bf] text-[12px] mt-2 text-start">
                                    Your nickname can only be changed once every 7 days
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[155px] py-4 flex ">
                            <div className="w-[120px] mr-[24px] text-start text-[#161823 text-base font-semibold leading-6]">Bio</div>
                            <div className="w-[360px] flex flex-col">
                                <textarea
                                    placeholder="Bio"
                                    value={bio}
                                    type="text"
                                    onChange={(e) => handleInputChange(e, setBio, user.bio)}
                                    className="w-full h-[100px] bg-[#1618230f] text-base leading-6 outline-none py-[7px] px-3 rounded focus-within:bg-[#1618230f] focus-within:border focus-within:border-[#16182333]" />

                                <div className="flex text-[#161823bf] text-[12px] mt-2 text-start">
                                    <span>{bio.length}</span>
                                    <span>/80</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end px-6 items-center h-[86px] gap-3">
                        <Button className="w-[96px] h-[36px] border border-[#1618231f] justify-center items-center" onClick={onClose}>Cancel</Button>
                        <Button
                            onClick={handleSubmit}
                            className={`w-[96px] h-[36px] border border-[#1618231f] justify-center cursor-pointer items-center ${!isChange ? 'bg-[#1618231f] text-black' : ''}`} primary={isChange} disabled={!isChange}>Save</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditMyProfile;
