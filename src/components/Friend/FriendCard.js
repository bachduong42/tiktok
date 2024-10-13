import Button from "../Button";

function FriendCard({ account }) {
    return (
        <div className="w-full max-w-[226px] h-[302px] rounded-lg mb-[18px] block float-left relative cursor-pointer">
            <img src={account.avatar} alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <div className="absolute bottom-0 flex flex-col justify-center h-1/2 items-center text-center w-full gap-1 pb-5">
                <img src={account.avatar} alt="" className="w-[48px] h-[48px] rounded-full" />
                <span className="text-[18px] leading-6 text-white font-bold w-full">{account.first_name + ' ' + account.last_name}</span>
                <span className="text-[14px] leading-4 text-white font-semibold w-full">{account.nickname}</span>
                <Button primary>Follow</Button>
            </div>
        </div>
    );
}

export default FriendCard;