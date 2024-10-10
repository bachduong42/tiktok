import PropTypes from 'prop-types';
function Wrapper({ children }) {
    return (
        <div className="w-full max-height-custom min-h-[100px] rounded-lg shadow-xl bg-white">
            {children}
        </div>
    );
}
Wrapper.prototype = {
    children: PropTypes.node.isRequired
}
export default Wrapper;