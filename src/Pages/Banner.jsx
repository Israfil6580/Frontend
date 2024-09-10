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
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import greenStar from "../assets/greenStar.png";
const Banner = () => {
  return (
    <>
      <div className="relative overflow-hidden pt-10">
        {/* Background Blurred Elements */}
        <div className="absolute inset-0 z-0 flex justify-between items-center">
          <div>
            <div className="flex">
              <div className="absolute top-64 left-40 w-custom h-custom flex-shrink-0 rounded-customGradient opacity-50 bg-custom-blue blur-custom"></div>
              <div className=" absolute top-48 right-80 w-custom h-custom flex-shrink-0 rounded-customGradient opacity-80 bg-custome-deep-blue blur-custom"></div>
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
          <h1 className="lg:w-[1022px] text-white text-center text-[40px] xl:text-[80px] lg:text-7xl font-black xl:leading-[104px] leading-[58px] pt-7 lg:px-0 px-6 capitalize">
            Unlock Financial Freedom with Premium Card
          </h1>
          <p className="lg:w-[758px] text-semi-transparent-white font-manrope lg:text-[22px] text-lg font-normal leading-[37.4px] lg:pt-8 pt-4 lg:px-0 px-6">
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
            <div className="absolute flex justify-between items-center lg:w-[410px] w-72 bg-black lg:top-40 top-32 lg:left-1 xl:left-0 left-2 lg:rounded-[19.54px] p-[19.55px] rounded-lg">
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
      <div className="container mx-auto text-white flex lg:flex-row flex-col items-center lg:10 xl:gap-28 gap-10 lg:pt-10 pt-20 px-6">
        {/* first */}
        <div className="flex flex-col gap-3 lg:border-none lg:py-[60px] py-3">
          <div className="flex gap-4 items-center pb-2">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full border border-white"
                  src={person1}
                  alt="Avatar 1"
                />
              </div>
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full border border-white"
                  src={person2}
                  alt="Avatar 2"
                />
              </div>
              <div className="relative">
                <img
                  className="w-12 h-12 rounded-full border border-white"
                  src={person3}
                  alt="Avatar 3"
                />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-4xl lg:text-[50px]">
                80K
              </span>
            </div>
          </div>
          <div>
            <p className="lg:text-xl text-[19px] font-manrope text-semi-transparent-white leading-[34px]">
              Users are the backbone of any application and their needs is
              crucial{" "}
            </p>
          </div>
        </div>
        {/* second */}
        <div className="lg:py-[60px] py-3">
          <div className="flex gap-3 items-center pb-4">
            <img
              className="object-cover lg:h-auto lg:w-auto h-8 w-8"
              src={greenStar}
              alt=""
            />
            <span className="font-extrabold text-4xl lg:text-[50px]">5.8</span>
          </div>
          <div>
            <p className="lg:text-xl text-[19px] font-manrope text-semi-transparent-white leading-[34px]">
              Positive ratings by Pulse user around the wortd! Check the review
              here!
            </p>
          </div>
        </div>
        {/* third */}
        <div className="lg:py-[60px] py-3">
          <div className="flex lg:gap-3 gap-4 items-center pb-4">
            <span className="font-medium text-4xl">Active User</span>
            <span className="lg:text-[50px] text-4xl font-black">65k</span>
          </div>
          <div>
            <p className="lg:text-xl text-[19px] font-manrope text-semi-transparent-white leading-[34px]">
              Active users are essential for the vitality and success of any
              application.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
