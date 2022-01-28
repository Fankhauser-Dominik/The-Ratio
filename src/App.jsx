import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./Pages/Home/Home";
import Pages from "./Pages/Pages/Pages";
import Services from "./Pages/Services/Services";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";
import Contacts from "./Pages/Contacts/Contacts";

//Components
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import GoToTopButton from "./Components/GoToTopButton/GoToTopButton";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <body className="Body">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/pages" index element={<Pages />} />
          <Route path="/services" index element={<Services />} />
          <Route path="/portfolio" index element={<Portfolio />} />
          <Route path="/blog" index element={<Blog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </body>
      <GoToTopButton />
      <Footer />
    </div>
  );
}

export default App;
