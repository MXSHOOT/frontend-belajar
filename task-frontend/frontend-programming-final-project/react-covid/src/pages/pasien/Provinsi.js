import AddCovidForm from "../../components/Form/AddCovidForm";
import Hello from "../../components/Hello/index";
import Provinces from "../../components/Provinces/Pasiens";

function Provinsi() {
  // Tidak perlu props movies (props drilling)
  return (
    <>
      <Hello />
      <h1>Hello Geeks!!!</h1>
      <Provinces /> 
      <AddCovidForm />
    </>
  );
}

export default Provinsi;
