import "./main.scss";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import AboutMe from "./components/AboutMe/AboutMe";
import Services from "./components/Services/Services";
import ExclusiveServices from "./components/ExclusiveServices/ExclusiveServices";
import Skills from "./components/Skills/Skills";
import Numbers from "./components/Numbers/Numbers";
import LatestBlog from "./components/LatestBlog/LatestBlog";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <AboutMe />
      <Services />
      <ExclusiveServices />
      <Skills />
      <Numbers />
      <LatestBlog />
      <Footer />
    </>
  );
}

export default App;
