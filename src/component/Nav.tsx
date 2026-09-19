import logo from './logo-text.png'

export interface NavProps {
  prop: string
}

export default function Nav() {
  return (
    <>
    <div className='bg-[#FFFFFF] border-b border-gray-200 sticky top-0 z-50  shadow-sm'>

      <div className="flex justify-between items-center gap-4 container mx-auto m-2 p-2 ">
        <img src={logo} alt="Logo" />
        <ul className="flex gap-6">
          <li>Home</li>
          <li>Technology</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-2 ">
          <button className="signbtn p-2 border-r-base-200">Sign In</button>
          <button className="signbtn bg-[#D91B7E] text-white p-2 rounded-2xl ">Sign up</button>
          
        </div>
      </div>
    </div>
    </>
  )
}