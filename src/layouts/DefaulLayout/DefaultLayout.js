import Header from "~/layouts/components/Header"
import Sidebar from "../components/Sidebar"
import PropTypes from 'prop-types';
function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col">
            <Header></Header>
            <div className="mt-[60px]">
                <Sidebar></Sidebar>
                <div>{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default DefaultLayout;