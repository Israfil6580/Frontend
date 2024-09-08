// Root.js
import Banner from "./Pages/Banner";
import Faq from "./Pages/Faq";
import Features from "./Pages/Features";
import Footer from "./Pages/Footer";
import HowItsWork from "./Pages/HowItsWork";
import Navbar from "./Pages/Navbar";

const Root = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div id="banner">
        <Banner />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="how-its-work">
        <HowItsWork />
      </div>
      <div id="faqs">
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
