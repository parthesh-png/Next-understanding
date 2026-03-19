

async function getData(){
    await new Promise((resolve)=> setTimeout(resolve,2000));

    return {
        stats:{
            user:1000
        }
    } 
}


export default async function LoadingExample(){

    const data = await getData()

    return <div className="p-4">
        <h1>loading example </h1>
        <p className="font-bold text-sm"> user : {data.stats.user}</p>

    </div>
}