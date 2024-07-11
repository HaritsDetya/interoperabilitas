import { useState } from "react";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const navItems = [
  { text: "Beranda" },
  { text: "Pengguna" },
  { text: "Data Master", hasHighlight: true, href: `/dashboard` },
  { text: "Data Pictures" },
  { text: "Data Videos" },
  { text: "Data Member" },
  { text: "Data Wilayah" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = (event) => {
    // Logic for logout
    event.preventDefault();
    router.push("/");
  }
  return (
    <div className="flex gap-5 justify-between self-stretch py-3.5 pr-11 pl-5 w-full text-sm text-white rounded-3xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <nav className="flex w-full text-white rounded-3xl py-3 px-5 bg-gradient-to-r from-[#188D88] to-[#16B3AC] gap-5 justify-between items-center max-md:flex-wrap">
        <a href="#home" className="flex items-center" aria-label="Home">
          <img
            loading="lazy"
            src="/image/logo_gjls.svg"
            alt="Logo"
            className="shrink-0 self-stretch max-w-full aspect-[2.22] w-[180px]"
          />
        </a>
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`self-stretch my-auto ${
              item.hasHighlight ? "flex flex-col" : ""
            }`}
          >
            <a href={item.href}>{item.text}</a>
            {item.hasHighlight && (
              <div className="shrink-0 mt-1.5 bg-yellow-400 rounded-xl h-[3px]" />
            )}
          </div>
        ))}
        <div className="relative">
          <div
            className="flex items-center space-x-4 cursor-pointer bg-white rounded-full px-[1px] py-[1px]"
            onClick={toggleDropdown}
          >
            <Image
              className="rounded-full"
              src="/image/profile.png"
              alt="User Avatar"
              width={44}
              height={44}
            />
          </div>
          {isOpen && (
            <div className="absolute mt-1 w-20 rounded-md shadow-lg z-50">
              <div
                className="block text-center hover:cursor-pointer py-2 text-xs bg-red-500 hover:bg-red-600 text-white rounded-md"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
