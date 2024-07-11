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
  return (
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
      <a
        href="#profile"
        className="w-11 aspect-square"
        aria-label="User Profile"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d212aa7ed7246c8356b9cdb33f4f4cd184e73fcee1743e6da25f633cba3c5c01?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
          alt="User Profile"
          className="shrink-0 my-auto w-11 aspect-square"
        />
      </a>
    </nav>
  );
}
