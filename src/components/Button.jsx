export default function Button({children, onClick, ...rest}) {



    return(
        <button {...rest} onClick={onClick} className="bg-sky-500 w-full h-fit text-white font-semibold text-lg subpixel-antialiased px-4 py-1 rounded-lg shadow-md hover:bg-sky-600 active:bg-sky-700">
            {children}
        </button>
    );
}