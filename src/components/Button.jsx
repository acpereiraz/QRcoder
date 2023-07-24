import { FiShare2 } from 'react-icons/fi';

export default function Button({children, onClick, isShare=false, ...rest}) {
    return(
        <button {...rest} onClick={onClick} className="bg-sky-500 relative w-full h-fit text-white overflow-hidden font-semibold text-lg subpixel-antialiased px-4 py-1 rounded-lg shadow-md hover:bg-sky-600 active:bg-sky-700">
            {children}
            {isShare &&
                <div className='top-0 right-0 absolute h-full w-full text-center items-center flex justify-start'>
                    <div className="bg-black bg-opacity-20 h-full flex justify-center items-center">
                        <FiShare2 className="mx-2.5"></FiShare2>
                    </div>
                </div>
            }
        </button>
    );
}