import Button from "~/components/Button";
function MenuItem({ data }) {
    console.log("menudata:", data)
    return (
        <Button leftIcon={data.icon}>{data.title}</Button>
    );
}

export default MenuItem;