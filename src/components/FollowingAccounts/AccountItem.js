// import PropTypes from 'prop-types';
import Image from '../Image';
import ava from "~/assets/images/ava.jpg"
import { CheckFollow } from '../Icons/Icons';
function AccountItem({ account }) {
    return (
        <div className='flex gap-3 p-2 flex-row w-full items-center rounded-[4px] bg-white hover:bg-[#16182308]'>
            <Image src={account.avatar} alt={ava} className="w-[32px] h-[32px] rounded-[90px]"></Image>
            <div className='lg:flex hidden flex-col items-start '>
                <div className='flex gap-1'>
                    <div className='text-[#161823] font-bold text-base mt-[-2px] leading-5 max-w-[145px] overflow-hidden whitespace-nowrap'>{account.nickname}</div>
                    <CheckFollow></CheckFollow>
                </div>
                <div className='text-[#161823bf] text-[12px] leading-[15px] max-w-[145px] text-ellipsis whitespace-nowrap'>{account.first_name + ' ' + account.last_name}</div>
            </div>
        </div>
    );
}

export default AccountItem;