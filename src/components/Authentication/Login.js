import { useContext, useState } from "react";
import * as FaIcon from "react-icons/fa";
import Button from "../Button";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";
import loginService from "~/services/loginService";
import { UserContext } from "~/contexts/UserContext";
import getCurrentUser from "~/services/getCurrentUser";

function Login({ onClose, onToggle }) {
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(UserContext);
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('')
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
    const handleCheckEmail = () => {
        if (!email) setEmailError("Email không được để trống");
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            setEmailError("Email không hợp lệ");
        else setEmailError("");
    };
    const handleCheckPass = () => {
        if (!password) setPassError("Password không được để trống");
        else if (password.length < 6) setPassError("Password phải có ít nhấT 6 ký tự");
        else setPassError("");
    };
    const handleShow = () => {
        setShowPass(!showPass)
    }

    const handleLogin = async (e) => {
        if (!email) {
            setEmailError("Email không được để trống");
            return
        }
        if (!password) {
            setPassError("Password không được để trống");
            return
        }
        try {
            const response = await loginService(email, password);
            console.log('Login success:', response);
            const token = response.meta.token;
            localStorage.setItem('token', token);
            const user = await getCurrentUser();
            login(user)
            window.location.reload()
            console.log("token:", token);
            console.log("Đăng nhập thành công");
            handleClose();
            toast.success("Login successful", {
                autoClose: 1000
            });

        } catch (error) {
            if (error.response && error.response.data) {
                const { errors } = error.response.data;
                if (errors && errors["Auth.InvalidCredentials"]) {
                    setPassError("Tài khoản hoặc mật khẩu không đúng")
                } else {
                    setPassError("Tài khoản hoặc mật khẩu không đúng")
                }
            } else {
                toast.error("Lỗi kết nối, vui lòng thử lại", {
                    autoClose: 1000
                });
            }
        }
    }
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-500"></div>
            <div
                className="fixed inset-0 flex w-full h-screen justify-center items-center text-center z-1000"
                onClick={handleClose}
            >
                <div
                    className="w-[500px] h-[600px] border-2 border-none rounded-xl shadow-xl stroke-2 bg-white stroke-[#D7D7D7] pt-2 flex flex-col items-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end w-full px-5 pt-5 ">
                        <MdClose
                            onClick={handleClose}
                            className="bg-[#16182308] text-[25px] rounded-[90px] cursor-pointer" />
                    </div>
                    <div className="text-[33px] text-[#161823] w-[370px] font-bold mt-8 mb-6">Log in to TikTok</div>
                    <input
                        required
                        value={email}
                        onChange={handleChangeEmail}
                        type="email"
                        onBlur={handleCheckEmail}
                        className={`flex w-[350px] h-[55px] text-[15px] text-black border  bg-white hover:bg-[#f8f8f8] border-[#d0d1d3] items-center outline-none pl-4   focus-within:border focus-within:border-[#51525c33] rounded-[4px] `}
                        placeholder="Tên đăng nhập..." />
                    <p className="text-red-500 w-[350px] h-[25px] flex justify-start items-center text-[14px] px-2">{emailError}</p>
                    <div className={`relative flex w-[350px] h-[55px] border bg-white hover:bg-[#f8f8f8] items-center pl-4 border-[#d0d1d3] focus-within:border focus-within:border-[#51525c33] rounded-[4px] `}>
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPass ? 'text' : 'password'}
                            className="w-full outline-none bg-transparent text-[15px] "
                            placeholder="Mật khẩu..."
                            onBlur={handleCheckPass}
                        />
                        <div className="absolute right-5" onClick={handleShow}>
                            {!showPass && <FaIcon.FaEye className="cursor-pointer w-[20px] h-[20px] text-[#bbb8b8]" />}
                            {showPass && <FaIcon.FaEyeSlash className="cursor-pointer w-[20px] h-[20px] text-[#bbb8b8]" />}
                        </div>
                    </div>
                    <p className="text-red-500 w-[350px] h-[25px] flex justify-start items-center text-[14px] px-2">{passError}</p>
                    <Button
                        onClick={() => handleLogin()}
                        primary className="w-[350px]  h-[55px] mt-2">Log in</Button>
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