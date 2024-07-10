import Layout from '../components/Layout';

const DetailDataMasterFix = () => {
  const data = [
    {
      year: 2022,
      quarter: 1,
      province: 'ACEH',
      confirmed: 90,
      treated: 11,
      puskesmas: 192,
      govHospital: 20,
      privateHospital: 213,
      bp4: 12,
      prison: 21,
      clinic: 3
    }
    // Add more data as needed
  ];

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Detail Data Master <span className="text-sm text-gray-500">province data level</span></h1>
      <div className="mb-4 flex justify-between items-center">
        <div className="space-x-2">
          <button className="bg-gray-200 px-4 py-2 rounded">Bulan</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Triwulan</button>
          <button className="bg-gray-200 px-4 py-2 rounded">Tahun</button>
        </div>
        <input type="text" placeholder="Search.." className="border px-4 py-2 rounded" />
      </div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Tahun</th>
            <th className="border px-4 py-2">Triwulan</th>
            <th className="border px-4 py-2">Provinsi</th>
            <th className="border px-4 py-2">Terkonfirmasi</th>
            <th className="border px-4 py-2">Diobati</th>
            <th className="border px-4 py-2">Puskesmas</th>
            <th className="border px-4 py-2">Rs. pemerintah</th>
            <th className="border px-4 py-2">Rs. swasta</th>
            <th className="border px-4 py-2">bp4/bbkpm/bpkm</th>
            <th className="border px-4 py-2">Lapas/rutan</th>
            <th className="border px-4 py-2">Klinik/dpm</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.year}</td>
              <td className="border px-4 py-2">{item.quarter}</td>
              <td className="border px-4 py-2">{item.province}</td>
              <td className="border px-4 py-2">{item.confirmed}</td>
              <td className="border px-4 py-2">{item.treated}</td>
              <td className="border px-4 py-2">{item.puskesmas}</td>
              <td className="border px-4 py-2">{item.govHospital}</td>
              <td className="border px-4 py-2">{item.privateHospital}</td>
              <td className="border px-4 py-2">{item.bp4}</td>
              <td className="border px-4 py-2">{item.prison}</td>
              <td className="border px-4 py-2">{item.clinic}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <span>Showing 1 to 1 of 1 entries</span>
        <div className="space-x-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Previous</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailDataMasterFix;