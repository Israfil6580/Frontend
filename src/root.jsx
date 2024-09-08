import Banner from "./Pages/Banner";
import BannerSecond from "./Pages/BannerSecond";
import Faq from "./Pages/Faq";
import Features from "./Pages/Features";
import Footer from "./Pages/Footer";
import HowItsWork from "./Pages/HowItsWork";
import Navbar from "./Pages/Navbar";

const Root = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Banner />
      <BannerSecond />
      <Features />
      <HowItsWork />
      <Faq />
      <Footer />
    </div>
  );
};

export default Root;
