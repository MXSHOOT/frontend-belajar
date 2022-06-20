import styles from "./Pasien.module.css";

function Pasien(props) {
    const {pasien} = props;
    return(
        <div className={styles.pasien}>
            <h1 className={styles.pasien__status}>{pasien.status}</h1>
            <p className={styles[pasien.status]}>{pasien.total}</p>
        </div>
    );
}

export default Pasien;