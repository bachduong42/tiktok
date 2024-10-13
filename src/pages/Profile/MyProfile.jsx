import { useContext, useEffect, useState } from "react";
import { getAnUserById } from "~/services/getUser";
import ProfileUser from "~/components/Profile";
import { UserContext } from "~/contexts/UserContext";
function MyProfile() {
    const [myInfo, setMyInfo] = useState({});
    const { user } = useContext(UserContext);
    // console.log(user);
    useEffect(() => {
        if (user) {
            const fetchApi = async () => {
                const result = await getAnUserById(user.nickname);
                if (result) {
                    setMyInfo(result);
                }
            };
            fetchApi();
        }
    }, [user]);
    return (
        <ProfileUser myInfo={myInfo} ></ProfileUser>
    );
}

export default MyProfile;