import Navigationbar from "./components/Navigationbar";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navigationbar />
      <Header />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
