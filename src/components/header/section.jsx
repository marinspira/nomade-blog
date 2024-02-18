import styles from './section.module.css'
import logo from '@/assets/logo5.png'

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.logo} src={logo.src} alt='logo'/>
                <span>blog de viagem</span>
            </div>
        </header>
    )
}

export default Header