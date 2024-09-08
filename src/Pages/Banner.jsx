import Highlight from "../components/highlight/Highlight";
import star from "../assets/star.svg";
import DefaultButton from "../components/button/DefaultButton";
import rightArrow from "../assets/rightArrow.svg";
import TransparentButton from "../components/button/TransparentButton";
import iphone from "../assets/banner.png";
import userIcon from "../assets/user.png";
import arrowUpDown from "../assets/arrowUpDown.png";
import card from "../assets/card.png";
import icon1 from "../assets/banner_icon1.png";
import icon2 from "../assets/banner_icon2.png";
import profile from "../assets/profile.png";
import arrowRight from "../assets/arrowRight.png";
const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Blurred Elements */}
      <div className="absolute inset-0 z-0 flex justify-between items-center">
        <div>
          <div className="flex">
            <div className="absolute top-56 left-40 w-custom h-custom flex-shrink-0 rounded-customGradient opacity-50 bg-custom-blue blur-custom"></div>
            <div className=" absolute top-20 right-80 w-custom h-custom flex-shrink-0 rounded-customGradient opacity-80 bg-custome-deep-blue blur-custom"></div>
          </div>
          <div>
            <div className="absolute bottom-20 right-[40rem] w-smallGradient h-smallGradient flex-shrink-0 rounded-smallGradient opacity-70 bg-[#0FC9F8] blur-custom"></div>
            <div className="absolute bottom-0 right-[28rem] w-smallGradient h-smallGradient flex-shrink-0 rounded-smallGradient opacity-70 bg-[#C3F3FF] blur-custom"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center container mx-auto pt-[100px]">
        <Highlight text={"Freedom Unlocked Daily"} icon={star} />
        <h1 className="lg:w-[1022px] text-white text-center text-[80px] font-black leading-[104px] pt-7">
          Unlock Financial Freedom with Premium Card
        </h1>
        <p className="lg:w-[758px] text-semi-transparent-white font-manrope text-[22px] font-normal leading-[37.4px] pt-8">
          Pay Your Bills Smart helps you effortlessly monitor your credit and
          manage your finances with a single tap for better financial
          management.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-10">
          <TransparentButton text={"Contact Us"} icon={rightArrow} />
          <DefaultButton text={"Get Started"} icon={rightArrow} />
        </div>
        {/* iphone Section */}
        <div className="relative w-full flex justify-center pt-[74px]">
          <img className="object-cover w-[605px] h-auto" src={iphone} alt="" />
          <div className="absolute flex justify-between items-center w-[410px] bg-black top-40 left-0 rounded-[19.54px] p-[19.55px]">
            {/* small card : personal account */}
            <div className="flex gap-[14px] items-center">
              <img src={userIcon} alt="" />
              <span className="text-white text-xl font-normal leading-[22.52px]">
                Personal Account
              </span>
            </div>
            <div>
              <img className="object-cover" src={arrowUpDown} alt="" />
            </div>
          </div>
          {/* card after personal account */}
          <div className="absolute left-[8%] bottom-9">
            <img src={card} alt="" />
          </div>
          {/* two Icon */}
          <div className="absolute flex gap-5 top-[35%] right-[19%]">
            <img className="object-cover" src={icon1} alt="" />
            <img className="object-cover" src={icon2} alt="" />
          </div>
          {/* Jerome Bell card */}
          <div className="absolute flex justify-between items-center w-[500px] px-7 py-4 right-[5%] bottom-[20%] bg-black rounded-[16.66px]">
            <div className="flex items-center gap-4">
              <img src={profile} alt="" />
              <div className="text-white flex flex-col items-start">
                <span className="text-[22.222px] font-semibold leading-[26.667px]">
                  Jerome Bell
                </span>
                <span className="font-normal text-semi-transparent-white">
                  Monzo Account
                </span>
              </div>
            </div>
            <img className="object-cover h-7 w-7" src={arrowRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
