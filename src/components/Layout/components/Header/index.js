// import Tippy from "@tippyjs/react";
import * as MdIcon from "react-icons/md";
import ava from "~/images/ava.jpg"
import { useEffect, useMemo, useState } from "react";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import HeaderTippy from '@tippyjs/react/headless';
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { AiFillTikTok } from "react-icons/ai";
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
                }
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

function Header() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    const handleResetInput = () => {
        setInputValue('')
    }

    const [searchResult, setSearchInput] = useState([])
    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchInput([])
        }, 0)
        return () => clearTimeout(timer)
    })
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    }

    const currentUser = true
    const userMenu = ([
        {
            icon: <MdIcon.MdOutlinePerson />,
            title: "View profile",
            to: '/profile'

        },
        {
            icon: <AiFillTikTok />,
            title: "Get coins",
            to: '/coins'
        },
        {
            icon: <MdIcon.MdOutlineSettings />,
            title: "Settings",
            to: '/settings'

        },
        ...MENU_ITEM,
        {
            icon: <MdIcon.MdLogin />,
            title: "Log out",
            to: '/logout',
            seperate: true,

        }
    ])

    return (
        <div className=" w-full h-[60px] flex px- border-header">
            <div div className="w-full h-full flex flex-row justify-between text-center items-center px-[16px] pr-[24px]" >
                <svg xmlns="http://www.w3.org/2000/svg" width="118" height="42" fill="currentColor" alt="TikTok">
                    <path fill="#25F4EE" d="M9.875 16.842v-1.119A9 9 0 0 0 8.7 15.64c-4.797-.006-8.7 3.9-8.7 8.708a8.7 8.7 0 0 0 3.718 7.134A8.68 8.68 0 0 1 1.38 25.55c0-4.737 3.794-8.598 8.495-8.707"></path><path fill="#25F4EE" d="M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a7 7 0 0 1-.11-1.202h-4.726l-.006 18.969a3.98 3.98 0 0 1-3.967 3.829 3.9 3.9 0 0 1-1.846-.46 3.95 3.95 0 0 0 3.22 1.662m13.905-16.36v-1.055a6.5 6.5 0 0 1-3.583-1.068 6.57 6.57 0 0 0 3.583 2.123"></path><path fill="#FE2C55" d="M20.409 11.044a6.54 6.54 0 0 1-1.616-4.316h-1.265a6.56 6.56 0 0 0 2.88 4.316M8.706 20.365a3.98 3.98 0 0 0-3.973 3.976c0 1.528.869 2.858 2.134 3.523a3.94 3.94 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.409 0 .805.07 1.175.185v-4.833a9 9 0 0 0-1.175-.083c-.07 0-.134.006-.204.006v3.708a4 4 0 0 0-1.176-.185"></path><path fill="#FE2C55" d="M23.992 13.166v3.676c-2.453 0-4.727-.786-6.58-2.116v9.622c0 4.8-3.902 8.713-8.706 8.713a8.67 8.67 0 0 1-4.988-1.579 8.7 8.7 0 0 0 6.368 2.781c4.797 0 8.707-3.906 8.707-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73q-.72-.002-1.38-.148"></path><path fill="black" d="M17.413 24.348v-9.622a11.25 11.25 0 0 0 6.58 2.116v-3.676a6.57 6.57 0 0 1-3.584-2.123 6.6 6.6 0 0 1-2.888-4.315H14.06l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83A3.99 3.99 0 0 1 6.86 27.87a3.99 3.99 0 0 1-2.133-3.523A3.98 3.98 0 0 1 8.7 20.372c.409 0 .805.07 1.175.185v-3.708c-4.701.103-8.495 3.964-8.495 8.701 0 2.29.888 4.373 2.338 5.933a8.67 8.67 0 0 0 4.988 1.58c4.798 0 8.707-3.913 8.707-8.714m12.635-11.17h14.775l-1.355 4.232h-3.832v15.644h-4.778V17.41l-4.804.006zm38.984 0h15.12l-1.355 4.232h-4.17v15.644h-4.785V17.41l-4.804.006zM45.73 19.502h4.733v13.553h-4.708zm6.617-6.374h4.733v9.257l4.689-4.61h5.646l-5.934 5.76 6.644 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236H52.34V13.128zm50.143 0h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734zm-54.397 4.826a2.384 2.384 0 0 0 2.382-2.384 2.384 2.384 0 1 0-2.382 2.384"></path><path fill="#25F4EE" d="M83.545 24.942a8.11 8.11 0 0 1 7.473-8.087 9 9 0 0 0-.709-.026c-4.478 0-8.106 3.631-8.106 8.113s3.628 8.113 8.106 8.113c.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087"></path><path fill="#FE2C55" d="M92.858 16.83c-.217 0-.505.012-.716.025a8.11 8.11 0 0 1 7.468 8.087 8.11 8.11 0 0 1-7.468 8.087c.211.02.499.026.716.026 4.478 0 8.106-3.631 8.106-8.113s-3.628-8.113-8.106-8.113"></path><path fill="black" d="M91.58 28.887a3.94 3.94 0 0 1-3.94-3.945 3.94 3.94 0 1 1 7.882 0c0 2.18-1.77 3.945-3.942 3.945m0-12.058c-4.477 0-8.106 3.631-8.106 8.113s3.629 8.113 8.106 8.113 8.106-3.631 8.106-8.113-3.628-8.113-8.106-8.113"></path>
                </svg>

                <div className="w-[516px] h-[46px] px-[8px] min-w-[200px]">
                    <div className="relative w-full h-full">
                        <HeaderTippy
                            interactive
                            visible={searchResult.length > 0}
                            render={attrs => (
                                <div className="w-[500px] items-start flex" tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <h4>account</h4>
                                        <AccountItem></AccountItem>
                                        <AccountItem></AccountItem>
                                        <AccountItem></AccountItem>
                                    </PopperWrapper>

                                </div>
                            )}>
                            <div className="bg-[#f1f1f2] flex w-full h-full px-[16px] py-[12px] overflow-hidden rounded-[92px] focus-within:border focus-within:border-[#16182333] group ">
                                <input
                                    type="text"
                                    placeholder="Search accounts"
                                    className="w-full bg-transparent outline-none text-base leading-5"
                                    value={inputValue}
                                    onChange={handleChange} />
                                {inputValue && <svg width="16" data-e2e="" height="16" viewBox="0 0 48 48" fill="rgba(22, 24, 35, .34)" xmlns="http://www.w3.org/2000/svg" className="mx-3" onClick={handleResetInput}><path className="text-[30px]" fill-rule="evenodd" clip-rule="evenodd" d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z"></path></svg>}
                                <span className="w-[1px] h-[28px] my-[-3px] bg-[#1618231f]"></span>

                                <button className="w-[54px] h-[46px] py-[11px] pr-[16px] pl-[12px] mr-[-16px] my-[-12px] group-hover:bg-[#1618230f]">
                                    <MdIcon.MdOutlineSearch className="text-[25px] text-[#93949a] group-hover:text-black" />
                                </button>

                            </div>
                        </HeaderTippy>
                    </div>
                </div>


                <div className="flex gap-5 items-center justify-center">
                    {currentUser ? (
                        <>
                            <button className="flex gap-3 w-[110px] h-[36px] items-center justify-center border border-[#1618231f] hover:bg-[#16182308] cursor-pointer">
                                <MdIcon.MdAdd className="text-[20px]" />
                                <span>Upload</span>
                            </button>
                            <Tippy content="Inbox">
                                <button className="bg-transparent flex"><MdIcon.MdOutlineMarkUnreadChatAlt className="text-[30px] text-[#494a4e] cursor-pointer" /></button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>

                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {
                            currentUser ? (
                                <img src={ava} alt="" className="w-[32px] h-[32px] rounded-[90px] cursor-pointer" />
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
