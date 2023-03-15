import Link from "./Link"

const Header=()=>{
    return(
    <header>
        <nav>
            <ul>
                <Link title="Blog" className="menu-link" href="https://adalab.es/blog/" openInNewTab="true"/>
                <a title="Contacto" className="menu-link" href="https://adalab.es/contacto/">Contacto</a>
            </ul>
        </nav>
    </header>
    )
}

export default Header;