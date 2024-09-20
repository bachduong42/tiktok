import { Link } from "react-router-dom";
import PropTypes from "prop-types"
function Button({
    to,
    href,
    outline = false,
    primary,
    children,
    onClick,
    leftIcon,
    rightIcon,
    text,
    seperate = false,
    ...passProps }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps,
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    return (
        <Comp className={`pl-[16px] pr-2 rounded-[4px] flex items-center gap-2 hover:bg-[#162c2408] 
        ${primary ? "w-[120px] h-[36px] py-[6px] text-base leading-[21px] font-bold hover:bg-[#d82549] text-white bg-[#fe2c55] justify-center" : ""} 
        ${text ? "text-black w-full h-[41px] justify-start py-[10px]" : ""}
        ${seperate ? "border-t border-t-[#1618231]" : ""}
        ${outline ? "text-[#d82549] border border-[#d82549] w-[120px] h-[36px] py-[6px] text-base leading-[21px] font-bold justify-center" : ""}`} {...props}>
            {leftIcon && <span className="text-[20px]">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="">{rightIcon}</span>}
        </Comp>
    );
}
Button.prototype = {
    to: PropTypes.string,
    href: PropTypes.string,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    text: PropTypes.bool,
    seperate: PropTypes.bool
}

export default Button;