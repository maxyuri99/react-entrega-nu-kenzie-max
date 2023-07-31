import Logo from "../../assets/NuKenzieLogo.png"
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.flexBox}>
                    <img src={Logo} alt="Logo Nu Kenzie" />
                </div>
            </div>
        </header>
    )
}