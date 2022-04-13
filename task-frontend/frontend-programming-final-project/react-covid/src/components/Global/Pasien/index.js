import styles from "./Pasien.module.css";

function Pasien(props) {
    const {pasien} = props;
    return(
        <div className={styles.pasien }>
            <p className={styles.pasien__status}>{pasien.status}</p>
            <p className={styles.pasien__total}>{pasien.total}</p>
        </div>
    );
}

export default Pasien;