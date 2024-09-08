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
      <div className="relative z-10 flex flex-col items-center text-center container mx-auto lg:pt-[100px] pt-14">
        <Highlight text={"Freedom Unlocked Daily"} icon={star} />
        <h1 className="lg:w-[1022px] text-white text-center text-5xl lg:text-[80px] font-black lg:leading-[104px] leading-[58px] pt-7 lg:px-0 px-6">
          Unlock Financial Freedom with Premium Card
        </h1>
        <p className="lg:w-[758px] text-semi-transparent-white font-manrope lg:text-[22px] text-[19px] font-normal leading-[37.4px] pt-8 lg:px-0 px-6">
          Pay Your Bills Smart helps you effortlessly monitor your credit and
          manage your finances with a single tap for better financial
          management.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-10">
          <TransparentButton text={"Contact Us"} icon={rightArrow} />
          <DefaultButton text={"Get Started"} icon={rightArrow} />
        </div>
        {/* iphone Section */}
        <div className="relative w-full flex justify-center pt-[74px] px-6">
          <img
            className="object-cover lg:w-[605px] h-auto"
            src={iphone}
            alt=""
          />
          <div className="absolute flex justify-between items-center lg:w-[410px] w-72 bg-black lg:top-40 top-32 lg:left-0 left-2 lg:rounded-[19.54px] p-[19.55px] rounded-lg">
            {/* small card : personal account */}
            <div className="flex gap-2 lg:gap-[14px] items-center">
              <img
                className="h-7 w-7 lg:h-auto lg:w-auto"
                src={userIcon}
                alt=""
              />
              <span className="text-white text-lg lg:text-xl font-normal leading-[22.52px]">
                Personal Account
              </span>
            </div>
            <div>
              <img
                className="object-cover lg:h-auto lg:w-auto h-3 w-3"
                src={arrowUpDown}
                alt=""
              />
            </div>
          </div>
          {/* card after personal account */}
          <div className="absolute left-[8%] bottom-9 lg:block hidden">
            <img src={card} alt="" />
          </div>
          {/* two Icon */}
          <div className="absolute lg:flex gap-5 top-[35%] right-[19%] hidden">
            <img className="object-cover" src={icon1} alt="" />
            <img className="object-cover" src={icon2} alt="" />
          </div>
          {/* Jerome Bell card */}
          <div className="absolute flex justify-between items-center w-80 lg:w-[500px] lg:px-7 px-5 lg:py-4 py-2 lg:right-[5%] right-2 lg:bottom-[20%] bottom-[2px] bg-black rounded-lg lg:rounded-[16.66px]">
            <div className="flex items-center gap-4">
              <img
                className="h-9 w-9 lg:w-auto lg:h-auto"
                src={profile}
                alt=""
              />
              <div className="text-white flex flex-col items-start">
                <span className="lg:text-[22.222px] text-xl font-semibold leading-[26.667px]">
                  Jerome Bell
                </span>
                <span className="font-normal text-sm text-semi-transparent-white">
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
