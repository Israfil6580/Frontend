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
    <div className="bg-footer-bg pt-20">
      <div className="container mx-auto text-white">
        {/* First left Part */}
        <div className="flex items-end 2xl:gap-56 pb-16">
          <div className="flex flex-col gap-7 w-1/2 items-start">
            <Highlight text={"apply now"} icon={applyIcon} />
            <p className="text-[50px] font-black">
              Apply today unlock financial freedom with us
            </p>
            <p className="text-xl leading-[34px] text-semi-transparent-white">
              Take the first step towards financial freedom. Apply now for{" "}
              <span className="font-bold text-white">MONZO </span>
              credit card benefits.
            </p>
          </div>
          {/* First Right Part */}
          <div className="flex flex-col gap-4 w-1/2">
            <div>
              <p className="text-white font-medium">Stay up to date</p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-[18px] px-6 rounded-custom outline-none text-white bg-white/5 border border-white/10"
              />
              <DefaultButton text={"Subscribe"} icon={rightArrow} />
            </div>
            <div>
              <p className="text-semi-transparent-white">
                By clicking the button you agree to our{" "}
                <Link className="text-white underline">Privacy Policy</Link>{" "}
              </p>
            </div>
          </div>
        </div>
        <footer className="bg-[#09090A] text-gray-800 pt-28">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
            <aside className="space-y-4 md:col-span-2">
              <img src={logo} alt="" />
              <p className="text-xl font-normal leading-[34px] text-semi-transparent-white">
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
          <div className="flex justify-between items-center py-8 pt-24">
            <span className="text-lg text-semi-transparent-white">
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
