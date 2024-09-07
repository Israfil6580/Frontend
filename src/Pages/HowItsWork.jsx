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
    <div className="container mx-auto pt-40 text-white overflow-hidden">
      {/* first step */}
      <div className="flex items-center">
        <div className="flex flex-col w-1/2 gap-[21px] items-start">
          <Highlight text={"Freedom Unlocked Daily"} icon={star} />
          <h1 className="text-6xl font-black leading-[78px]">
            Simplify Your Finances with Our Credit Card.
          </h1>
        </div>
        <div className="flex flex-col w-1/2 gap-6 items-start pl-52">
          <p className="text-[22px] text-semi-transparent-white font-normal font-manrope">
            <span className="text-white font-bold">Our credit card</span> app
            streamlines financial management with intuitive features. Start by
            applying directly through our app,
          </p>
          <DefaultButton text={"Get Started"} icon={rightArrow} />
        </div>
      </div>
      {/* second step */}
      <div className="flex gap-6 pt-[120px]">
        <div className="flex flex-col gap-4 w-5/12">
          <p className="font-bold text-2xl leading-[33.6px]">
            Apply for Your Credit Card
          </p>
          <p className="leading-[27.2px] text-semi-transparent-white text-[17px] font-normal lg:w-[456px]">
            Applying for your credit card is quick and easy. Simply download our
            app and complete the secure{" "}
          </p>
          <img
            className="object-cover relative lg:left-28 lg:w-[310px] h-auto pt-12"
            src={cartoonItem}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4 w-7/12">
          <p className="font-bold text-2xl leading-[33.6px]">
            Instant Approval Process
          </p>
          <p className="leading-[27.2px] text-semi-transparent-white text-[17px] font-normal lg:w-[456px]">
            For questions assistance or to report a lost or stolen card, you can
            reach our customer service team
          </p>
          <img
            className="object-cover relative lg:left-20 lg:w-[662px] h-auto pt-16"
            src={card2}
            alt=""
          />
        </div>
      </div>
      {/* third step */}
      <div className="flex gap-40 lg:pt-[131px]">
        <div className="flex flex-col">
          <p className="text-[22px] font-bold leading-[33.6px]">
            Hassle-Free Application
          </p>
          <p className="leading-[27.2px] text-semi-transparent-white lg:w-[465px]">
            If your credit card is lost or stolen, it&apos;s important to report
            it immediately to prevent unauthorized use.
          </p>
          <img className="object-cover" src={account} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="text-[22px] font-bold leading-[33.6px]">
            Apply in Minutes
          </p>
          <p className="leading-[27.2px] text-semi-transparent-white lg:w-[465px]">
            Managing your credit card account is simple with our online account
            management tools. You can view transactions
          </p>
          <img className="object-cover" src={cartoonItem2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;
