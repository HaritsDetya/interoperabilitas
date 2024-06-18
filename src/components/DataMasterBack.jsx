import * as React from "react";

function Navbar() {
  return (
    <nav className="flex bg-primary gap-5 justify-between items-center self-stretch py-3.5 pr-11 pl-5 w-full text-sm text-white rounded-3xl max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center self-stretch max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8355dad4d7585595df9e246ddd2f01abdbadaf18344fce68dee0f765745acdd?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
          alt=""
          className="shrink-0 self-stretch max-w-full aspect-[2.22] w-[120px]"
        />
        <a href="#" className="self-stretch my-auto">
          Beranda
        </a>
        <a href="#" className="self-stretch my-auto">
          Pengguna
        </a>
        <div className="flex flex-col self-stretch my-auto">
          <a href="#">Data Master</a>
          <div className="shrink-0 mt-1.5 bg-yellow-400 rounded-xl h-[3px]" />
        </div>
        <a href="#" className="self-stretch my-auto">
          Data Pictures
        </a>
      </div>
      <div className="flex gap-5 justify-between self-stretch my-auto">
        <a href="#">Data Member</a>
        <a href="#">Data Wilayah</a>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d212aa7ed7246c8356b9cdb33f4f4cd184e73fcee1743e6da25f633cba3c5c01?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
        alt="User Avatar"
        className="shrink-0 self-stretch my-auto w-11 aspect-square"
      />
    </nav>
  );
}

function TableHeader() {
  return (
    <div className="flex gap-0 mt-5 text-base text-center text-white max-md:flex-wrap max-md:max-w-full">
      <div className="justify-center items-start px-4 py-3.5 whitespace-nowrap bg-teal-500 rounded-md max-md:pr-5">
        Filename
      </div>
      <div className="justify-center px-7 py-3.5 bg-teal-500 max-md:px-5">Data Lv.</div>
      <div className="justify-center px-4 py-3.5 bg-teal-500">Uploaded At</div>
      <div className="justify-center px-4 py-3.5 bg-teal-500 max-md:px-5">Validate At</div>
      <div className="z-10 justify-center px-4 py-3.5 whitespace-nowrap bg-teal-500 max-md:px-5">
        Validator
      </div>
      <div className="justify-center px-4 py-3.5 whitespace-nowrap bg-teal-500 max-md:px-5">
        Validator
      </div>
      <div className="justify-center px-8 py-3.5 whitespace-nowrap bg-teal-500 rounded-none max-md:px-5">
        Status
      </div>
    </div>
  );
}

function TableRow({ filename, dataLv, uploadedAt, validateAt, validator, status, imgSrc }) {
  return (
    <div className="flex gap-0 text-base text-neutral-600 max-md:flex-wrap">
      <div className="flex gap-2.5 px-4 py-5 text-emerald-400 whitespace-nowrap bg-white">
        <img loading="lazy" src={imgSrc} alt="" className="shrink-0 aspect-[0.83] w-[19px]" />
        <div className="my-auto">{filename}</div>
      </div>
      <div className="justify-center px-6 py-7 whitespace-nowrap bg-white max-md:px-5">
        {dataLv}
      </div>
      <div className="justify-center px-4 py-7 text-center whitespace-nowrap bg-white">
        {uploadedAt}
      </div>
      <div className="justify-center px-5 py-7 text-center whitespace-nowrap bg-white">
        {validateAt}
      </div>
      <div className="justify-center px-4 py-7 text-center bg-white">{validator}</div>
      <div className="justify-center px-4 py-7 text-center bg-white">{validator}</div>
      <div className="flex flex-col justify-center px-5 py-4 text-xs text-center text-green-700 whitespace-nowrap bg-white max-md:px-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a8fe8d0edd2d671f16c54d5bcbf9709f4fad16450dc9d5ddf4d0cbf3b78e97e?apiKey=7879ad012efb4de194a58d39e8a3a4a5&" alt="" className="self-center w-7 aspect-square"/>
        <div className="justify-center px-1.5 py-px mt-1.5 bg-lime-50 rounded border border-green-600 border-solid">
          {status}
        </div>
      </div>
    </div>
  );
}

function TableRowGray({ filename, dataLv, uploadedAt, validateAt, validator, status, imgSrc }) {
  return (
    <div className="flex gap-0 text-base text-neutral-600 max-md:flex-wrap">
      <div className="flex gap-2.5 px-4 py-5 text-emerald-400 whitespace-nowrap bg-gray-200 rounded-none">
        <img loading="lazy" src={imgSrc} alt="" className="shrink-0 aspect-[0.83] w-[19px]" />
        <div className="my-auto">{filename}</div>
      </div>
      <div className="justify-center px-6 py-7 whitespace-nowrap bg-gray-200 max-md:px-5">
        {dataLv}
      </div>
      <div className="justify-center px-3.5 py-7 text-center whitespace-nowrap bg-gray-200">
        {uploadedAt}
      </div>
      <div className="justify-center px-4 py-7 text-center whitespace-nowrap bg-gray-200">
        {validateAt}
      </div>
      <div className="z-10 justify-center px-5 py-7 text-center bg-gray-200">{validator}</div>
      <div className="justify-center px-5 py-7 text-center bg-gray-200">{validator}</div>
      <div className="flex flex-col justify-center px-5 py-4 text-xs text-center text-red-700 bg-gray-200 rounded-none max-md:px-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7bf20ee9745a885f5f7d2e8f1f21e6f40c4f30fa43265bbf69de515e71487a4?apiKey=7879ad012efb4de194a58d39e8a3a4a5&" alt="" className="self-center aspect-square w-[27px]" />
        <div className="justify-center px-1.5 py-px mt-1.5 bg-rose-50 rounded border border-red-500 border-solid">
          {status}
        </div>
      </div>
    </div>
  );
}

function DataMaster() {
  return (
    <main className="flex flex-col items-center px-5 pt-3.5 pb-20 font-medium bg-slate-100">
      <Navbar />
      <section className="flex gap-5 mt-11 w-full font-semibold max-w-[1199px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1">
          <h1 className="text-4xl text-black">Data Master</h1>
          <p className="mt-3 text-xs text-neutral-400">Data Management</p>
        </div>
        <div className="flex-auto self-end mt-7 text-sm text-zinc-500">
          <span className="text-emerald-400">Dashboard</span> / Data Management
        </div>
      </section>
      <section className="flex flex-col px-8 pt-7 pb-20 mt-5 w-full bg-white rounded-md max-w-[1200px] shadow-[-1px_0px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <button className="flex gap-2 px-2.5 py-3 text-sm text-white whitespace-nowrap bg-green-600 rounded-md">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5b147f7fb44541c0908c3c9fd38b8db37d2a96b3041ef1812ea6e9ac99dbd5c?apiKey=7879ad012efb4de194a58d39e8a3a4a5&" alt="" className="shrink-0 aspect-[1.12] fill-white w-[18px]" />
            Import
          </button>
          <form className="justify-center items-start px-2.5 py-3 text-base bg-white rounded-md border-black border-solid text-zinc-600 max-md:pr-5">
            <label for="search" className="sr-only">
              Search
            </label>
            <input
              type="search"
              id="search"
              className="justify-center items-start text-base bg-white rounded-md border-none text-zinc-600 max-md:pr-5"
              placeholder="Search ..."
              aria-label="Search"
            />
          </form>
        </div>
        <TableHeader />
        <TableRow
          filename="filename_province.xlsx"
          dataLv="Province"
          uploadedAt="12-Feb-2024"
          validateAt="12-Feb-2024"
          validator="Mas Super Admin"
          status="Published"
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d1592e1adbee4ee4547b00027d33de4f8a116c6988bf5c38ecaf0eb014f9f793?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
        />
        <TableRowGray
          filename="filename_province.xlsx"
          dataLv="Province"
          uploadedAt="02-Mar-2023"
          validateAt="02-Mar-2023"
          validator="Mas Super Admin"
          status="Not Published"
          imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3a8fa374fdb2cebb9d3a7a4492f4181c348fe2b56547f2397f2f67882ca631c2?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
        />
        <div className="flex gap-5 px-0.5 mt-2.5 mb-11 text-base text-neutral-600 max-md:flex-wrap max-md:mb-10 max-md:max-w-full">
          <div className="flex-auto">Showing 1 to 1 of 1 entries</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2f4fd77b57911cc3d6ac87752a34ac34061809292306381093e9b9672e07818?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
            alt=""
            className="shrink-0 aspect-[2.44] w-[63px]"
          />
        </div>
      </section>
    </main>
  );
}

export default DataMaster;