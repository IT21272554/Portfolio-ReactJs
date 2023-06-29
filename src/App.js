import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
