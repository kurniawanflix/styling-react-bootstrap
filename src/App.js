import Navigationbar from "./components/Navbar";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbroton";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navigationbar />
      <Header />
      <div className="container">
        <Jumbotron />
      </div>
      <Footer />
    </div>
  );
};

export default App;
