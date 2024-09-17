import Button from "~/components/Button";
function MenuItem({ data, onClick }) {
    // console.log("menudata:", data)
    return (
        <Button leftIcon={data.icon} text onClick={onClick} seperate={data.seperate}>{data.title}</Button>
    );
}

export default MenuItem;