import styles from "./AddCovidForm.module.css";
import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import Alert from "../Alert/Alert";
import paint from "../Img/paint.png";

console.log(paint);

function AddCovidForm(props){
    const {pasiens, setPasiens} = props;
    
    const [formData, setFormData] = useState({
        provinsi: "",
        status: "",
        jumlah: "",
      });

    // buat  fungsi handleProvinsi
    function handleChange(e) {
        // Destructing name dan value.
        const { name, value } = e.target;
    
        /**
         * Mengupdate state berupa object:
         * - Menggunakan spread operator:
         * - Update property berdasarkan apapun nilai name.
         */
        setFormData({
          ...formData,
          [name]: value,
        });
      }
      function validate() {
        if (provinsi === "") {
            setIsProvinsiError(true);
            return false;
        } else if (status === "") {
            setIsStatusError(true);
            setIsProvinsiError(false);
          return false;
        } else if (jumlah === "") {
            setIsJumlahError(true);
            setIsStatusError(false);
          return false;
        } else {
            setIsProvinsiError(false);
            setIsStatusError(false);
          return true;
        }
      }
    

    // state untuk error input form
    const [isProvinsiError, setIsProvinsiError] = useState(false);
    const [isStatusError, setIsStatusError] = useState(false);
    const [isJumlahError, setIsJumlahError] = useState(false);

    function addPasien() {
        const pasien = {
          id: nanoid(),
          provinsi: provinsi,
          status: status,
          jumlah: jumlah,
        };
    
        // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
        setPasiens([...pasiens, pasien]);
      }
    
      function handleSubmit(e) {
        e.preventDefault();
    
        validate() && addPasien();
      }
      const {provinsi, status, jumlah} = formData;
    
      return (
        <div className={styles.container}>
            <section className={styles.form}>
            <div className={styles.form__left}>
                <img src={paint} alt="" className={styles.form__image} />
            </div>
  

            <div className={styles.form__right}>
                <h2 className={styles.form__title}>Form Covid</h2>

                <form onSubmit={handleSubmit}>

                    <div className={styles.form__control}>
                        <label label htmlFor="provinsi" className={styles.form__label}>Provinsi</label>
                        <select name="provinsi" id="provinsi" className={styles.form__input} value={provinsi} onChange={handleChange}>
                            <option value="jakarta">Jakarta</option>
                            <option value="jabar">Jawa Barat</option>
                            <option value="jateng">Jawa Tengah</option>
                            <option value="jatim">Jawa Timur</option>
                            <option value="banten">Banten</option>
                            <option value="yogyakarta">Yogyakarta</option>
                            <option value="riau">Riau</option>
                            <option value="bali">Bali</option>
                            <option value="sumtar">Sumatera Utara</option>
                            <option value="sumsel">Sumatera Selatan</option>
                            <option value="sultan">Sulawesi Selatan</option>
                            <option value="sulbar">Sumatera Barat</option>
                            <option value="nustetim">Nusa Tenggara Timur</option>
                            <option value="bangbel">Bangka Belitung</option>
                            <option value="lampung">Lampung</option>
                            <option value="kepri">Kepulauan Riau</option>
                            <option value="kasel">Kalimantan Selatan</option>
                            <option value="kalitim">Kalimantan Timur</option>
                            <option value="kalibar">Kalimantan Barat</option>
                            <option value="sulteng">Sulawesi Tengah</option>
                            <option value="kaliteng">Kalimantan Tengah</option>
                            <option value="suluta">Sulawesi Utara</option>
                            <option value="papua">Papua</option>
                            <option value="kaliuta">Kalimantan Utara</option>
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
                        <select name="status" id="status" className={styles.form__input} value={status} onChange={handleChange} >
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
                        <input id="kasus" type="number" name="jumlah" className={styles.form__input} value={jumlah} onChange={handleChange}/>

                        {/* jika isDateError true, maka tampilkan error */}
                        {isJumlahError && <Alert>jumlah wajib diisi!</Alert>}
                    </div>

                    <div>
                        <button className={styles.form__button}>Add Pasien</button>
                    </div>
                </form>
            </div>
            </section>
        </div>
    );
}

export default AddCovidForm;