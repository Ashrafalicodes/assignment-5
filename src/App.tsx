import { Suspense } from "react";
import Banner from "./component/Banner";
import Nav from "./component/Nav";
import Project from "./component/Project";
import Addproject from "./component/Addproject";


const FetchProject = async () => {
  const res = await fetch("/Project.json");
  const Data = await res.json();
  return Data;
};

const PromiseProject = FetchProject();

function App() {
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
          <div className="grid grid-cols-4 gap-4">
            <Suspense fallback =  {<div>Loading...</div>}>
            <Project PromiseProject={PromiseProject} ></Project>
            </Suspense>
            <Addproject></Addproject>
          </div>
        </section>
      </main>



      {/* <main>
        <section className="container mx-auto my-10 px-4">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            <div className="lg:col-span-3">
              <Suspense fallback={<div className="text-center py-10 font-bold">Loading...</div>}>
                <Project PromiseProject={PromiseProject} />
              </Suspense>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-5">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Your Stack</h2>
                <p className="text-sm text-slate-400 mb-4">
                </p>
              </div>
            </div>

          </div>
        </section>
      </main> */}

    </>
  );
}

export default App;