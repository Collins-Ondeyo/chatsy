import Image from "next/image";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface UserCardInterface extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?:string;
    imageUrl:string;
    userName: string;
    lastMessage: string;
}
const UserCard=forwardRef<HTMLButtonElement, UserCardInterface>(({
    className, imageUrl, userName, lastMessage
}, ref)=>{
    return(
        <button
        ref={ref}
        className={twMerge("overflow-hidden outline-none border-b border-t flex flex-col items-start py-2 cursor-pointer px-2 hover:bg-gray-200 transition-colors duration-100 ease-in-out", className)}>

            {/* timestamp */}
            <div className="w-full text-xs text-end text-gray-800">3 days ago</div>

            <div className="w-full flex items-center gap-2">
                {/* image */}
                    <div className="w-[45px] aspect-square relative rounded-full border-2 overflow-hidden">
                        <Image 
                            className="bg-cover"
                            fill 
                            alt="profile image" 
                            src={imageUrl}/>
                    </div>
                    {/* name and last text */}
                    <div className="text-start">
                        <div className="text-sm font-semibold">{userName}</div>
                        <div className="text-sm text-gray-600">{lastMessage}</div>
                    </div>                
            </div>
        </button>
    )
})

export default UserCard;