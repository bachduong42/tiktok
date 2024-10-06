import { useEffect, useState } from "react";
import getCurrentUser from "~/services/getCurrentUser";
import ProfileUser from "~/components/Profile";
function Profile() {
    // const [myInfo, setMyInfo] = useState({});

    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const result = await getCurrentUser();
    //         console.log(result)
    //         if (result) {
    //             setMyInfo(result);
    //         }
    //     };
    //     fetchApi();
    // }, []);
    return (
        <ProfileUser></ProfileUser>
    );
}

export default Profile;