// 



interface Product{
    id : number ;
    title : string
    price: number
    category:string
}


interface ProductsResponse{
    products : Product[];
    total : number
}


async function getProducts() : Promise< ProductsResponse >{
    const response = await fetch('https://dummyjson.com/products?delay=1000',
        {cache: 'reload'})

        if(!response.ok){
            throw new Error('failed to fatch product')
        }

        return response.json();
}

async function ServerSideFetchExample(){

    const products = await getProducts()  // await use as taking actial data
    console.log(products)
    return (
        <div>
            <h1>
                    server side data fetching 
            </h1>
            <h3>
                {products?.total} no of products
            </h3>
            <div className="flex-flex gap-2">
                  {
                products?.products?.map(product=>(
                    <div key ={product.id} >  
                    <h3>{product.title}</h3>     
                    <p>${product.price}</p>
                    <p>${product.category}</p>

                    </div>
                ))
            }


            </div>

          
        </div>
    );
}
export default   ServerSideFetchExample;