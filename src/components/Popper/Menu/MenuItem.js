import Button from "~/components/Button";
import PropTypes from 'prop-types';
function MenuItem({ data, onClick }) {
    // console.log("menudata:", data)
    return (
        <Button leftIcon={data.icon} text onClick={onClick} seperate={data.seperate}>{data.title}</Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
}
export default MenuItem;