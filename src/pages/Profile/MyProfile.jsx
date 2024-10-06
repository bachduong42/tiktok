import { useEffect, useState } from "react";
import getCurrentUser from "~/services/getCurrentUser";
import ProfileUser from "~/components/Profile";
function MyProfile() {
    const [myInfo, setMyInfo] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCurrentUser();
            if (result) {
                setMyInfo(result);
            }
        };
        fetchApi();
    }, []);
    return (
        // <>helo</>
        <ProfileUser myInfo={myInfo}></ProfileUser>
    );
}

export default MyProfile;