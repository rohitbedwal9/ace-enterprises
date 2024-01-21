export default function Custom404(){
    return(
        <> 
            <div className="flex flex-col justify-center gap-2 min-h-screen bg-white dark:bg-gray-900 self-center items-center w-full ">
                <div className="text-4xl font-bold ">OOPS!</div>
                <div className="text-xl font-semibold text-gray-500">404 - Page Not Found</div>
                <div className="text-lg  w-[50%] text-center">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</div>
                <div className="text-lg  w-[50%] text-center">Please try to <a href="/" className="text-blue-500">go back</a> or <a href="/" className="text-blue-500">return to the homepage</a></div>
            </div>
        </>
    )
}