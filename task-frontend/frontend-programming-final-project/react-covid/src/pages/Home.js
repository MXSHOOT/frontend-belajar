import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import Global from "../components/Global/Pasiens";
import CovidForm from '../components/Form/AddCovidForm';
import Provinces from "../components/Provinces/Pasiens";

function Main() {
  return (
    <main>
      <Hello />
      <Global /> 
      <h1>Hello Geeks!!!</h1>
      <Provinces /> 
      <CovidForm />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
