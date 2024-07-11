import { useState } from "react";
import { BiImport } from "react-icons/bi";
import Navbar from "./Navbar";

const navItems = [
  { text: "Beranda" },
  { text: "Pengguna" },
  { text: "Data Master", hasHighlight: true, href: `/dashboard`, },
  { text: "Data Pictures" },
  { text: "Data Videos" },
  { text: "Data Member" },
  { text: "Data Wilayah" },
];

const tabs = [
  { name: "Data Nasional", href: "#", current: false },
  { name: "Data Provinsi", href: "#", current: true },
  { name: "Data Kabupaten", href: "#", current: false },
  { name: "Data Faskes", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

<Navbar/>

function ImportSection() {
  return (
    <section className="flex flex-col mb-48 max-w-full w-[777px] max-md:mb-10">
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <label
            htmlFor="file-upload"
            className="block w-full cursor-pointer rounded-l-md border-0 py-1.5 px-3 text-gray-400 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <span>Choose file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
        </div>
        <button
          type="button"
          className="relative bg-gray-200 -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-300"
        >
          Browse
        </button>
        <button
          type="button"
          className="rounded-md bg-[#34A853] ml-5 px-7 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#2c8c45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <div className="flex items-center">
            <BiImport className="size-4" />
            Import
          </div>
        </button>
      </div>
      <div className="flex gap-5 self-center px-5 py-1.5 mt-6 text-base text-center bg-white rounded-xl border border-emerald-400 border-solid text-neutral-500 max-md:flex-wrap">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "bg-[#20C997] text-white"
                    : "text-gray-400 hover:text-gray-600",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}

function Breadcrumbs() {
  return (
    <nav className="flex self-end mt-7 text-sm text-emerald-400">
      <a href="#dashboard" className="text-emerald-400">
        Dashboard
      </a>{" "}
      /
      <a href="/data_master" className="text-emerald-400">
        Data Master
      </a>{" "}
      /
      <a href="#datamanagement" className="text-gray-400">
        Data Management
      </a>
    </nav>
  );
}

function Header() {
  return (
    <header className="flex gap-5 mt-11 w-full justify-between font-semibold max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col">
        <h1 className="text-4xl text-black">Import Data</h1>
        <p className="mt-1.5 text-xs text-neutral-400">Data xlxs importing</p>
      </div>
      <Breadcrumbs />
    </header>
  );
}

function ImportDataBack() {
  return (
    <div className="flex mx-20 flex-col items-center px-5 pt-3.5 pb-20 font-medium bg-slate-100">
      <div className="flex gap-5 justify-between self-stretch py-3.5 pr-11 pl-5 w-full text-sm text-white rounded-3xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <Navbar />
      </div>
      <Header />
      <div className="flex flex-col items-center px-16 pt-7 pb-20 mt-5 w-full bg-white rounded-md max-w-[1200px] shadow-[-1px_0px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <ImportSection />
      </div>
    </div>
  );
}

export default ImportDataBack;
