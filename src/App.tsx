import "./index.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Benefits from "./components/benefits";
import OurClasses from "./components/ourclasses";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Home from "./components/home";
import SignUpPage from "./components/SignUpPage";
import SignUpButton from "./shared/SignUpButton";
import abc from "./shared/LoginPage";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Home setSelectedPage={setSelectedPage} />
                <Benefits setSelectedPage={setSelectedPage} />
                <OurClasses setSelectedPage={setSelectedPage} />
                <ContactUs setSelectedPage={setSelectedPage} />
                <Footer />
              </main>
            }
          />
          <Route
            path="/home"
            element={
              <main>
                <Home setSelectedPage={setSelectedPage} />
                <Benefits setSelectedPage={setSelectedPage} />
                <OurClasses setSelectedPage={setSelectedPage} />
                <ContactUs setSelectedPage={setSelectedPage} />
                <Footer />
              </main>
            }
          />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
