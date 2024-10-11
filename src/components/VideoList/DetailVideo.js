import { useParams } from "react-router-dom";

function DetailVideo() {
    const { uuid } = useParams();
    return (
        <div>{uuid}</div>
    );
}

export default DetailVideo;