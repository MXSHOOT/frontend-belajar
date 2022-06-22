// Import Halaman Home
import Home from "./pages/Home";
// Import Routes dan Route dari React Router.
import { Route, Routes } from "react-router-dom";
import Global from "./pages/pasien/Global";
import Indonesia from "./pages/pasien/Indonesia";
import Provinsi from "./pages/pasien/Provinsi";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Menggunakan Global Style Component */}
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pasien/Global" element={<Global />} />
            <Route path="/pasien/Indonesia" element={<Indonesia />} />
            <Route path="pasien/Provinsi" element={<Provinsi />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
