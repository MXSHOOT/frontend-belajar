import styles from './Footer.module.css';

function Footer(){
    return(
        <div className={styles.container}>
            <footer>
                <h2 className={styles.footer__title}>Footer Movie App</h2>
                <p className={styles.footer__author}>Editing by mxshoot</p>
            </footer>
        </div>
    );
}

export default Footer;