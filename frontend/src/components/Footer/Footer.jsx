import {useNavigate} from 'react-router-dom';
import styles from './Footer.module.css'

export default function Footer() {
    const navigate = useNavigate();

    function logout () {
        localStorage.removeItem("jwtToken")
        navigate ("/")
    }

    return (
        <>
         <footer className ={styles.footer}>
            <div className={styles.footerLogo}>
                <h2>BUSCFÍSICA</h2>
                <button className={styles.logoutButton} onClick={logout}>SAIR</button>
            </div>

            <div className={styles.footerColumn}>
          <h4>CONTATO</h4>
          <p>BUSCFISICA7@GMAIL.COM</p>
          <p>(19) 99653-1673</p>
        </div>

        <div className={styles.footerColumn}>
          <h4>DESENVOLVEDORES</h4>
          <p>AYLA CRISTINA DA SILVA VILELA</p>
          <p>GABRIELLA CAMACHO STAVARENGO</p>
          <p>GUSTAVO MILLAMONTE</p>
          <p>MARIA VITÓRIA GUEDES FERREIRA</p>
          <p>MANUELLA DA SILVA PIVA</p>
        </div>
         </footer>
        </>
    )
}