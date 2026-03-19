"use client";
import {useEffect, useState} from "react"


interface Product{
    id : number ;
    title : string
    price: number
    category:string
}



function UseEffectExample(){

    const [isLoading , setIsLoading] = useState(false)
    const [data,setData] =useState<Product[]>([])

    async function fetchListofProducts(){

        try{
             setIsLoading(true)
             
        const res =  await fetch('https://dummyjson.com/products?delay=1000')
              const result = await res.json()
              if(result){
                setIsLoading(false)
                setData(result?.products)
                 console.log(result)
               


              }
        }
        catch(e){
            console.log(e)
        } finally{
            setIsLoading(false)
        } 
    }

    useEffect (()=>{
             fetchListofProducts()

    },[]);

    if(isLoading)
         return <h1>Loading .....</h1>

    return (
        <div>
            <h1>use Effect Example </h1>
            
                 <div className="flex-flex gap-2">
                  {
                data.map(product=>(
                    <div key ={product.id} >  
                    <h3>{product.title}</h3>     
                    <p>${product.price}</p>
                    <p>${product.category}</p>

                    </div>
                ))
            }


            </div>

            
        </div>
    )
}

export default UseEffectExample