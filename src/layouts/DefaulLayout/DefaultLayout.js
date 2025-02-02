import Header from "~/layouts/components/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import PropTypes from 'prop-types';
function DefaultLayout({ children }) {
    return (
        <div className="flex flex-col z-0">
            <Header></Header>
            <div className="mt-[60px] flex flex-col w-full max-w-full ">
                <Sidebar></Sidebar>
                <div className="flex-grow lg:ml-[16.67%] ml-[72px]">{children}</div>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
}
export default DefaultLayout;