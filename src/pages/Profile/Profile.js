import { useEffect, useState } from "react";
import { getAnUserById } from "~/services/getUser";
import ProfileUser from "~/components/Profile";
import { useParams } from "react-router-dom";
function Profile() {
    const [profile, setProfile] = useState({});
    const { nickname } = useParams();

    console.log(nickname);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getAnUserById(nickname);
            if (result) {
                setProfile(result);
            }
        };
        fetchApi();
    }, [nickname]);
    return (
        <ProfileUser myInfo={profile} profile></ProfileUser>
    );
}

export default Profile;