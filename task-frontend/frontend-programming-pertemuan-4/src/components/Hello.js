const Hello = ({nama, major}) => {
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {nama}, Frontend Engineer</p>
            <p>Jurusan { major }</p>
        </div>
    );
}

export default Hello;