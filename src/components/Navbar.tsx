import { Keyboard } from "lucide-react"

function Navbar() {
  return (
    <div className="flex justify-center md:justify-between items-center p-4 mt-0 ">
        {/* <div className="fixed top-0 z-50 w-full bg-white/90 text-slate-600 backdrop-blur-lg backdrop-saturate-150"> */}

        <div className="md:hidden items-center">
            <button className="flex items-center p-3 text-blue-600 navbar-burger" >
                <svg className="block w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>
        </div>


            <a href="#" className="flex items-center font-bold text-3xl md:text-2xl">
            <Keyboard className="mr-2" />
            ANDRY <span className="text-green-600"> DEV</span>
            </a>
        <div className="ml-12">
            <ul className="hidden md:flex space-x-4 ">
                <li>
                    <a href="#Home" className="btn btn-sm btn-ghost"> Accueil</a>   
                </li>
                <li>
                    <a href="#About" className="btn btn-sm btn-ghost"> A propos</a>   
                </li>
                <li>
                    <a href="#Experiences" className="btn btn-sm btn-ghost"> Mes experiences</a>   
                </li>
                <li>
                    <a href="#Projects" className="btn btn-sm btn-ghost"> Mes projets</a>   
                </li>
            
            </ul>
        </div>    

        <div  role="button" className="btn bg-slate-100 hover:bg-slate-200 text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
        </div>

        <div className=" hidden ml-12">
            <ul className="dropdown dropdown-bottom md:dropdown-end ">
                <li>
                    <a href="#Home" className="btn btn-sm btn-ghost"> Accueil</a>   
                </li>
                <li>
                    <a href="#About" className="btn btn-sm btn-ghost"> A propos</a>   
                </li>
                <li>
                    <a href="#Experiences" className="btn btn-sm btn-ghost"> Mes experiences</a>   
                </li>
                <li>
                    <a href="#Projects" className="btn btn-sm btn-ghost"> Mes projets</a>   
                </li>
            
            </ul>
        </div>   
        {/* </div>     */}
    </div>
  )
}

export default Navbar