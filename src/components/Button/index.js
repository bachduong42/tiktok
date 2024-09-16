import { Link } from "react-router-dom";
function Button({ to, href, primary, children, onClick, leftIcon,
    rightIcon, text, seperate = false, ...passProps }) {
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
        ${seperate ? "border-t border-t-[#1618231]" : ""}`} {...props}>
            {leftIcon && <span className="text-[20px]">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;