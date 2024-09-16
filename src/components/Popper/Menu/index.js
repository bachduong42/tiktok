import { Children, useState } from "react";
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "~/components/Popper"
import MenuItem from "./MenuItem";
import Header from "./Header";

const defaultfn = () => { }

function Menu({ children, items = [], onChange = defaultfn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]
    const renderItems = () => {
        // console.log("Rendering MenuItem"); // Add this line
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} text onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }}></MenuItem>
        });
    };

    return (
        <Tippy interactive
            delay={[0, 700]}
            offset={[10, 10]}
            placement="bottom-end"
            render={attrs => (
                <div className="w-[200px] items-start flex mt-2 " tabIndex="-1" {...attrs}>
                    <PopperWrapper className="w-full" >
                        {history.length > 1 && <Header title="Language" onBack={() => {
                            setHistory(prev => prev.slice(0, prev.length - 1))
                        }}></Header>}
                        {renderItems()}
                    </PopperWrapper>

                </div>

            )}
            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            <div> {children}</div>
        </Tippy>
    );
}

export default Menu;