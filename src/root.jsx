import Banner from "./Pages/Banner";
import BannerSecond from "./Pages/BannerSecond";
import Faq from "./Pages/Faq";
import Features from "./Pages/Features";
import HowItsWork from "./Pages/HowItsWork";
import Navbar from "./Pages/Navbar";

const root = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Banner />
      <BannerSecond />
      <Features />
      <HowItsWork />
      <Faq />
    </div>
  );
};

export default root;
