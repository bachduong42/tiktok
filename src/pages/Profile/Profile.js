import { useEffect, useState } from "react";

import getCurrentUser from "~/services/getCurrentUser";
import ProfileUser from "~/components/Profile";
function Profile() {
    const [myInfo, setMyInfo] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getCurrentUser();
            console.log(result)
            if (result) {
                setMyInfo(result);

                // console.log(result.nickname);
            }
        };
        fetchApi();
    }, []);
    return (
        <ProfileUser myInfo={myInfo}></ProfileUser>
    );
}

export default Profile;