import { mockData } from "@/mock-data";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { Mails, Settings } from "lucide-react";
import Button from "@/components/ui/Button";

function ProfileSection({className}:{
    className:string
}){
    return (
        <div className={twMerge("pt-10", className)}>
            <div className="w-[50%] aspect-square border-[2px] rounded-full m-auto relative overflow-hidden">
                <Image 
                fill 
                src={mockData.users[0].imageUrl}
                alt="profile image"
                className="bg-cover"/>
            </div>

            <div className=" text-center py-5 text-white font-semibold">
                {mockData.profile.name}
            </div>

            <div className="flex flex-col items-center text-white">
                <Button className="hover:bg-purple-900 justify-start pl-[20%]">
                    <Mails/>
                    Messages
                </Button>
                <Button className="hover:bg-purple-900 justify-start pl-[20%]">
                    <Settings/>
                    Settings
                </Button>
            </div>
        </div>
    )
}

export default ProfileSection;