import { useState } from "react";
import * as FaIcon from "react-icons/fa";
import Button from "../Button";
import { MdClose } from "react-icons/md";
function Login({ onClose, onToggle }) {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClose = () => {
        setEmail('');
        setPassword('');
        onClose();
    };
    const handleChangeEmail = (e) => {
        const emailValue = e.target.value
        if (!emailValue.startsWith(' ')) {
            setEmail(emailValue)
        }
    }
    const hanldeShow = () => {
        setShowPass(!showPass)
    }

    const handleLogin = () => {

    }
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-0"></div>
            <div
                className="fixed inset-0 flex w-full h-screen justify-center items-center text-center z-50"
                onClick={handleClose}
            >
                <div
                    className="w-[500px] h-[600px] border-2 border-none rounded-xl shadow-xl stroke-2 bg-white stroke-[#D7D7D7] pt-2 flex flex-col items-center gap-y-5"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end w-full px-5 pt-5 ">
                        <MdClose
                            onClick={handleClose}
                            className="bg-[#16182308] text-[25px] rounded-[90px] cursor-pointer" />
                    </div>
                    <div className="text-[33px] text-[#161823] w-[370px] font-bold mt-8 mb-4">Log in to TikTok</div>
                    <input
                        required
                        value={email}
                        onChange={handleChangeEmail}
                        type="text"
                        className={`flex w-[350px] h-[55px] text-[15px] text-black border  bg-white hover:bg-[#f8f8f8] border-[#d0d1d3] items-center outline-none pl-4   focus-within:border focus-within:border-[#51525c33] rounded-[4px] `}
                        placeholder="Tên đăng nhập..." />

                    <div className={`relative flex w-[350px] h-[55px] border bg-white hover:bg-[#f8f8f8] items-center pl-4 border-[#d0d1d3] focus-within:border focus-within:border-[#51525c33] rounded-[4px] `}>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPass ? 'text' : 'password'}
                            className="w-full outline-none bg-transparent text-[15px] "
                            placeholder="Mật khẩu..."
                        />
                        <div className="absolute right-5" onClick={hanldeShow}>
                            {!showPass && <FaIcon.FaEye className="cursor-pointer w-[20px] h-[20px] text-[#bbb8b8]" />}
                            {showPass && <FaIcon.FaEyeSlash className="cursor-pointer w-[20px] h-[20px] text-[#bbb8b8]" />}
                        </div>
                    </div>
                    <Button primary className="w-[350px]  h-[55px] mt-2">Log in</Button>
                    {/* <div className="underline text-[#818080] text-[14px] cursor-pointer hover:text-primary">Quên mật khẩu?</div> */}
                    <div className="text-[12px] text-[#16182380] w-[350px] mt-5">By continuing with an account located in <b>Vietnam</b>, you agree to our <b>Terms of Service</b> and acknowledge that you have read our <b>Privacy Policy</b></div>
                    <div className="flex gap-1 w-full justify-center mt-3">
                        <div className="text-[15px]">Don’t have an account?  </div>
                        <button className="bg-transparent text-[15px] text-[#fe2c55] font-semibold" onClick={onToggle}> Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;