import styles from "./AddCovidForm.module.css";
import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import Alert from "../Alert/Alert";
import paint from "../Img/paint.png";

console.log(paint);

function AddCovidForm(props){
    const {pasiens, setPasiens} = props;

    // buat variable state input form
    const [provinsi, setProvinsi] = useState("Jakarta");
    const [status, setStatus] = useState("Positif");
    const [jumlah, setJumlah] = useState(0);

    // buat  fungsi handleProvinsi
    function handleJumlah(e){
        setJumlah(e.target.value);
    }
    

    // state untuk error input form
    const [isProvinsiError, setIsProvinsiError] = useState(false);
    const [isStatusError, setIsStatusError] = useState(false);
    const [isJumlahError, setIsJumlahError] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        // validasi form harus diisi
        if(provinsi === ''){
            setIsProvinsiError(true);
        } else if(status === ''){
            setIsStatusError(true);
        } else if(jumlah === ''){
            setIsJumlahError(true);
        } else {
            const pasien = {
                id: nanoid(),
                lokasi: provinsi,
                kondisi: status,
                berapa: jumlah
            }
            setPasiens([...pasiens, pasien]);

            setIsProvinsiError(false);
            setIsStatusError(false);
            setIsJumlahError(false);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.form__left}>
                <img src={paint} alt="" className={styles.form__image} />
            </div>

            <div className={styles.form__right}>
                <h2 className={styles.form__title}>Form Covid</h2>

                <form onSubmit={handleSubmit}>

                    <div className={styles.form__control}>
                        <label htmlFor="provinsi">Provinsi</label>
                        <select name="provinsi" id="provinsi" className={styles.form__input} value={provinsi} onChange={(e)=>setProvinsi(e.target.value)} >
                            <option value="aceh">Aceh</option>
                            <option value="bandung">Bandung</option>
                            <option value="depok">Depok</option>
                            <option value="jakarta">Jakarta</option>
                            <option value="medan">Medan</option>
                        </select>

                        {/* jika type belum dipilih, maka tampilkan error */}
                        {isProvinsiError && <Alert>Type wajib diisi!</Alert>}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="status">Status</label>
                        <select name="status" id="status" className={styles.form__input} value={status} onChange={(e)=>setStatus(e.target.value)} >
                            <option value="positif">Action</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="dirawat">Dirawat</option>
                            <option value="meninggal">Meninggal</option>
                        </select>

                        {/* jika type belum dipilih, maka tampilkan error */}
                        {isStatusError && <Alert>Type wajib diisi!</Alert>}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="jumlah">Jumlah</label>
                        <input id="jumlah" type="number" className={styles.form__input} value={jumlah} onChange={handleJumlah} />

                        {/* jika isDateError true, maka tampilkan error */}
                        {isJumlahError && <Alert>Year wajib diisi!</Alert>}
                    </div>

                    <button type="submit" className={styles.form__button}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddCovidForm;