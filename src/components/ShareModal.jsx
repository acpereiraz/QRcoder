// React imports
import { useRef, useState } from "react";
// Components imports
import QrCode from "./QrCode";
import Button from "./Button";
// Utilities imports
import PrintToClipboard from "../utils/PrintToClipboard";

export default function ShareModal({qrCodeImage, id, currentUrl, notifications, setNotifications}) {

    const defaultMessage = "Check this QR! Generated on QRCoder.com"
    const [message, setMessage] = useState(defaultMessage);
    const divRef = useRef();

    const handleOnChangeTextarea = (element) => {
        async function ChangeMessage() {
            element.target.value ? setMessage(element.target.value) : setMessage(defaultMessage)
        }
        ChangeMessage();
    }

    const handlePrintToClipboard = (elementReference) => {
        PrintToClipboard(elementReference);
        setNotifications([...notifications, {
            content: "QR code copied to clipboard with success!",
        }])
    }

    return(
        <div id={id} data-modal-placement="top-center" className="fixed top-0 left-0 right-0 z-50 hidden w-full h-full p-4">
            <div className="relative w-full max-w-md max-h-full">
                <div className="bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Share
                        </h3>

                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide={id}>

                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>

                            <span className="sr-only">Close modal</span>
                            
                        </button>

                    </div>

                    <div className="flex flex-col p-6 gap-5">
                        <div className="flex justify-center items-center h-[60%] w-full">
                            <div ref={divRef} className="flex flex-col justify-center items-center w-[60%] gap-2 text-center p-2">
                                <div className="w-[70%] h-full mt-2">
                                    <QrCode imageUrl={qrCodeImage}></QrCode> 
                                </div>
                                <h2 className="font-medium text-sm text-gray-500">{currentUrl}</h2>
                                <h3 className="w-full px-5 flex justify-center max-h-[100px] break-words flex-nowrap text-sm mb-2">{message}</h3>
                            </div>

                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customize your message</label>
                            <textarea onChange={(e) => {handleOnChangeTextarea(e)}} id="message" rows="4" className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>

                        <div className="share-buttons">
                            <Button onClick={() => {handlePrintToClipboard(divRef)}}>Copy to Clipboard</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

