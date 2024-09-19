import { useState } from "react";
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "~/components/Popper"
import MenuItem from "./MenuItem";
import Header from "./Header";
import PropTypes from 'prop-types';
const defaultfn = () => { }

function Menu({ children, items = [], hideOnClick = false, onChange = defaultfn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]
    const renderItems = () => {
        // console.log("Rendering MenuItem"); // Add this line
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index}
                data={item}
                text
                onClick={() => {
                    if (isParent) {
                        setHistory(prev => [...prev, item.children])
                    } else {
                        onChange(item)
                    }
                }}></MenuItem>
        });
    };

    //Reset to first Page
    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    };
    const renderResult = attrs => (
        <div className="w-[200px] items-start flex mt-2" tabIndex="-1" {...attrs}>
            <PopperWrapper className=" flex flex-col" >
                {history.length > 1 &&
                    <Header
                        className="flex-shrink-0"
                        title={current.title}
                        onBack={handleResetMenu}
                    >
                    </Header>}
                <div className="overflow-y-auto  max-h-[500px]">{renderItems()}</div>
            </PopperWrapper>

        </div>

    )
    const handleResetToFirstPage = () => setHistory(prev => prev.slice(0, 1))
    return (
        <Tippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 700]}
            offset={[10, 10]}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            <div> {children}</div>
        </Tippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node,
    item: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func
}
export default Menu;