import { useState } from "react";
import { Keyboard } from "lucide-react";

function Navbar(): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false); // ferme le menu après clic
    }
  };

  return (
    <>
      {/* Navbar fixe */}
      <div className="fixed top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 py-4 bg-black z-[10000]">

        {/* Burger à gauche */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-3 text-green-600 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            // Croix pour fermer
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M18.364 5.636a1 1 0 00-1.414 0L12 10.586 7.05 5.636A1 1 0 105.636 7.05L10.586 12l-4.95 4.95a1 1 0 101.414 1.414L12 13.414l4.95 4.95a1 1 0 001.414-1.414L13.414 12l4.95-4.95a1 1 0 000-1.414z"
              />
            </svg>
          ) : (
            // Hamburger pour ouvrir
            <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>

     {/* Logo à gauche */}
        <a href="#" className="flex items-center font-bold text-3xl md:text-2xl">
                <Keyboard className="mr-2" />
                ANDRY <span className="text-green-600"> DEV</span>
        </a>

       {/* Liens de navigation visibles sur desktop */}
        <nav className="ml-12">
            <ul className="hidden md:flex space-x-4 uppercase ">
                <li>
                    <a onClick={() => scrollToSection("Home")} className="btn btn-sm relative cursor-pointer text-green-600 after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"> Accueil</a>   
                </li>
                <li>
                    <a onClick={() => scrollToSection("About")} className="btn btn-sm relative cursor-pointer text-green-600 after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"> A propos</a>   
                </li>
                <li>
                    <a onClick={() => scrollToSection("Experiences")}  className="btn btn-sm relative cursor-pointer text-green-600 after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"> Mes experiences</a>   
                </li>
                <li>
                    <a onClick={() => scrollToSection("Projects")} className="btn btn-sm relative cursor-pointer text-green-600 after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"> Mes projets</a>   
                </li>           
            </ul>
        </nav>   
        
      </div>

      {/* Menu mobile avec effet slide depuis la gauche */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black z-[10001] transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <nav className="flex flex-col mt-20 space-y-6 px-6">
          <a onClick={() => scrollToSection("Home")} className="cursor-pointer text-green-600 uppercase text-lg hover:underline">Accueil</a>
          <a onClick={() => scrollToSection("About")} className="cursor-pointer text-green-600 uppercase text-lg hover:underline">A propos</a>
          <a onClick={() => scrollToSection("Experiences")} className="cursor-pointer text-green-600 uppercase text-lg hover:underline">Mes expériences</a>
          <a onClick={() => scrollToSection("Projects")} className="cursor-pointer text-green-600 uppercase text-lg hover:underline">Mes projets</a>
        </nav>
      </div>

      {/* Overlay semi-transparent quand menu ouvert */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[10000] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;
