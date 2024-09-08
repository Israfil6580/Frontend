import Highlight from "../components/highlight/Highlight";
import applyIcon from "../assets/applyIcon.png";
import DefaultButton from "../components/button/DefaultButton";
import rightArrow from "../assets/rightArrow.svg";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import facebook from "../assets/icon/facebook.png";
import instagram from "../assets/icon/instagram.png";
import linkedin from "../assets/icon/linkedin.png";
import discord from "../assets/icon/discord.png";
const Footer = () => {
  return (
    <div className="bg-footer-bg lg:pt-10 pt-6">
      <div className="container mx-auto text-white xl:px-0 px-6">
        {/* First left Part */}
        <div className="flex lg:flex-row flex-col items-end xl:gap-52 gap-10 pb-16">
          <div className="flex flex-col lg:gap-7 gap-5 lg:w-1/2 w-full lg:items-start">
            <Highlight text={"apply now"} icon={applyIcon} />
            <p className="lg:text-5xl capitalize text-4xl font-black pt-5 xl:leading-normal">
              Apply today unlock financial freedom with us
            </p>
            <p className="lg:text-xl text-[19px] leading-[34px] text-semi-transparent-white">
              Take the first step towards financial freedom. Apply now for{" "}
              <span className="font-bold text-white">MONZO </span>
              credit card benefits.
            </p>
          </div>
          {/* First Right Part */}
          <div className="flex flex-col gap-4 lg:w-1/2 w-full">
            <div>
              <p className="text-white lg:font-medium lg:capitalize uppercase pt-6 font-bold">
                Stay up to date
              </p>
            </div>
            <div className="flex lg:flex-row flex-col gap-4">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full py-[18px] px-6 rounded-custom outline-none text-white bg-white/5 border border-white/10"
              />
              <DefaultButton text={"Subscribe"} icon={rightArrow} />
            </div>
            <div className="flex gap-2 lg:items-center items-start">
              <input
                type="checkbox"
                className="w-5 h-5 text-blue-600 mt-[2px]"
              />
              <p className="text-semi-transparent-white">
                By clicking the button you agree to our{" "}
                <Link className="text-white underline">Privacy Policy</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        <footer className="bg-[#09090A] text-gray-800 lg:pt-28 pt-5">
          <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3  gap-10">
            <aside className="space-y-4 md:col-span-2">
              <img src={logo} alt="" />
              <p className="lg:text-xl text-lg font-normal leading-[34px] text-semi-transparent-white">
                Take the first step towards financial freedom with{" "}
                <span className="font-bold text-white">MONZO</span> credit
                cards. Apply today to unlock .
              </p>
            </aside>
            <nav className="space-y-4 flex flex-col">
              <h6 className="text-xl font-medium leading-[28px] text-[#F0F0F0]">
                Home
              </h6>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                How it works
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                FAQ
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Login
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Branding
              </Link>
            </nav>
            <nav className="space-y-4 flex flex-col">
              <h6 className="text-xl font-medium leading-[28px] text-[#F0F0F0]">
                Company
              </h6>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Small business account
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Beta test
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Citisilver
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                IJPdated
              </Link>
            </nav>
            <nav className="space-y-4 flex flex-col">
              <h6 className="text-xl font-medium leading-[28px] text-[#F0F0F0]">
                Wealth Management
              </h6>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Citi Private Bank
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Mortgage
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Credit Cards
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Personal Banking
              </Link>
            </nav>
            <nav className="space-y-4 flex flex-col">
              <h6 className="text-xl font-medium leading-[28px] text-[#F0F0F0]">
                Help & Support
              </h6>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Contact Us
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Help & FAQS
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Security Canter
              </Link>
              <Link className="hover:underline text-semi-transparent-white leading-6">
                Early Access
              </Link>
            </nav>
          </div>
          <div className="flex lg:flex-row flex-col-reverse gap-4 justify-between items-center py-8 lg:pt-24 pt-10">
            <span className="lg:text-lg text-sm text-semi-transparent-white">
              @Copyright 2024 Echosepectra. All Rights Reserved.
            </span>
            <div className="flex gap-4">
              <Link>
                <img className="object-cover" src={facebook} alt="" />
              </Link>
              <Link>
                <img className="object-cover" src={instagram} alt="" />
              </Link>
              <Link>
                <img className="object-cover" src={linkedin} alt="" />
              </Link>
              <Link>
                <img className="object-cover" src={discord} alt="" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
