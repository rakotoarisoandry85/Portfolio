import { Facebook, Keyboard, Linkedin, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="site-footer" id="Contact">
            <div className="section-shell footer-shell">
            <aside className="footer-brand">
                <span className="brand-mark">
                    <Keyboard size={22} aria-hidden="true" />
                </span>
                <div>
                    <p className="font-bold">
                        ANDRY <span className="text-[var(--color-warm)]">DEV</span>
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
                </div>
            </aside>
            <nav aria-label="Réseaux sociaux">
                <div className="footer-social">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" aria-hidden="true" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <Youtube className="w-5 h-5" aria-hidden="true" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <Facebook className="w-5 h-5" aria-hidden="true" />
                    </a>
                </div>
            </nav>
            </div>
        </footer>
    )
}

export default Footer
