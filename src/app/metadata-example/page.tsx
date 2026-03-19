import Link from "next/link";
import  { Metadata }  from 'next'


// it will not render , it will in html head
export const metadata : Metadata= {
        title : "Metadata example",   //browser tab name 
        description : 'this is my example of writing static  metadata '  //search engine description 
    }


function MetadataExample(){

    const example =[
    {
        id:'1', title :"One"
    },

    {
        id:'2'  , title:'Two'
    },
    {
        id :'3' , title:'three'
    }
    ]

    return (
        <div> 
            <h1> Metadata Exampless </h1>
            <ul>
                {
                    example.map(item =>(
                        <li key = {item.id}>
                            <Link href={`/metadata-example/${item.id}`}>
                            {item.title}
                            
                            </Link>
                            
                        </li>

                    ))
                }

            </ul>
        </div>

    );



}

export default MetadataExample;