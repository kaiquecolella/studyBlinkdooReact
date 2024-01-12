import styles from './Header.css'
import Button from './Button'

function Header () {
    return (
            <nav className='headerNavbar'>
                    <ul>
                        <li><a href="#">Blinkdoo</a></li>
                    </ul>
                    <ul className='linksNavbar'>
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Quem Somos</a></li>
                        <li><a href="#">Seus Benefícios</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                    <ul>
                        <li>
                            <Button/>
                        </li>
                    </ul>
            </nav>
    )
    
}

export default Header;