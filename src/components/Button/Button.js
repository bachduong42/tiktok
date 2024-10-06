import { Link } from "react-router-dom";
import PropTypes from "prop-types"
function Button({
    className,
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
        <Comp
            className={`pl-[16px] pr-4 rounded-[4px] flex items-center gap-2 
        ${className ? className : ""}
        ${primary ? "w-[120px] h-[36px] py-[6px] text-base leading-[21px] font-semibold hover:bg-[#d82549] text-white bg-[#fe2c55] justify-center" : ""} 
        ${text ? "text-black w-full h-[41px] justify-start py-[10px]" : ""}
        ${seperate ? "border-t border-t-[#1618231]" : ""}
        ${outline ? "text-[#fe2c55] border border-[#fe2c55] py-[6px] text-base leading-[21px] font-bold justify-center hover:bg-[#fe2c550f]" : ""}`} {...props}>
            {leftIcon && <span className="text-[20px]">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="">{rightIcon}</span>}
        </Comp>
    );
}
Button.protoTypes = {
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    text: PropTypes.bool,
    separate: PropTypes.bool
}

export default Button;