import styles from "./AddMovieForm.module.css";

function AddMovieForm(){
    return(
        <div className={styles.container}>
            <div className={styles.form__left}>
                <img src="https://picsum.photos/600/400" alt="" className={styles.form__image} />
            </div>

            <div className={styles.form__right}>
                <h2 className={styles.form__title}>Add Movie</h2>

                <form action="#">
                    <div className={styles.form__control}>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" className={styles.form__input} />
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="year">Year</label>
                        <input id="year" type="text" className={styles.form__input} />
                    </div>
                    <button type="submit" className={styles.form__button}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddMovieForm;