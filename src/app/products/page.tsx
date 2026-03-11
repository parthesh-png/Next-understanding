
import Link from 'next/link'

function Products(){

    const products =[
    {id :'1', name : 'Mobile',price:500 },
    {id :'2', name : 'laptop',price:500},
    {id :'3', name : 'watch',price:500}


]
    return(
        <div>
        <h1 className =""> Products</h1>
         <div className="grid gap-4">
            {
                products.map((product) =>(
                    <div key ={product.id} className="border">
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>

                        <Link href = {`/products/${product.id}`} > View Details
                        </Link>
                        
                    
                    </div>
                )
                )
            }
         </div>
        </div>
    )

}

export default  Products