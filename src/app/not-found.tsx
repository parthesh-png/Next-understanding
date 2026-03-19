'use client'

import { useRouter } from "next/navigation";


function NotFoundPage(){


    const router =useRouter();
    return (
        <div>
             <h1> The page you are looking for is not exists</h1>
             <button  onClick={()=>router.push('/')}  className="bg-black p-4 text-white">
                go to home page
             </button>
        </div>         
    );
}
export default NotFoundPage; 