import Pasien from "../Pasien";
import styles from "./Pasiens.module.css";
import indonesia from "../../../utils/constants/indonesia";
import { useState } from "react";
import { nanoid } from "nanoid";

function Pasiens() {
   const [pasiens, setPasiens] = useState(indonesia);

function handleClick() {
  const pasien = {
    id: nanoid(),
    status: "Positif",
    total: 6012818,
    detail: "https://covid19.mathdro.id/api/countries/indonesia/confirmed",
  };
  setPasiens([...pasiens, pasien]);
}

  return (
    <div className={styles.container}>
      <section className={styles.pasiens}>
        <h2 className={styles.pasien__judul}>Pasien</h2>
        <div className={styles.pasien__container}>
          {
            pasiens.indonesia.map((pasien) => (
              <Pasien key={pasien.status} pasien={pasien}/> 
            ))}
        </div>
        <button onClick={handleClick}>Add Pasiens</button>
      </section>
    </div>
  );
}

export default Pasiens;