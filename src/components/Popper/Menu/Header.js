import { MdArrowBackIos } from "react-icons/md";
function Header({ title, onBack }) {
    return (
        <header className="flex relative px-5 py-3">
            <button>
                <MdArrowBackIos className="" onClick={onBack} />
            </button>
            <h4 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[500px]">{title}</h4>

        </header>
    );
}

export default Header;