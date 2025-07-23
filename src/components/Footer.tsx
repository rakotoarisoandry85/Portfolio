import { Keyboard, Facebook, Twitter, Youtube, Linkedin, Disc2Icon } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center  p-10">
            <aside>

                <Keyboard className="w-10 h-10" />
                <p className="font-bold">
                    ANDRY
                    <span className="text-green-500">DEST</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} -  Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <Disc2Icon className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer