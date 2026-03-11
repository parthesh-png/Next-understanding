//server component by default 
// can fetch data inside a server component 
// access backend resourse directly 
//  keep sensitiy info in server side 
// not able to expose the client side 
// 
// cant use hook
// cant add event 



export default function Home() {


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <h1 className="large-text font-bold"  > this is our home page at root route</h1>
    </div>
  );

  
}
