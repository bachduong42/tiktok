import { MdClose } from "react-icons/md";

function EditMyProfile({ onClose }) {
    const handleClose = () => {
        onClose();
    };

    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-0"></div>
            <div
                className="fixed inset-0 flex w-full h-screen justify-center items-center text-center z-50"
                onClick={handleClose}
            >
                <div
                    className="w-[700px] h-[600px] border-2 rounded-xl shadow-xl bg-white pt-2 flex flex-col items-center flex-grow-0 flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between w-full px-6 pt-6 pb-3">
                        <div className="text-[24px] font-semibold">Edit Profile</div>
                        <MdClose
                            onClick={handleClose}
                            className="bg-[#16182308] text-[25px] rounded-[90px] cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditMyProfile;
