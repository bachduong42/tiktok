import { useCallback, useEffect, useState } from "react";
import FriendCard from "~/components/Friend";
import { suggestUserList } from "~/services/suggestUser";

function Friend() {
    const [accountSuggest, setAccountSuggest] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [perPage] = useState(12);
    const fetchAccounts = useCallback(async (page) => {
        setLoading(true);
        try {
            const accountData = await suggestUserList(page, perPage);
            if (accountData) {
                setAccountSuggest((prevAccounts) => {
                    const newAccounts = [...prevAccounts, ...Object.values(accountData)];
                    const uniqueAccounts = newAccounts.filter((acc, index, self) =>
                        index === self.findIndex((a) => a.id === acc.id)
                    );
                    return uniqueAccounts;
                });
            }
            console.log(accountSuggest)
        } catch (error) {
            console.error("Failed to fetch accounts:", error);

        } finally {
            setLoading(false);
        }
    }, [perPage]);

    useEffect(() => {
        fetchAccounts(page);
    }, [page, fetchAccounts]);

    const handleScroll = useCallback(() => {
        if (loading) return;
        const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
        if (nearBottom) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [loading]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="w-[736px] flex flex-col items-center mx-auto">
            <div className="w-full grid grid-cols-3 justify-items-center  gap-x-2">
                {accountSuggest.map((acc) => (
                    <FriendCard key={acc.id} account={acc}></FriendCard>
                ))}
            </div>
        </div>
    );
}

export default Friend;