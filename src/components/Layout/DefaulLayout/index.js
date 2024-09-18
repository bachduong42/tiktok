import Header from "~/components/Layout/components/Header"
import Sidebar from "../components/Sidebar"

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div>
                <Sidebar></Sidebar>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;