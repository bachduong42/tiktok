import ava1 from "~/assets/images/hy.jpg"
function AccountItem() {
    return (
        <div className="w-full px-4 py-[9px] flex gap-3 hover:bg-[#162c2408]">
            <img src={ava1} alt="" className="w-[40px] h-[40px] rounded-[90px]" />
            <div className="flex flex-col">
                <div className="text-base font-bold leading-[21px] text-ellipsis whitespace-nowrap">ngockem</div>
                <div className="text-[14px] text-[#16182380]">Ngọc Kem</div>
            </div>
        </div>
    );
}

export default AccountItem;