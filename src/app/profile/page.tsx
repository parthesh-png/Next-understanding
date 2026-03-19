"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

function Profile(){
    

  const router = useRouter()
  const pathname = usePathname()
 const searchParams = useSearchParams()


//   console.log(router,pathname)
// console.log(searchParams)
console.log(searchParams.getAll('name'),
          searchParams,searchParams.has('name'))  

  const handleNavigation = () =>{
    router.push("/")
  }


    return( 
    <div>
    <h1>profile component - client </h1>
    <button onClick={handleNavigation}> navigate to home </button>



    </div>

    )

}

export default Profile;





















// ********************************//
// Lession - 1 furing understand  of route 

// function Profile(){
//     return <h1>profile component - client </h1>
// }
// export default Profile;