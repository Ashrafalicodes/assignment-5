import Banner from "./component/Banner"
import Nav from "./component/Nav"


const FetchProject = async()=>{
  const res = await fetch('/public/Project.json')
const Data= await res.json()
return Data

}
function App() {
const PromiseProject = FetchProject()
console.log(PromiseProject);

  return (
    <>
    <Nav/>
    <Banner/>
    </>
  )
}

export default App
