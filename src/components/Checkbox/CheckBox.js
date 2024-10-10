function CheckBox({ label, name, value, checked, onChange }) {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                name={name}
                value={value}
                id={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />
            <label
                htmlFor={value}
                className={`flex items-center justify-center w-5 h-5 border-2 border-[#ccc] rounded-md cursor-pointer 
                        ${checked ? 'bg-[#fe3058] border-[#fe3058]' : 'bg-white'}`}
            >
                {checked && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                )}
            </label>
            <span className="ml-2 font-medium">{label}</span>
        </div>
    );
}

export default CheckBox;