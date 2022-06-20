import styles from "./Pasien.module.css";

function Pasien(props) {
    const {pasien} = props;
    return(
        <tr className={styles.pasien }>
                <td>no</td>
                <td className={styles.pasien__status}>{pasien.kota}</td>
                <td className={styles.pasien__kasus}>{pasien.kasus}</td>
                <td className={styles.pasien__sembuh}>{pasien.sembuh}</td>
                <td className={styles.pasien__meninggal}>{pasien.meninggal}</td>
                <td className={styles.pasien__dirawat}>{pasien.dirawat}</td>
        </tr>
    );
}

export default Pasien;