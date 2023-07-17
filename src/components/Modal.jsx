import { useState } from "react";
import QrCode from "./QrCode";

export default function Modal({qrCodeImage, id, currentUrl}) {

    const defaultMessage = "Check this QR! Generated on QRCoder.com"
    const [message, setMessage] = useState(defaultMessage);

    const handleOnChangeTextarea = (element) => {
        async function ChangeMessage() {
            element.target.value ? setMessage(element.target.value) : setMessage(defaultMessage)
        }
        ChangeMessage();
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
                        <div className="flex flex-col gap-5 justify-center items-center h-[50%] w-full">
                            <div className="w-[50%] h-full mt-4">
                                <QrCode imageUrl={qrCodeImage}></QrCode> 
                            </div>
                            <h2 className="font-medium text-sm text-gray-500">{currentUrl}</h2>
                            <h3 className="w-full px-5 flex justify-center max-h-[100px] break-words overflow-auto flex-nowrap">{message}</h3>
                        </div>

                        <div>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Customize your message</label>
                            <textarea onChange={(e) => {handleOnChangeTextarea(e)}} id="message" rows="4" class="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>

                        <div className="share-buttons">
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

