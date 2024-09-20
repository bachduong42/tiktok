import PropTypes from 'prop-types';
import Image from '../Image';
import ava from "~/assets/images/ava.jpg"
import { CheckFollow } from '../Icons/Icons';
function AccountItem() {
    return (
        <div className='flex gap-3 p-2 flex-row items-center rounded-[4px] bg-white hover:bg-[#16182308]'>
            <Image src={ava} alt={ava} className="w-[32px] h-[32px] rounded-[90px]"></Image>
            <div className='flex flex-col items-start'>
                <div className='flex gap-1'>
                    <div className='text-[#161823] font-bold text-base mt-[-2px] leading-5 max-w-[145px] overflow-hidden whitespace-nowrap'>byabya42</div>
                    <CheckFollow></CheckFollow>
                </div>
                <div className='text-[#161823bf] text-[12px] leading-[15px] max-w-[145px] text-ellipsis whitespace-nowrap'>Bach Duong</div>
            </div>
        </div>
    );
}
AccountItem.propTypes = {

}
export default AccountItem;