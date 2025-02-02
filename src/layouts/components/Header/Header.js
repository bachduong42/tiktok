// import Tippy from "@tippyjs/react";
import * as MdIcon from "react-icons/md";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { AiFillTikTok } from "react-icons/ai";
import { InboxIcon, UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";
import { Link } from "react-router-dom";
import config from "~/config"
import noImages from "~/assets/images/noimage.jpg"
import Search from "../Search/Search";
import { useContext, useEffect, useState } from "react";
import AuthModal from "~/components/Authentication";
import { UserContext } from "~/contexts/UserContext";
import { SendIcon } from "~/components/Icons/Icons";
function Header() {
    const { user, logout } = useContext(UserContext);
    const isLogin = localStorage.getItem('isLogin')
    // console.log(isLogin)
    useEffect(() => {
        if (user) {
            // console.log("User has changed:", user.nickname);
        }
    }, [user]);

    // console.log("user", user)
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            case 'logout':
                if (menuItem.action) {
                    menuItem.action();
                }
                break;
            default:

        }
    }

    const [login, setLogin] = useState(false);


    const handleLogin = () => {
        setLogin(true);
    }
    const handleClose = () => {
        setLogin(false)
    }

    const handleLogout = () => {
        console.log("log out success")
        logout();
        window.location.reload();
    };
    const MENU_ITEM = [
        {
            icon: <MdIcon.MdOutlineHome />,
            title: "Tools for creators",


        },
        {
            icon: <MdIcon.MdLanguage />,
            title: "Vietnamese",
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'en',
                        title: 'English'
                    },
                    {
                        code: 'vi',
                        title: 'Vietnamese'
                    },
                ]
            }

        },
        {
            icon: <MdIcon.MdHelpOutline />,
            title: "Feedback and help",
        },
        {
            icon: <MdIcon.MdNightsStay />,
            title: "Mode",
        }
    ]

    const userMenu = ([
        {
            icon: <MdIcon.MdOutlinePerson />,
            title: "View profile",
            to: '/my-profile'

        },
        {
            icon: <AiFillTikTok />,
            title: "Get coins",
            // to: '/coins'
        },
        {
            icon: <MdIcon.MdOutlineSettings />,
            title: "Settings",
            // to: '/settings'

        },
        ...MENU_ITEM,
        {
            icon: <MdIcon.MdLogin />,
            title: "Log out",
            seperate: true,
            isLogout: true,
            action: handleLogout
        }
    ])

    return (
        <div className=" w-full h-[60px] flex border-header fixed bg-white z-20 top-0 left-0">
            <div div className="w-full h-full flex flex-row justify-between text-center items-center px-[16px] pr-[24px]" >
                <Link to={config.routes.home} className="cursor-pointer w-[300px]" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="118" height="42" fill="currentColor" alt="TikTok">
                        <path fill="#25F4EE" d="M9.875 16.842v-1.119A9 9 0 0 0 8.7 15.64c-4.797-.006-8.7 3.9-8.7 8.708a8.7 8.7 0 0 0 3.718 7.134A8.68 8.68 0 0 1 1.38 25.55c0-4.737 3.794-8.598 8.495-8.707"></path><path fill="#25F4EE" d="M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a7 7 0 0 1-.11-1.202h-4.726l-.006 18.969a3.98 3.98 0 0 1-3.967 3.829 3.9 3.9 0 0 1-1.846-.46 3.95 3.95 0 0 0 3.22 1.662m13.905-16.36v-1.055a6.5 6.5 0 0 1-3.583-1.068 6.57 6.57 0 0 0 3.583 2.123"></path><path fill="#FE2C55" d="M20.409 11.044a6.54 6.54 0 0 1-1.616-4.316h-1.265a6.56 6.56 0 0 0 2.88 4.316M8.706 20.365a3.98 3.98 0 0 0-3.973 3.976c0 1.528.869 2.858 2.134 3.523a3.94 3.94 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.409 0 .805.07 1.175.185v-4.833a9 9 0 0 0-1.175-.083c-.07 0-.134.006-.204.006v3.708a4 4 0 0 0-1.176-.185"></path><path fill="#FE2C55" d="M23.992 13.166v3.676c-2.453 0-4.727-.786-6.58-2.116v9.622c0 4.8-3.902 8.713-8.706 8.713a8.67 8.67 0 0 1-4.988-1.579 8.7 8.7 0 0 0 6.368 2.781c4.797 0 8.707-3.906 8.707-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73q-.72-.002-1.38-.148"></path><path fill="black" d="M17.413 24.348v-9.622a11.25 11.25 0 0 0 6.58 2.116v-3.676a6.57 6.57 0 0 1-3.584-2.123 6.6 6.6 0 0 1-2.888-4.315H14.06l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83A3.99 3.99 0 0 1 6.86 27.87a3.99 3.99 0 0 1-2.133-3.523A3.98 3.98 0 0 1 8.7 20.372c.409 0 .805.07 1.175.185v-3.708c-4.701.103-8.495 3.964-8.495 8.701 0 2.29.888 4.373 2.338 5.933a8.67 8.67 0 0 0 4.988 1.58c4.798 0 8.707-3.913 8.707-8.714m12.635-11.17h14.775l-1.355 4.232h-3.832v15.644h-4.778V17.41l-4.804.006zm38.984 0h15.12l-1.355 4.232h-4.17v15.644h-4.785V17.41l-4.804.006zM45.73 19.502h4.733v13.553h-4.708zm6.617-6.374h4.733v9.257l4.689-4.61h5.646l-5.934 5.76 6.644 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236H52.34V13.128zm50.143 0h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734zm-54.397 4.826a2.384 2.384 0 0 0 2.382-2.384 2.384 2.384 0 1 0-2.382 2.384"></path><path fill="#25F4EE" d="M83.545 24.942a8.11 8.11 0 0 1 7.473-8.087 9 9 0 0 0-.709-.026c-4.478 0-8.106 3.631-8.106 8.113s3.628 8.113 8.106 8.113c.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087"></path><path fill="#FE2C55" d="M92.858 16.83c-.217 0-.505.012-.716.025a8.11 8.11 0 0 1 7.468 8.087 8.11 8.11 0 0 1-7.468 8.087c.211.02.499.026.716.026 4.478 0 8.106-3.631 8.106-8.113s-3.628-8.113-8.106-8.113"></path><path fill="black" d="M91.58 28.887a3.94 3.94 0 0 1-3.94-3.945 3.94 3.94 0 1 1 7.882 0c0 2.18-1.77 3.945-3.942 3.945m0-12.058c-4.477 0-8.106 3.631-8.106 8.113s3.629 8.113 8.106 8.113 8.106-3.631 8.106-8.113-3.628-8.113-8.106-8.113"></path>
                    </svg>
                </Link>

                <div className="w-[516px] h-[46px] px-[8px] min-w-[200px]">
                    <div className="relative w-full h-full">
                        <Search></Search>
                    </div>
                </div>


                <div className="flex gap-5 items-center justify-center">
                    {user ? (
                        <>
                            <Button to={config.routes.upload} className="flex gap-3 w-[110px] h-[36px] items-center justify-center border border-[#1618231f] hover:bg-[#16182308] cursor-pointer">
                                <UploadIcon></UploadIcon>
                            </Button>
                            <Tippy content="Messages">
                                <button className="bg-transparent flex"><SendIcon className="cursor-pointer"></SendIcon></button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className="bg-transparent flex"><InboxIcon className="cursor-pointer"></InboxIcon></button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                onClick={handleLogin}
                                primary>Log in</Button>
                            {login && <AuthModal onClose={handleClose}></AuthModal>}
                        </>

                    )}
                    <Menu items={isLogin ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {
                            user ? (
                                <Image src={user.avatar || noImages} alt="" className="w-[32px] h-[32px] rounded-[90px] cursor-pointer" />
                            ) : (

                                <MdIcon.MdMoreVert className="flex text-[23px] text-[#5f6068] cursor-pointer" />
                            )
                        }
                    </Menu>

                </div>
            </div>

        </div>

    );
}

export default Header
