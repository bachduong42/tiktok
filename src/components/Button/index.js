import { Link } from "react-router-dom";
function Button({ to, href, primary, children, onClick, leftIcon,
    rightIcon, text = false, ...passProps }) {
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
        <Comp className={`h-[36px] px-2 py-[6px] rounded-[4px] flex items-center gap-2  justify-start hover:bg-[#162c2408] ${primary ? "w-[100px]  text-base leading-[21px] font-bold hover:bg-[#d82549] text-white bg-[#fe2c55]" : "text-black w-full"}`} {...props}>
            {leftIcon && <span className="text-[20px]">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="">{rightIcon}</span>}
        </Comp>
    );
}

export default Button;