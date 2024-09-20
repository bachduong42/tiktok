import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

function FollowingAccounts({ label }) {
    return (
        <div className="flex flex-col items-start">
            <h3 className="text-[#6b6d73] text-[14px] px-[8px] mt-1 mb-[8px] leading-4 font-semibold">{label}</h3>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <AccountItem></AccountItem>
            <p className='text-[#fe2c55] font-semibold text-[14px] leading-[18px]  cursor-pointer mt-2'>See all</p>
        </div>
    );
}


export default FollowingAccounts;