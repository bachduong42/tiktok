import { useCallback, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { getFollowingList } from "~/services/follow";
import AccountFollowingItem from "../AccountItem/AccountFollowingItem";

function ModalFollowingAccount({ onClose, user }) {
    const [account, setAccounts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchAccounts = useCallback(async () => {
        setLoading(true);
        let allAccounts = [];
        let page = 1;
        let hasMore = true;
        try {
            while (hasMore) {
                const accountData = await getFollowingList(page);
                if (accountData.length > 0) {
                    allAccounts = [...allAccounts, ...accountData];
                    page += 1;
                } else {
                    hasMore = false;
                }
            }
            setAccounts(allAccounts);
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }, []);


    useEffect(() => {
        fetchAccounts();
    }, [fetchAccounts]);
    const handleUnFollow = (accountId) => {
        setAccounts((prevAccounts) =>
            prevAccounts.filter((acc) => acc.id !== accountId)
        );
    };
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-500"></div>
            <div
                className="fixed inset-0 flex w-full h-screen justify-center items-center text-center z-1000"
                onClick={onClose}
            >
                <div
                    className="w-[560px] h-[550px] border-2 rounded-xl shadow-xl bg-white pt-2 flex flex-col items-center flex-grow-0 flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between w-full px-6 pt-3 pb-3 border-b-2 ">
                        <div className="text-[24px] font-bold text-center">{user.nickname}</div>
                        <MdClose
                            onClick={onClose}
                            className="bg-[#16182308] text-[25px] rounded-[90px] cursor-pointer"
                        />
                    </div>
                    <div className="px-6 w-full flex flex-col pt-3 h-[470px] overflow-y-auto">
                        {account.map((acc) => (
                            <AccountFollowingItem key={acc.id} acc={acc} unFollow={handleUnFollow}></AccountFollowingItem>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFollowingAccount;