import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Share/Footer";
import Navbar from "./Pages/Share/Navbar";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
