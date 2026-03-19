'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState }  from 'react'

export default function ClientProvider({children} : {children : React.ReactNode}){

    const [queryClient] = useState(
        ()=> new QueryClient({
            defaultOptions :{
                queries :{
                    // cache the data 5 min be default
                    
                    staleTime : 5 * 60 *1000,
                    gcTime : 10*60 *100   //keep your data in cache for 10 min

                }
            }
        })
    )


    return <QueryClientProvider client = {queryClient}>
         {children}
         <ReactQueryDevtools initialIsOpen ={false}/>
    </QueryClientProvider>
                              
}