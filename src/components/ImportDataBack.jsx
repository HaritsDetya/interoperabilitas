import * as React from "react";

function NavigationMenu() {
  const navItems = [
    { text: "Beranda" },
    { text: "Pengguna" },
    { text: "Data Master", hasHighlight: true },
    { text: "Data Pictures" },
    { text: "Data Videos" },
    { text: "Data Member" },
    { text: "Data Wilayah" },
  ];

  return (
    <nav className="flex w-full rounded-full py-3 px-5 bg-primary gap-5 justify-between items-center max-md:flex-wrap">
      <a href="#home" className="flex items-center" aria-label="Home">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8355dad4d7585595df9e246ddd2f01abdbadaf18344fce68dee0f765745acdd?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
          alt="Logo"
          className="shrink-0 self-stretch max-w-full aspect-[2.22] w-[120px]"
        />
      </a>
      {navItems.map((item, index) => (
        <div
          key={index}
          className={`self-stretch my-auto ${item.hasHighlight ? "flex flex-col" : ""}`}
        >
          <a href={`#${item.text.replace(" ", "").toLowerCase()}`}>{item.text}</a>
          {item.hasHighlight && <div className="shrink-0 mt-1.5 bg-yellow-400 rounded-xl h-[3px]" />}
        </div>
      ))}
      <a href="#profile" className="w-11 aspect-square" aria-label="User Profile">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d212aa7ed7246c8356b9cdb33f4f4cd184e73fcee1743e6da25f633cba3c5c01?apiKey=7879ad012efb4de194a58d39e8a3a4a5&" alt="User Profile" className="shrink-0 my-auto w-11 aspect-square" />
      </a>
    </nav>
  );
}

function ImportSection() {
  return (
    <section className="flex flex-col mb-48 max-w-full w-[777px] max-md:mb-10">
      <form className="flex gap-5 max-md:flex-wrap">
        <label htmlFor="fileInput" className="flex-auto">
          <div className="flex flex-auto gap-0 text-base shadow-sm text-zinc-600 max-md:flex-wrap max-md:max-w-full">
            <div className="justify-center items-start px-2.5 py-3.5 bg-white rounded-md border-black border-solid max-md:pr-5 max-md:max-w-full">
              Choose file
            </div>
            <input
              type="file"
              id="fileInput"
              className="justify-center px-6 py-3.5 bg-gray-200 rounded-none border-black border-solid max-md:px-5"
              aria-label="Choose file"
            />
          </div>
        </label>
        <button type="submit" className="flex gap-2 justify-center px-2.5 py-3 text-sm text-white whitespace-nowrap bg-green-600 rounded-md shadow-sm max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5b147f7fb44541c0908c3c9fd38b8db37d2a96b3041ef1812ea6e9ac99dbd5c?apiKey=7879ad012efb4de194a58d39e8a3a4a5&" alt="Import Icon" className="shrink-0 aspect-[1.12] fill-white w-[18px]" />
          <span>Import</span>
        </button>
      </form>
      <div className="flex gap-5 self-center px-5 py-1.5 mt-6 text-base text-center bg-white rounded-xl border border-emerald-400 border-solid text-neutral-500 max-md:flex-wrap">
        <button className="flex flex-auto gap-2.5 items-center" type="button">
          <span className="grow self-stretch my-auto">Data Nasional</span>
          <span className="justify-center self-stretch px-5 py-2.5 text-white bg-emerald-400 rounded-xl max-md:pl-5">
            Data Provinsi
          </span>
          <span className="flex-auto self-stretch my-auto">Data Kabupaten</span>
        </button>
        <button className="flex-auto my-auto" type="button">Data Faskes</button>
      </div>
    </section>
  );
}

function Breadcrumbs() {
  return (
    <nav className="flex self-end mt-7 text-sm text-emerald-400">
      <a href="#dashboard" className="text-emerald-400">Dashboard</a> /
      <a href="#datamaster" className="text-emerald-400">Data Master</a> /
      <a href="#datamanagement" className="text-gray-400">Data Management</a>
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
      <Breadcrumbs/>
    </header>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col items-center px-5 pt-3.5 pb-20 font-medium bg-slate-100">
      <div className="flex gap-5 justify-between self-stretch py-3.5 pr-11 pl-5 w-full text-sm text-white rounded-3xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <NavigationMenu />
      </div>
      <Header />
      <div className="flex flex-col items-center px-16 pt-7 pb-20 mt-5 w-full bg-white rounded-md max-w-[1200px] shadow-[-1px_0px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <ImportSection />
      </div>
    </div>
  );
}

export default MyComponent;