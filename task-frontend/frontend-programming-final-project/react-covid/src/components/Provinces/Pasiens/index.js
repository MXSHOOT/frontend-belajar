import Pasien from "../Pasien";
import styles from "./Pasiens.module.css";
import provinces from "../../../utils/constants/provinces";
import { useState } from "react";
import { nanoid } from "nanoid";

function Pasiens() {
   const [pasiens, setPasiens] = useState(provinces);

function handleClick() {
  const pasien = {
    id: nanoid(),
    kota: "Jakarta",
    kasus: 0,
    sembuh: 0,
    meninggal: 0,
    dirawat: 0,
  };
  setPasiens([...pasiens, pasien]);
}

  return (
    <div className={styles.container}>
      <section className={styles.pasiens}>
        <h2 className={styles.pasien__judul}>Pasien</h2>
        <div className={styles.pasien__container}>
          {
            pasiens.provinces.map((pasien) => (
              <Pasien key={pasien.kota} pasien={pasien}/> 
            ))}
        </div>
        <button onClick={handleClick}>Add Pasiens</button>
      </section>
    </div>
  );
}

export default Pasiens;