import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const [tab, setTab] = useState("buyers");

  const tabs = [
    { id: "buyers", label: "FOR BUYERS" },
    { id: "tenants", label: "FOR TENANTS" },
    { id: "projects", label: "PROJECTS" },
    { id: "searches", label: "POPULAR SEARCHES" },
  ];

  return (
    <footer className="bg-[#1a1c1f] text-white font-sans">
      {/* ================= PART 1 : TABS ================= */}
      <div className="border-b border-gray-700">
        <div className="grid grid-cols-4 mx-auto flex overflow-x-auto no-scrollbar">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-12 py-5 text-[13px] font-medium tracking-wider whitespace-nowrap transition-all duration-300 relative
              ${
                tab === t.id ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {t.label}
              {tab === t.id && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ================= PART 2 : CHANGING CONTENT ================= */}
      <div className="bg-[#1a1c1f]">
        <div className=" mx-auto px-6 py-10 min-h-[240px]">
          {tab === "buyers" && (
            <BuyersContent
              title="Find flats for sale"
              prefix="Flats for sale in"
            />
          )}
          {tab === "tenants" && (
            <BuyersContent
              title="Find flats for rent"
              prefix="Flats for rent in"
            />
          )}
          {tab === "projects" && (
            <BuyersContent title="New Projects" prefix="New projects in" />
          )}
          {tab === "searches" && (
            <BuyersContent title="Popular Localities" prefix="Property in" />
          )}
        </div>
      </div>

      {/* ================= PART 3 : STATIC SECTION ================= */}
      <StaticFooter />
    </footer>
  );
}

/* ------------------ Dynamic Tab Content ------------------ */

const BuyersContent = ({ title, prefix }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 text-[13px]">
    <div className="col-span-full mb-4">
      <h3 className="text-white font-bold">{title}</h3>
    </div>
    <ul className="space-y-2 text-gray-400">
      {["Greater Noida", "Ghaziabad", "Lucknow", "Indore", "Faridabad"].map(
        (i) => (
          <li key={i} className="hover:text-white cursor-pointer">
            {prefix} {i}
          </li>
        )
      )}
    </ul>
    <ul className="space-y-2 text-gray-400">
      {["Mohali", "Coimbatore", "Nagpur", "Surat", "Vadodara"].map((i) => (
        <li key={i} className="hover:text-white cursor-pointer">
          {prefix} {i}
        </li>
      ))}
    </ul>
    <ul className="space-y-2 text-gray-400">
      {[
        "Dehradun",
        "Raipur",
        "Visakhapatnam",
        "Secunderabad",
        "Bhubaneswar",
      ].map((i) => (
        <li key={i} className="hover:text-white cursor-pointer">
          {prefix} {i}
        </li>
      ))}
    </ul>
    <ul className="space-y-2 text-gray-400">
      {["Zirakpur", "Bhopal", "Mira Bhayandar", "Patna", "Nashik"].map((i) => (
        <li key={i} className="hover:text-white cursor-pointer">
          {prefix} {i}
        </li>
      ))}
    </ul>
  </div>
);

/* ------------------ Static Bottom ------------------ */

const StaticFooter = () => (
  <div className="bg-[#1a1c1f] border-t border-gray-800">
    <div className=" mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Purple Banner Card */}
        <div className="lg:col-span-4">
          <div className="bg-gradient-to-br from-[#5d2ed1] to-[#4c24ac] rounded-lg p-6 relative overflow-hidden h-[240px] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-light leading-tight">
                Come home to <br />
                <span className="font-bold text-3xl">Greatness</span>
              </h2>
            </div>

            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-2">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded text-[10px] uppercase font-bold w-fit">
                  Ranked 5th
                </div>
                <p className="text-[11px] leading-tight text-white/80">
                  Best Companies to Work For 2024 by Great Place to Work®
                </p>
              </div>
              <img
                src="https://www.greatplacetowork.in/wp-content/uploads/2023/11/gptw-logo.png"
                alt="GPTW"
                className="h-14 w-auto opacity-90"
              />
            </div>
          </div>
        </div>

        {/* Links Sections */}
        <div className="lg:col-span-5 grid grid-cols-3 gap-6">
          <LinkBlock
            title="COMPANY"
            items={[
              "Careers",
              "About Us",
              "For Partners",
              "Terms",
              "Annual Return",
              "Privacy Policy",
              "Contact Us",
              "Unsubscribe",
              "Merger Hearing",
              "Advertisement",
            ]}
          />
          <LinkBlock
            title="PARTNER SITES"
            items={[
              "realestate.com.au",
              "realtor.com",
              "99.co",
              "collinsdictionary.com",
            ]}
          />
          <LinkBlock
            title="EXPLORE"
            items={["News", "Home Loans", "Sitemap", "International"]}
          />
        </div>

        {/* App Section */}
        <div className="lg:col-span-3">
          <h3 className="text-[12px] font-bold mb-4 tracking-wider">
            EXPERIENCE HOUSING APP ON MOBILE
          </h3>
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white p-1 rounded">
              {/* Placeholder for QR Code */}
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=housing"
                alt="QR"
                className="w-20 h-20"
              />
            </div>
            <div className="flex flex-col gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="h-8 cursor-pointer"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-8 cursor-pointer"
              />
            </div>
          </div>
          <p className="text-[11px] text-gray-500 mb-4">
            Open camera & scan the QR code to Download the App
          </p>

          <div className="flex gap-4 items-center">
            <span className="text-[12px] font-bold text-gray-400">FOLLOW</span>
            <div className="flex gap-4 text-gray-400">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500">
        <p>© 2012–26 Locon Solutions Pvt. Ltd</p>
      </div>
    </div>
  </div>
);

const LinkBlock = ({ title, items }) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-[12px] font-bold tracking-wider text-white mb-1">
      {title}
    </h3>
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="text-[12px] text-gray-400 hover:text-white cursor-pointer transition-colors"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
