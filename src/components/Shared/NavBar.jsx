import { useEffect, useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";

const BUYERS_LINKS = [
  {
    title: "Top Metropolitans in India",
    links: [
      "Properties for sale in Mumbai",
      "Properties for sale in Bangalore",
      "Properties for sale in New Delhi",
      "Properties for sale in Hyderabad",
      "Properties for sale in Chennai",
      "Properties for sale in Kolkata",
      "Properties for sale in Gurgaon",
    ],
  },
  {
    title: "Top Emerging Cities in India",
    links: [
      "Properties for sale in Pune",
      "Properties for sale in Thane",
      "Properties for sale in Ahmedabad",
      "Properties for sale in Navi Mumbai",
      "Properties for sale in Noida",
      "Properties for sale in Jaipur",
    ],
  },
  {
    title: "Top Projects in India",
    links: [
      "Raunak Bliss",
      "Disha Pursuit Of The Elements",
      "DLF One Midtown",
      "Aparna Zenon",
      "Pacifica Aurum Villas",
      "Arbanique City",
      "Birla Navya Gurugram",
    ],
  },
  {
    title: "Top Developers in India",
    links: [
      "Reputed Builder",
      "Sobha Limited",
      "Goyal Builders",
      "R. V. Nirman Private Limited",
      "Casagrand Builder Private Limited",
      "Eden Group",
      "Signature Global",
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#3e23a1] shadow-lg rounded-b-[50px]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto h-20 px-6 flex items-center justify-between text-white">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="bg-[#f3ca40] w-6 h-6 rounded-sm flex items-center justify-center">
            <div className="border-t-4 border-l-4 border-[#3e23a1] w-3 h-3 rotate-45 translate-y-0.5" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            HOUSING<span className="font-light text-sm">.COM</span>
          </span>
        </div>

        {/* Dynamic Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium">
          {[
            { label: "For Buyers", id: "buyers" },
            { label: "For Tenants", id: "tenants" },
            { label: "For Sellers", id: "sellers" },
            { label: "Services", id: "services" },
            { label: "News & Guide", id: "news" },
          ].map((item) => (
            <div
              key={item.id}
              className="relative group py-8"
              onMouseEnter={() => setActiveMenu(item.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
                {item.label}
                <FiChevronDown
                  className={`transition-transform ${
                    activeMenu === item.id ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Mega Dropdown for Buyers */}
              {item.id === "buyers" && activeMenu === "buyers" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1100px] bg-white text-gray-800 shadow-2xl rounded-xl p-8 flex justify-between animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Small arrow on top of dropdown */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />

                  {BUYERS_LINKS.map((col, idx) => (
                    <div key={idx} className="flex flex-col gap-4 w-1/4">
                      <h4 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">
                        {col.title}
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {col.links.map((link) => (
                          <li
                            key={link}
                            className="text-[13px] hover:text-[#5e23dc] cursor-pointer transition-colors leading-tight"
                          >
                            {link}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <span className="hidden xl:block text-[13px] cursor-pointer hover:underline">
            Download App
          </span>

          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded text-[12px] font-bold cursor-pointer hover:bg-white/20">
            Post Property{" "}
            <span className="bg-[#ff4d4d] text-[10px] px-1 rounded-sm">
              FREE
            </span>
          </div>

          {/* Profile/Menu Toggle */}
          <div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 text-gray-800 cursor-pointer border border-gray-200">
            <FiMenu className="text-lg" />
            <div className="w-7 h-7 bg-[#5e23dc] rounded-full flex items-center justify-center text-white text-xs">
              <span className="scale-75">👤</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
