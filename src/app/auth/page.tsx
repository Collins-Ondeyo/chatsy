"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import {SubmitHandler, useForm} from "react-hook-form"
import * as zod from "zod";



const form_schema=zod.object({
    email:zod.string().email({message:"invalid email"}),
    password: zod.string().min(5, {message:"use atleast 5 characters"})
});




function AuthPage(){
    const {register, handleSubmit, formState:{errors}}= useForm<zod.infer<typeof form_schema>>({
        resolver:zodResolver(form_schema)
    });

    const onSubmit:SubmitHandler<zod.infer<typeof form_schema>>=(data)=>{console.log(data)};

    return(
        <div className="h-full flex flex-col justify-center gap-5 items-center bg-blue-400">
            <div className="text-2xl text-white font-semibold">Register or Login</div>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="rounded px-2 py-3 bg-white flex flex-col items-center justify-center gap-3">
                <div>
                    <input
                        {...register("email")} 
                        type="email" 
                        placeholder="email address" 
                        className="border-[2px] border-black outline-none rounded-md p-1"
                    />
                    <div className="text-sm text-left text-[red] w-full">{errors.email?.message}</div>
                </div>

                <div>
                    <input 
                        {...register("password")}
                        type="password" 
                        placeholder="password" 
                        className="border-[2px] border-black outline-none rounded-md p-1"
                    />
                    <div className="text-sm text-left text-[red] w-full">{errors.password?.message}</div>
                </div>

                <div className="flex flex-row gap-2 w-full">
                    <button className="bg-black text-white font-semibold cursor-pointer py-1 flex-1 rounded-md">Register</button>
                    <button className="bg-black text-white font-semibold cursor-pointer py-1 flex-1 rounded-md">Login</button>
                </div>
            </form>
        </div>
    )
};

export default AuthPage;