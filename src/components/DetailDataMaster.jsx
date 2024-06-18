import React from "react";

function Navbar() {
  return (
    <nav className="flex bg-primary gap-5 justify-between self-stretch py-3.5 pr-11 pl-5 w-full text-sm text-white rounded-3xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center max-md:flex-wrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8355dad4d7585595df9e246ddd2f01abdbadaf18344fce68dee0f765745acdd?apiKey=7879ad012efb4de194a58d39e8a3a4a5&" alt="Logo" className="shrink-0 self-stretch max-w-full aspect-[2.22] w-[120px]" />
        <span className="self-stretch my-auto">Beranda</span>
        <span className="self-stretch my-auto">Pengguna</span>
        <div className="flex flex-col self-stretch my-auto">
          <span>Data Master</span>
          <div className="shrink-0 mt-1.5 bg-yellow-400 rounded-xl h-[3px]" />
        </div>
        <span className="self-stretch my-auto">Data Pictures</span>
        <span className="self-stretch my-auto">Data Videos</span>
        <span className="self-stretch my-auto">Data Member</span>
        <span className="self-stretch my-auto">Data Wilayah</span>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d212aa7ed7246c8356b9cdb33f4f4cd184e73fcee1743e6da25f633cba3c5c01?apiKey=7879ad012efb4de194a58d39e8a3a4a5&" alt="User Avatar" className="shrink-0 my-auto w-11 aspect-square" />
    </nav>
  );
}

function Header() {
  return (
    <header className="flex justify-between gap-5 mt-10 w-full font-semibold max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col">
        <h1 className="text-4xl text-black">Detail Data Master</h1>
        <p className="mt-3 text-xs text-neutral-400">Province Data Level</p>
      </div>
      <nav className="flex self-end mt-8 text-sm text-zinc-500">
        <span className="text-emerald-400">Dashboard</span> / Data Master / filename_province.xlsx
      </nav>
    </header>
  );
}

function Table() {
  const dataHeadings = ["Tahun", "Bulan", "Provinsi", "Terkonfirmasi", "Diobati", "Ternotifikasi", "Pengobatan TB-RO lini II"];
  const dataRows = [
    { year: "2022", month: "1", province: "Yogyakarta", confirmed: "59", treated: "44", notified: "23", treatment: "16" },
  ];

  return (
    <>
      <div className="flex w-full gap-0 mt-5 text-base text-center text-white max-md:flex-wrap">
        {dataHeadings.map((heading, index) => (
          <div key={index} className="justify-center px-4 py-3.5 whitespace-nowrap bg-teal-500 max-md:px-5">{heading}</div>
        ))}
      </div>
      {dataRows.map((row, index) => (
        <div key={index} className="flex w-full gap-0 text-base whitespace-nowrap text-neutral-600 max-md:flex-wrap">
          <div className="z-10 justify-center px-10 py-7 bg-gray-200 max-md:px-5">{row.year}</div>
          <div className="justify-center px-12 py-7 bg-gray-200 max-md:px-5">{row.month}</div>
          <div className="justify-center px-10 py-7 text-center bg-gray-200 max-md:px-5">{row.province}</div>
          <div className="justify-center px-11 py-7 text-center bg-gray-200 max-md:px-5">{row.confirmed}</div>
          <div className="justify-center px-11 py-7 text-center bg-gray-200 max-md:px-5">{row.treated}</div>
          <div className="justify-center px-11 py-7 text-center bg-gray-200 max-md:px-5">{row.notified}</div>
          <div className="justify-center px-5 py-6 text-center bg-gray-200 max-md:px-5">{row.treatment}</div>
        </div>
      ))}
    </>
  );
}

function ActionButtons() {
  return (
    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <button className="flex gap-2 px-2.5 py-3 text-sm text-white whitespace-nowrap bg-green-600 rounded-md">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5b147f7fb44541c0908c3c9fd38b8db37d2a96b3041ef1812ea6e9ac99dbd5c?apiKey=7879ad012efb4de194a58d39e8a3a4a5&" alt="Import icon" className="shrink-0 aspect-[1.12] fill-white w-[18px]" />
        <span>Import</span>
      </button>
      <input type="text" placeholder="Search ..." className="justify-center items-start px-2.5 py-3 text-base bg-white rounded-md border-black border-solid text-zinc-600 max-md:pr-5" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="flex gap-5 px-0.5 mt-2.5 mb-28 text-base text-neutral-600 max-md:flex-wrap max-md:mb-10 max-md:max-w-full">
      <span className="flex-auto">Showing 1 to 1 of 1 entries</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2f4fd77b57911cc3d6ac87752a34ac34061809292306381093e9b9672e07818?apiKey=7879ad012efb4de194a58d39e8a3a4a5&" alt="Navigation icon" className="shrink-0 aspect-[2.44] w-[63px]" />
    </footer>
  );
}

function DetailDataMaster() {
  return (
    <div className="flex flex-col items-center px-5 pt-3.5 pb-20 font-medium bg-slate-100">
      <Navbar />
      <Header />
      <section className="flex flex-col px-8 pt-7 pb-20 mt-5 w-full bg-white rounded-md max-w-[1200px] shadow-[-1px_0px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <ActionButtons />
        <Table />
        <Footer />
      </section>
    </div>
  );
}

export default DetailDataMaster;