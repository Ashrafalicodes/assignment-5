import { Suspense, useState } from "react";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import Project from "./component/Project";
import Addproject from "./component/Addproject";
import type { Ijob } from "./component/types/Type";
import { toast } from "react-toastify";


const FetchProject = async () => {
  const res = await fetch("/Project.json");
  const Data = await res.json();
  return Data;
};

const PromiseProject = FetchProject();

function App() {

  const [saved,setSaved]= useState<Ijob[]>([])
  const handleClick=(tech:Ijob)=>{
    setSaved([...saved, tech]);
   
  }
  const handleClearAll= ()=>{
    if (!saved.length) return
    setSaved([])
    toast.success("Your Stack is Clear",{position:"top-right" })
  }

  return (
    <>
      <Nav />
      <Banner/>
      <main>
        <section className="container mx-auto my-10">
          
   <div className=" container mb-10">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Explore the <span className="text-fuchsia-500">Technologies</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
          <div className="grid grid-cols-4 gap-4 items-start">
            <Suspense fallback =  {<div>Loading...</div>}>
            <Project PromiseProject={PromiseProject}
            handleClick={handleClick}
            ></Project>
            </Suspense>
            <Addproject saved={saved}
            handleClearAll={handleClearAll}
                    
            ></Addproject>
          </div>
        </section>
      </main>





    </>
  );
}

export default App;