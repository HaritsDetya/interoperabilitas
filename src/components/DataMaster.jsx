// pages/index.js
import { useState } from "react";
import Navbar from "../components/Navbar";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";
import { BiImport } from "react-icons/bi";

function StatusSuccesed() {
  return (
    <div className="flex flex-col items-center gap-2">
      <FaRegCircleCheck className="fill-[#62BC7A] size-8" />
      <button
        type="button"
        className="rounded-md bg-[#F6FFED] px-1 py-[1px] text-[10px] font-semibold text-[#0D7D2B] shadow-sm ring-1 ring-inset ring-[#34A853] hover:bg-gray-50"
      >
        Published
      </button>
    </div>
  );
}
function StatusFailed() {
  return (
    <div className="flex flex-col items-center gap-2">
      <AiOutlineCloseCircle className="fill-[#CE4343] size-8" />
      <button
        type="button"
        className="rounded-md bg-[#FFEEEC] px-1 py-[1px] text-[10px] font-semibold text-[#B83434] shadow-sm ring-1 ring-inset ring-[#CE4343] hover:bg-gray-50"
      >
        Not Published
      </button>
    </div>
  );
}

function Breadcrumbs() {
  return (
    <nav className="flex self-end mt-7 text-sm text-emerald-400">
      <a href="#dashboard" className="text-emerald-400">
        Dashboard
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
        <h1 className="text-4xl text-black">Data Master</h1>
        <p className="mt-1.5 text-xs text-neutral-400">Data Management</p>
      </div>
      <Breadcrumbs />
    </header>
  );
}

export default function DataMaster() {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleImport = async () => {
    try {
      const response = await fetch("/api/import", { method: "POST" });

      if (!response.ok) {
        throw new Error("Failed to import data");
      }

      const data = await response.json();

      setSuccessMessage(data.message);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
    }
  };

  const people = [
    {
      href: `/detail_data_master`,
      filename: "filename_province.xlsx",
      dataLv: "Province",
      uploadedAt: "12-Feb-2024",
      validatedAt: "12-Feb-2024",
      operator: "Mas Super Admin",
      validator: "Mas Super Admin",
      status: <StatusSuccesed />,
    },
    {
      filename: "filename_province.xlsx",
      dataLv: "Province",
      uploadedAt: "02-Mar-2023",
      validatedAt: "02-Mar-2023",
      operator: "Mas Super Admin",
      validator: "Mas Super Admin",
      status: <StatusFailed />,
    },
  ];

  return (
    <div className="flex mx-20 flex-col items-center px-5 pt-3.5 pb-20 font-medium bg-slate-100">
      <Navbar />
      <div className="container mx-auto p-6">
        <Header />
        <div className="bg-white p-6 mt-7 rounded-lg shadow-md">
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <button
                className="bg-[#34A853] text-white px-4 py-2 rounded"
                onClick={handleImport}
              >
                <div className="flex items-center">
                  <BiImport className="size-5 mr-1" />
                  Import
                </div>
              </button>
            </div>
            <input
              type="text"
              className="ring-2 ring-gray-300 rounded px-4 py-2"
              placeholder="Search ..."
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-500">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="mb-4 text-green-500">{successMessage}</div>
          )}
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300 rounded-lg text-white">
                    <thead className="bg-[#17AEA7]">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-sm font-semibold sm:pl-3"
                        >
                          Filename
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-semibold"
                        >
                          Data Lv.
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-semibold"
                        >
                          Uploaded At
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-semibold"
                        >
                          Validated At
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-semibold"
                        >
                          Operator
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-semibold"
                        >
                          Validator
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-sm font-semibold"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {people.map((person, personIdx) => (
                        <tr
                          key={person.href}
                          className={
                            personIdx % 2 === 0 ? undefined : "bg-[#EBEBEB]"
                          }
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-teal-500 sm:pl-3">
                            <a href="/detail_data_master">
                              <div className="flex">
                                <CiFileOn className="size-5" />
                                {person.filename}
                              </div>
                            </a>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.dataLv}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.uploadedAt}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.validatedAt}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.operator}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.validator}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">1</span> of{" "}
                  <span className="font-medium">1</span> entries
                </p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex space-x-1 rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                  {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                  <a
                    href="#"
                    aria-current="page"
                    className="relative rounded-md ring-1 ring-inset ring-gray-300 z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
