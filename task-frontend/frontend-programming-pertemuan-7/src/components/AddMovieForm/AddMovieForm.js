import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(){
    const {movies, setMovies} = props;

    //State title
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [link, setLink] = useState("");
    const [select, setSelect] = useState("");

    //Rendering error
    const [isTitleError, setIsTitleError] = useState("");
    const [isDateError, setIsDateError] = useState("");
    const [isLinkError, setIsLinkError] = useState("");
    const [isSelectError, setIsSelectError] = useState("");

    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleDate(e){
        setDate(e.target.value);
    }

    function handleLink(e){
        setLink(e.target.value);
    }

    function handleSelect(e){
        setSelect(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();

        if(title === ""){
            setIsTitleError(true);
        }

        else if(date === ""){
            setIsDateError(true);
        }
        else if (link === ""){
            setIsLinkError(true);
        }
        else if (select === ""){
            setIsSelectError(true);
        }

        else{
            const movie = {
                id : nanoid(),
                title: title,
                year: date,
                link : link,
                select : select,
                type: "Movie",
                poster: "https://picsum.photos/300/400",
            };
    
            setMovies([...movies, movie]);

            setIsTitleError(false);
            setIsDateError(false);
            setIsLinkError(false);
            setIsSelectError(false);
        }
    }
    return(
        <div className={styles.container}>
            <section className={styles.Form}>
                <div className={styles.Form__left}>
                    <img className={styles.Form__image} src="https://picsum.photos/300/400"  />
                </div>
                <div className={styles.Form__right}>
                    <h1 className={styles.Form__title}>Add Movie</h1>
                    <form  className={styles.Form__add} onSubmit={handleSubmit} >

                        <div className={styles.Form__control}>
                            <p htmlFor="title">Title</p>
                            <input className={styles.Form__inputone} type="text" value={title} onChange={handleTitle} />
                            { isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        
                        <div className={styles.Form__control}>
                            <p>Year</p>
                            <input className={styles.Form__inputtwo} type="date" value={date} onChange={handleDate} />
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}                
                        </div>
                        <div className={styles.Form__control}>
                            <p>Link Gambar</p>
                            <input className={styles.Form__inputhree} type="text" value={link} onChange={handleLink}/>
                            {isLinkError && <Alert>Link Wajib Diisi</Alert>}
                        </div>

                        <div className={styles.Form__control}>
                            <p>Select Movie</p>
                            <select name="select" id="" onChange={handleSelect} value={select}>
                                <option value=""></option>
                                <option value="Horor">Horor</option>
                                <option value="Romance">Romance</option>
                                <option value="Survival">Survival</option>
                            </select>
                            {isSelectError && <Alert>Select Wajib Diisi</Alert>}                            
                        </div> 

                        <button className={styles.Form__button} >Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;