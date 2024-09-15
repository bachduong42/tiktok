function Wrapper({ children }) {
    return (
        <div className="w-full max-height-custom min-h-[100px] rounded-lg shadow-md ">
            {children}
        </div>
    );
}

export default Wrapper;