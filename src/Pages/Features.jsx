import feature from "../assets/feature.png";
import featureIcon1 from "../assets/f-icon1.svg";
import featureIcon2 from "../assets/f-icon2.svg";
import featureIcon3 from "../assets/f-icon3.svg";
import featureIcon4 from "../assets/f-icon4.svg";

const Features = () => {
  return (
    <div className="container mx-auto text-white lg:pt-36 pt-20 lg:px-0 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 grid-rows-6 lg:gap-12">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-6 flex flex-col lg:gap-[130px] gap-10 self-center">
          {/* first feature */}
          <div className="flex gap-[15px] flex-col border border-semi-transparent-white p-4 rounded-2xl">
            <img
              className="object-fill h-20 w-20 pb-[13px]"
              src={featureIcon1}
              alt="Feature 1"
            />
            <p className="font-bold text-2xl leading-[33.6px]">
              Your Trusted Financial Partner in Credit Excellence
            </p>
            <p className="leading-[27.2px] text-semi-transparent-white text-[17px] font-normal">
              With a commitment to transparency, innovation, and personalized
              service, we strive to empower individuals and businesses{" "}
            </p>
          </div>
          {/* second Feature */}
          <div className="flex gap-[15px] flex-col border border-semi-transparent-white p-4 rounded-2xl">
            <img
              className="object-fill h-20 w-20 pb-[13px]"
              src={featureIcon2}
              alt="Feature 2"
            />
            <p className="font-bold text-2xl leading-[33.6px]">
              Empowering Your Financial Journey with Smart Solutions
            </p>
            <p className="leading-[27.2px] text-semi-transparent-white text-[17px] font-normal">
              Whether you&apos;re looking to build credit, manage expenses or
              explore new financial opportunities,
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-6 justify-self-center flex items-center lg:p-0 p-4">
          <img
            src={feature}
            className="object-cover max-w-full h-auto"
            alt="Features"
          />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-6 flex flex-col lg:gap-[130px] gap-10 self-center">
          {/* third feature */}
          <div className="flex gap-[15px] flex-col border border-semi-transparent-white p-4 rounded-2xl">
            <img
              className="object-fill h-20 w-20 pb-[13px]"
              src={featureIcon3}
              alt="Feature 3"
            />
            <p className="font-bold text-2xl leading-[33.6px]">
              Pioneering Innovators in Advanced Credit Solutions
            </p>
            <p className="leading-[27.2px] text-semi-transparent-white text-[17px] font-normal">
              our dedicated team is here to provide expert guidance and support
              every step of the way. Discover the difference
            </p>
          </div>
          {/* fourth feature */}
          <div className="flex gap-[15px] flex-col border border-semi-transparent-white p-4 rounded-2xl">
            <img
              className="object-fill h-20 w-20 pb-[13px]"
              src={featureIcon4}
              alt="Feature 4"
            />
            <p className="font-bold text-2xl leading-[33.6px]">
              Building Trust and Ensuring Financial Freedom Together
            </p>
            <p className="leading-[27.2px] text-semi-transparent-white text-[17px] font-normal">
              working with a partner who prioritizes your financial success and
              To The trustworthiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
