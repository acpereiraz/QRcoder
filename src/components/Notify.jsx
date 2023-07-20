import { useEffect, useId, useState } from "react";

export default function Notify({notifications, setNotifications}){
    const keyId = useId();

    useEffect(() => {
        const timer = notifications && setTimeout(() => {
            setNotifications([notifications.splice(0, notifications.length-1)])
        }, 5000);
        return () => {
            clearTimeout(timer)
        };
    }, [notifications]);

    const Notification = ({children}) =>{
        return (
            children &&
            (
                <div className="notification-card w-full rounded-lg bg-green-200 text-gray-800 relative shadow-lg">

                    <div className="notification-card-body p-3 font-semibold">
                        <p>{children}</p>
                    </div>

                    <button className="notification-card-close-button absolute top-2 right-2">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                    </button>

                </div>
            )
        );
    }

    return(
        <div className="notify-container flex flex-col gap-2 absolute top-0 right-0 p-4 h-screen w-[50%] sm:w-[40%] md:w-[300px] text-white z-60">
            {notifications.map((notification) =>(
                <Notification key={keyId}>{notification.content}</Notification>
            ))}
        </div>
    )
}