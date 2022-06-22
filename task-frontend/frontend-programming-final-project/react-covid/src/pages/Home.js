// Import Navbar, Hero, Movies, Footer Component
import Hero from "../components/Hello/index";
import Movies from "../components/Global/Pasiens";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 */
function Home() {
  return (
    <>
      <Hero />
      <Movies title="Latest Movies" />
    </>
  );
}

export default Home;
