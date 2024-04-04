function AuthPage(){
    return(
        <div className="h-full flex flex-col justify-center gap-5 items-center bg-blue-400">
            <div className="text-2xl text-white font-semibold">Register or Login</div>
            <form className="rounded px-2 py-3 bg-white flex flex-col items-center justify-center gap-3">
                <div>
                    <input 
                        type="email" 
                        placeholder="email address" 
                        className="border-[2px] border-black outline-none rounded-md p-1"
                    />
                    <div className="text-sm text-left text-[red] w-full">error if any</div>
                </div>

                <div>
                    <input 
                        type="password" 
                        placeholder="password" 
                        className="border-[2px] border-black outline-none rounded-md p-1"
                    />
                    <div className="text-sm text-left text-[red] w-full">error if any</div>
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