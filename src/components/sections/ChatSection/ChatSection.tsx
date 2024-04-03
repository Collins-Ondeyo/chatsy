import { mockData } from "@/mock-data";
import Image from "next/image";

function ChatSection({className}:{
    className: string;
}){
    return <div className={className}>
        {/* top bar */}
        <div className="w-[full] bg-white px-3 py-1">
            <div className="flex gap-1 flex-row items-end">
                <div className="w-[45px] aspect-square rounded-full border-[2px] relative overflow-hidden">
                    <Image 
                    className="bg-cover"
                    alt="profile image"
                    fill
                    src={mockData.users[2].imageUrl}/>
                </div>
                <div className="font-semibold text-sm">{mockData.users[1].name}</div>
            </div>
        </div>

        {/* messages */}
        <div className="mt-3">
            <div className="py-3">
                <div className="flex flex-row justify-end items-start gap-2 px-5">
                    <div className="max-w-[45%] text-sm bg-white p-2 rounded-sm">
                        Hello Kelly, tomorrow morning we have project demo
                    </div>
                    <div className="relative w-[35px] aspect-square rounded-full border-[2px] border-white overflow-hidden">
                        <Image 
                        fill
                        alt="profile image"
                        src={mockData.users[0].imageUrl}/>
                    </div>
                </div>
            </div>

            <div className="py-3">
                <div className="flex flex-row justify-start items-start gap-2 px-5">
                    <div className="relative w-[35px] aspect-square rounded-full border-[2px] border-white overflow-hidden">
                        <Image 
                        fill
                        alt="profile image"
                        src={mockData.users[0].imageUrl}/>
                    </div>
                    <div className="max-w-[45%] text-sm bg-white p-2 rounded-sm">
                        Hello, I'm just putting together a zip containing the proposal and 
                        all of the work that I've done so far. 
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default ChatSection