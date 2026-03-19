 
 import { Metadata } from  "next"  //It tells TypeScript that the function will return a metadata object like:
 
 const dummyData ={
    "1" :{
       title: "one",
    },
    "2" :{
        title : "two",
    },

    "3" :{
        title :"three",
    }
 };


//  params = {slug : '1'}  if one click 

//Dynamic Metadata Function


  export async function generateMetadata({params} :{
    params: Promise<{slug : string}>;
 }) :Promise<Metadata>{   //This function returns metadata asynchronously



    const {slug} = await params;
    const data = dummyData[slug as keyof typeof dummyData] //typeof converts a value into its type.
                                                    


    return {
        title:data.title, //tab name 
        description : "Post about " + data.title

    }

    
 }
 


 export default async function DynamicMetadataExample ({params}:
    {params : Promise <{slug : string}>}
 )
 {
    const {slug} = await params;
    const data = dummyData[slug as keyof typeof dummyData]


    return (
        <div>
            <h1>
                {data.title}
            </h1>

        </div>
    )
 }