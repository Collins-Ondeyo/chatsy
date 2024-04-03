import { mockData } from "@/mock-data";
import { Search } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import UserCard from "./UserCard";

function UsersSection({className}:{
    className:string
}){
    return (
        <div className={twMerge(" flex flex-col",className)}>
            <div className="border-b-2 py-2 flex justify-center">
                <div className="flex flex-row gap-2 items-center rounded-3xl bg-gray-300 px-2">
                    <Search/>
                    <input 
                    className="bg-transparent border-none outline-none p-1"
                    type="text" 
                    placeholder="Search"/>
                </div>
            </div>
            <div className="flex flex-col gap-3 py-3">

                {/* user cards */}
                {
                    mockData.users.map(
                        user=> (
                            <UserCard key={user.name} imageUrl={user.imageUrl} lastMessage={user.lastMessage} userName={user.name} />
                        )
                    )
                }
            </div>
        </div>
    )
}

export default UsersSection;