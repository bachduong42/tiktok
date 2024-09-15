import { Children } from "react";
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "~/components/Popper"
import MenuItem from "./MenuItem";
function Menu({ children, items = [] }) {
    const renderItems = () => {
        console.log("Rendering MenuItem"); // Add this line
        return items.map((item, index) => (
            <MenuItem key={index} data={item}></MenuItem>
        ));
    };

    return (
        <Tippy interactive
            placement="bottom-end"
            render={attrs => (
                <div className="w-[289px] items-start flex mt-2 " tabIndex="-1" {...attrs}>
                    <PopperWrapper className="" >
                        {renderItems()}
                    </PopperWrapper>

                </div>

            )}
        >
            <div> {children}</div>
        </Tippy>
    );
}

export default Menu;