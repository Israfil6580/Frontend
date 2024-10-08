import Highlight from "../components/highlight/Highlight";
import quickAnswerIcon from "../assets/blackboard.png";
import { useState } from "react";
import down from "../assets/down.svg";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  return (
    <div className="container mx-auto text-white lg:pb-32 pb-20 pt-20 lg:px-0 px-6">
      <div className="flex flex-col lg:gap-6 gap-4 items-center">
        <Highlight text={"Quick Answers"} icon={quickAnswerIcon} />
        <h1 className="xl:text-6xl lg:text-5xl text-4xl font-black xl:leading-[78px]">
          Frequently Asked Questions{" "}
        </h1>
        <p className="text-semi-transparent-white lg:text-[22px] text-[19px] xl:leading-[40.8px] lg:w-[876px] font-manrope lg:text-center text-left">
          Explore essential answers to common inquiries about our credit card
          services and manage your financial journey with confidence.
        </p>
      </div>
      <div className="w-full flex flex-col pt-10">
        {/* Accordion Item 1 */}
        <div>
          <div
            className="cursor-pointer px-0 lg:px-9 lg:py-6 py-4 lg:text-[22px] text-xl font-medium flex justify-between items-center"
            onClick={() => toggleAccordion(0)}
          >
            How do I apply for a credit card with MONJO
            <span
              className={`transform transition-transform duration-200 ${
                activeIndex === 0 ? "rotate-180" : ""
              }`}
            >
              <img className="object-cover" src={down} alt="" />
            </span>
          </div>
          <div
            className={`transition-all duration-500 ${
              activeIndex === 0
                ? "max-h-[450px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <p className="text-lg text-semi-transparent-white px-0 lg:px-6">
                Applying for a credit card is easy! Simply visit our website and
                follow the online application process. You can also visit one of
                our branches for in-person assistance.
              </p>
            </div>
          </div>
        </div>
        {/* Accordion Item 2 */}
        <div className="mt-2">
          <div
            className="cursor-pointer px-0 lg:px-9 lg:py-6 py-4 lg:text-[22px] text-xl font-medium flex justify-between items-center"
            onClick={() => toggleAccordion(1)}
          >
            How do I apply for a credit card with MONJO
            <span
              className={`transform transition-transform duration-200 ${
                activeIndex === 1 ? "rotate-180" : ""
              }`}
            >
              <img className="object-cover" src={down} alt="" />
            </span>
          </div>
          <div
            className={`transition-all duration-500 ${
              activeIndex === 1
                ? "max-h-[450px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <p className="text-lg text-semi-transparent-white px-0 lg:px-6">
                Applying for a credit card is easy! Simply visit our website and
                follow the online application process. You can also visit one of
                our branches for in-person assistance.
              </p>
            </div>
          </div>
        </div>
        {/* Accordion Item 3 */}
        <div className="mt-2">
          <div
            className="cursor-pointer px-0 lg:px-9 lg:py-6 py-4 lg:text-[22px] text-xl font-medium flex justify-between items-center"
            onClick={() => toggleAccordion(2)}
          >
            What credit cards do you offer
            <span
              className={`transform transition-transform duration-200 ${
                activeIndex === 2 ? "rotate-180" : ""
              }`}
            >
              <img className="object-cover" src={down} alt="" />
            </span>
          </div>
          <div
            className={`transition-all duration-500 ${
              activeIndex === 2
                ? "max-h-[450px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <p className="text-lg text-semi-transparent-white px-0 lg:px-6">
                At Monzo, we offer a range of credit cards tailored to suit
                different needs. Whether you&apos;re looking for a card with
                rewards, low-interest rates, or one that helps you build your
                credit, we have options. Our cards come with competitive rates,
                cashback rewards, and no annual fees. Plus, you can manage
                everything directly through the Monzo app, with real-time
                spending notifications and budgeting tools.
              </p>
            </div>
          </div>
        </div>

        {/* Accordion Item 4 */}
        <div className="mt-2">
          <div
            className="cursor-pointer px-0 lg:px-9 lg:py-6 py-4 lg:text-[22px] text-xl font-medium flex justify-between items-center"
            onClick={() => toggleAccordion(3)}
          >
            How can I check my credit card application status
            <span
              className={`transform transition-transform duration-200 ${
                activeIndex === 3 ? "rotate-180" : ""
              }`}
            >
              <img className="object-cover" src={down} alt="" />
            </span>
          </div>
          <div
            className={`transition-all duration-500 ${
              activeIndex === 3
                ? "max-h-[450px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <p className="text-lg text-semi-transparent-white px-0 lg:px-6">
                You can check your credit card application status by calling the
                customer service number for the issuer. Most credit card issuers
                also let you check your application status online. (In some
                cases, this is an option only if you applied for the card online
              </p>
            </div>
          </div>
        </div>
        {/* Accordion Item 5 */}
        <div className="mt-2">
          <div
            className="cursor-pointer lg:py-6 py-4 px-3 lg:px-9 lg:text-[22px] text-xl font-medium flex justify-between items-center bg-[#231DDF] rounded-2xl"
            onClick={() => toggleAccordion(4)}
          >
            What should I do if my credit card is lost or stolen
            <span
              className={`transform transition-transform duration-200 ${
                activeIndex === 4 ? "rotate-180" : ""
              }`}
            >
              <img className="object-cover" src={down} alt="" />
            </span>
          </div>
          <div
            className={`transition-all duration-500 ${
              activeIndex === 4
                ? "max-h-[450px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4">
              <p className="text-lg text-semi-transparent-white px-0 lg:px-6">
                Once you realise that your credit card is stolen or misused, you
                must immediately call your bank and inform them about the loss
                of your credit card. The bank will then block your card which
                will prevent anyone from misusing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
