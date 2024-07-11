import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='flex mx-20 flex-col items-center px-5 pt-3.5 pb-20 font-medium bg-slate-100'>
      <Navbar />
      <main className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;