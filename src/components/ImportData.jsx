// pages/index.js
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Import Data</h2>
        <p className="mb-4">Data xlsx importing</p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                Choose file
              </label>
              <input
                id="file"
                type="file"
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Data Type
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input type="radio" name="dataType" value="dataNasional" className="form-radio text-teal-600" />
                  <span className="ml-2">Data Nasional</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="dataType" value="dataProvinsi" className="form-radio text-teal-600" />
                  <span className="ml-2">Data Provinsi</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="dataType" value="dataKabupaten" className="form-radio text-teal-600" />
                  <span className="ml-2">Data Kabupaten</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="radio" name="dataType" value="dataFaskes" className="form-radio text-teal-600" />
                  <span className="ml-2">Data Faskes</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Import
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
