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
                            <option vale="jakarta">Jakarta</option>
                            <option vale="jabar">Jawa Barat</option>
                            <option vale="jateng">Jawa Tengah</option>
                            <option vale="jatim">Jawa Timur</option>
                            <option vale="banten">Banten</option>
                            <option vale="yogyakarta">Yogyakarta</option>
                            <option vale="riau">Riau</option>
                            <option vale="bali">Bali</option>
                            <option vale="sumtar">Sumatera Utara</option>
                            <option vale="sumsel">Sumatera Selatan</option>
                            <option vale="sultan">Sulawesi Selatan</option>
                            <option vale="sulbar">Sumatera Barat</option>
                            <option vale="nustetim">Nusa Tenggara Timur</option>
                            <option vale="bangbel">Bangka Belitung</option>
                            <option vale="lampung">Lampung</option>
                            <option vale="kepri">Kepulauan Riau</option>
                            <option vale="kasel">Kalimantan Selatan</option>
                            <option vale="kalitim">Kalimantan Timur</option>
                            <option vale="kalibar">Kalimantan Barat</option>
                            <option vale="sulteng">Sulawesi Tengah</option>
                            <option vale="kaliteng">Kalimantan Tengah</option>
                            <option vale="suluta">Sulawesi Utara</option>
                            <option vale="papua">Papua</option>
                            <option vale="kaliuta">Kalimantan Utara</option>
                            <option value="aceh">Aceh</option>
                            <option value="jambi">Jambi</option>
                            <option value="nustebar">Nusa Tenggara Barat</option>
                            <option value="papbar">Papua Barat</option>
                            <option value="bengkulu">Bengkulu</option>
                            <option value="sulteng">Sulawesi Tenggara</option>
                            <option value="maluku">Maluku</option>
                            <option value="sulbar">Sulawesi Barat</option>
                            <option value="maluta">Maluku Utara</option>
                            <option value="gorontalo">Gorontalo</option>
                            <option value="bandung">Bandung</option>
                            <option value="depok">Depok</option>
                            <option value="medan">Medan</option>
                        </select>

                        {/* jika type belum dipilih, maka tampilkan error */}
                        {isProvinsiError && <Alert>Type wajib diisi!</Alert>}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="status">Status</label>
                        <select name="status" id="status" className={styles.form__input} value={status} onChange={(e)=>setStatus(e.target.value)} >
                            <option value="positif">Positif</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="dirawat">Dirawat</option>
                            <option value="meninggal">Meninggal</option>
                        </select>

                        {/* jika type belum dipilih, maka tampilkan error */}
                        {isStatusError && <Alert>Type wajib diisi!</Alert>}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="jumlah">Jumlah</label>
                        <input id="kasus" type="number" className={styles.form__input} value={jumlah} onChange={handleJumlah} />

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