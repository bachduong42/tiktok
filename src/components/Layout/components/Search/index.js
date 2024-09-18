import HeaderTippy from '@tippyjs/react/headless';
import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { FaUndo } from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchInput] = useState([])
    const [showResult, setShowResult] = useState(true)
    const inputRef = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchInput([2, 3])
        }, 0)
        return () => clearTimeout(timer)
    })

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setShowResult(false)
    }
    const handleHideResult = () => {
        setShowResult(false)
    }
    return (
        <HeaderTippy
            onClickOutside={handleHideResult}
            interactive
            visible={showResult && searchResult.length > 0}
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
                    ref={inputRef}
                    type="text"
                    placeholder="Search accounts"
                    className="w-full bg-transparent outline-none text-base leading-5"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue &&
                    <svg width="16" data-e2e="" height="16"
                        viewBox="0 0 48 48" fill="rgba(22, 24, 35, .34)" xmlns="http://www.w3.org/2000/svg"
                        className="mx-3"
                        onClick={handleClear}>
                        <path className="text-[30px]" fill-rule="evenodd" clip-rule="evenodd" d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM15.1466 30.7323L21.8788 24.0001L15.1466 17.2679C14.756 16.8774 14.756 16.2442 15.1466 15.8537L15.8537 15.1466C16.2442 14.756 16.8774 14.756 17.2679 15.1466L24.0001 21.8788L30.7323 15.1466C31.1229 14.756 31.756 14.756 32.1466 15.1466L32.8537 15.8537C33.2442 16.2442 33.2442 16.8774 32.8537 17.2679L26.1214 24.0001L32.8537 30.7323C33.2442 31.1229 33.2442 31.756 32.8537 32.1466L32.1466 32.8537C31.756 33.2442 31.1229 33.2442 30.7323 32.8537L24.0001 26.1214L17.2679 32.8537C16.8774 33.2442 16.2442 33.2442 15.8537 32.8537L15.1466 32.1466C14.756 31.756 14.756 31.1229 15.1466 30.7323Z">
                        </path></svg>}
                <FaUndo className="text-[#93949a] pt-1 mr-2 hidden" />
                <span className="w-[1px] h-[28px] my-[-3px] bg-[#1618231f]"></span>

                <button className="w-[54px] h-[46px] py-[11px] pr-[16px] pl-[12px] mr-[-16px] my-[-12px] group-hover:bg-[#1618230f]">
                    <MdIcon.MdOutlineSearch className="text-[25px] text-[#93949a] group-hover:text-black" />
                </button>
            </div>
        </HeaderTippy>
    );
}

export default Search;