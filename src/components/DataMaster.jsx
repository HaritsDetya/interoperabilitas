// pages/index.js
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function DataMaster() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleImport = async () => {
    try {
      const response = await fetch('/api/import', { method: 'POST' });

      if (!response.ok) {
        throw new Error('Failed to import data');
      }

      const data = await response.json();

      setSuccessMessage(data.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Data Master</h2>
        <p className="mb-4">Data management</p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded"
                onClick={handleImport}
              >
                Import
              </button>
              <div className="relative inline-block">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                  Template
                </button>
                <ul className="absolute hidden text-gray-700 pt-1">
                  <li className="">
                    <a
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                      href="#"
                    >
                      Download Template
                    </a>
                  </li>
                </ul>
              </div>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                Broadcast
              </button>
            </div>
            <input
              type="text"
              className="border rounded px-4 py-2"
              placeholder="Search.."
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-red-500">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="mb-4 text-green-500">{successMessage}</div>
          )}
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Filename</th>
                <th className="py-2 px-4 border-b">Data Lv.</th>
                <th className="py-2 px-4 border-b">Uploaded At</th>
                <th className="py-2 px-4 border-b">Validated At</th>
                <th className="py-2 px-4 border-b">Operator</th>
                <th className="py-2 px-4 border-b">Validator</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b text-teal-500">
                  filename_province.xlsx
                </td>
                <td className="py-2 px-4 border-b">PROVINCE</td>
                <td className="py-2 px-4 border-b">24-May-2024</td>
                <td className="py-2 px-4 border-b">24-May-2024</td>
                <td className="py-2 px-4 border-b">Mas Super Admin</td>
                <td className="py-2 px-4 border-b">Mas Super Admin</td>
                <td className="py-2 px-4 border-b text-teal-500">published</td>
                <td className="py-2 px-4 border-b text-gray-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M3 6h18M3 14h18M3 18h18"
                    />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 flex justify-between items-center">
            <div className="text-gray-700">Showing 1 to 1 of 1 entries</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-300 rounded">Previous</button>
              <button className="px-3 py-1 bg-teal-500 text-white rounded">1</button>
              <button className="px-3 py-1 bg-gray-300 rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
