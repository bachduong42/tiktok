import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
import { useCallback, useEffect, useState } from 'react';
import { suggestUserList } from '~/services/suggestUser';

function FollowingAccounts({ label }) {
    const [accounts, setAccounts] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage] = useState(5);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);


    const fetchAccounts = useCallback(async (page) => {
        setLoading(true);
        try {
            const accountData = await suggestUserList(page, perPage);
            // console.log("data:", accountData)
            if (accountData) {
                setAccounts(prevAccounts => {
                    const newAccounts = [...prevAccounts, ...accountData];
                    const uniqueAccounts = newAccounts.filter((account, index, self) =>
                        index === self.findIndex((a) => a.id === account.id)
                    );
                    return uniqueAccounts;
                });
                // console.log("accounts:", accounts)
                if (accountData.length < perPage) {
                    setHasMore(false);
                }
            }
        } catch (error) {
            console.error("Failed to fetch videos:", error);
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [perPage]);


    useEffect(() => {
        fetchAccounts(page);
    }, [page, fetchAccounts]);

    const handleLoadMore = () => {
        if (!loading && hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };
    return (
        <div className="flex flex-col items-start w-full">
            <h3 className="text-[#6b6d73] text-[14px] px-[8px] mt-1 mb-[8px] leading-4 font-semibold lg:block hidden">{label}</h3>
            {accounts.map((account) => (
                <AccountItem key={account.id} account={account} />
            ))}
            {hasMore ? (
                <p
                    className="text-[#fe2c55] font-semibold text-[14px] leading-[18px] cursor-pointer mt-2"
                    onClick={handleLoadMore}
                >
                    See more
                </p>
            ) : (
                <p className="text-gray-500 mt-2">No more accounts</p>
            )}
            {/* <p className='text-[#fe2c55] font-semibold text-[14px] leading-[18px]  cursor-pointer mt-2'>See all</p> */}
        </div>
    );
}
FollowingAccounts.propTypes = {
    label: PropTypes.string.isRequired
}

export default FollowingAccounts;