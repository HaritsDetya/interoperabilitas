
export default function Navbar() {
  return (
    <nav className="bg-teal-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8355dad4d7585595df9e246ddd2f01abdbadaf18344fce68dee0f765745acdd?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
            alt="Logo"
            className="shrink-0 self-stretch max-w-full aspect-[2.22] w-[120px]"
          />
          <span className="text-white text-xl font-bold ml-2">LARAVEL</span>
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Users
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Data Master
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Data Pictures
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Data Videos
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Data Member
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Data Wilayah
            </a>
          </li>
        </ul>
        <div className="text-white">
          <button className="focus:outline-none">
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
                d="M5.121 19.88l-1.415-1.415M4 15h3m13 4v-3m-4 4h3m-4-4a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
