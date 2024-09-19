import Header from "~/layouts/components/Header"

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;