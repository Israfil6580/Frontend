import Highlight from "../components/highlight/Highlight";
import star from "../assets/star.svg";
import rightArrow from "../assets/rightArrow.svg";
import DefaultButton from "../components/button/DefaultButton";
import cartoonItem from "../assets/cartoon_item.png";
import cartoonItem2 from "../assets/cartoon_item2.png";
import account from "../assets/account.png";
import card2 from "../assets/card2.png";
const HowItsWork = () => {
  return (
    <div className="container mx-auto lg:pt-40 pt-20 text-white overflow-hidden xl:px-0 px-6">
      {/* first step */}
      <div className="flex lg:flex-row flex-col items-center">
        <div className="flex flex-col lg:w-1/2 w-full gap-[21px] lg:items-start items-center">
          <Highlight text={"Freedom Unlocked Daily"} icon={star} />
          <h1 className="xl:text-6xl text-5xl font-black xl:leading-[78px]">
            Simplify Your Finances with Our Credit Card.
          </h1>
        </div>
        <div className="flex flex-col lg:w-1/2 w-full gap-6 items-start xl:pl-52 pt-5 xl:pt-0">
          <p className="xl:text-[22px] lg:text-xl text-[19px] text-semi-transparent-white font-normal font-manrope">
            <span className="text-white font-bold">Our credit card</span> app
            streamlines financial management with intuitive features. Start by
            applying directly through our app,
          </p>
          <DefaultButton text={"Get Started"} icon={rightArrow} />
        </div>
      </div>
      {/* second step */}
      <div className="flex lg:flex-row flex-col lg:gap-6 gap-10 lg:pt-[120px] pt-20">
        <div className="flex flex-col gap-4 lg:w-5/12 w-full">
          <p className="font-bold text-2xl leading-[33.6px]">
            Apply for Your Credit Card
          </p>
          <p className="leading-[27.2px] text-semi-transparent-white text-[17px] font-normal lg:w-[456px]">
            Applying for your credit card is quick and easy. Simply download our
            app and complete the secure{" "}
          </p>
          <img
            className="object-cover relative lg:left-28 2xl:w-[310px] xl:w-[280px] lg:w-[250px] md:w-[350px] h-auto lg:pt-12 pt-0"
            src={cartoonItem}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 lg:w-7/12 w-full">
          <p className="font-bold text-2xl leading-[33.6px]">
            Instant Approval Process
          </p>
          <p className="leading-[27.2px] text-semi-transparent-white text-[17px] font-normal lg:w-[456px]">
            For questions assistance or to report a lost or stolen card, you can
            reach our customer service team
          </p>
          <img
            className="object-cover relative lg:left-20 2xl:w-[662px] xl:w-[500px] lg:w-[440px] h-auto pt-0 lg:pt-16"
            src={card2}
            alt=""
          />
        </div>
      </div>
      {/* third step */}
      <div className="flex lg:flex-row flex-col pt-20 xl:gap-40 lg:gap-20 gap-10 lg:pt-[131px]">
        <div className="flex flex-col gap-4">
          <p className="lg:text-[22px] text-2xl font-bold leading-[33.6px]">
            Hassle-Free Application
          </p>
          <p className="leading-[27.2px] text-semi-transparent-white lg:w-[465px]">
            If your credit card is lost or stolen, it&apos;s important to report
            it immediately to prevent unauthorized use.
          </p>
          <img className="object-cover" src={account} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="lg:text-[22px] text-2xl font-bold leading-[33.6px]">
            Apply in Minutes
          </p>
          <p className="leading-[27.2px] text-semi-transparent-white lg:w-[465px]">
            Managing your credit card account is simple with our online account
            management tools. You can view transactions
          </p>
          <img
            className="object-cover h-auto xl:w-[332px] lg:w-[290px] w-[400px]"
            src={cartoonItem2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;
