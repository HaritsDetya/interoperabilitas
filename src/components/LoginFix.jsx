import React from "react";
import { useRouter } from "next/router";
import { IoMailOutline, IoKeyOutline } from "react-icons/io5";

export default function LoginFix() {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logika autentikasi bisa ditambahkan di sini
    // Jika autentikasi berhasil, arahkan ke dashboard
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background_main">
      <img
        src="/image/gradient_circle.svg"
        alt="Circle gradient"
        className="-z-10 absolute max-w-full px-10 -top-5 self-stretch shrink-0"
      />
      <img
        src="/image/bottom_shape.svg"
        alt="Bottom shape"
        className="-z-20 absolute max-w-fullself-stretch shrink-0 bottom-0 right-0"
      />
      <img
        src="/image/bottom_shape.svg"
        alt="Bottom shape"
        className="-z-20 absolute max-w-fullself-stretch shrink-0 bottom-0 left-0 transform -scale-x-100"
      />
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <img
            loading="lazy"
            src="/image/logo_gjls.svg"
            alt="Logo"
            className="shrink-0 self-stretch max-w-full aspect-[2.22] w-[300px]"
          />
        </div>
        <h1 className="text-black text-lg font-bold">Selamat Datang!</h1>
        <h3 className="text-black/50 text-xs font-semibold mb-3">
          Silahkan lengkapi E-Mail dan Password anda
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex flex-row space-x-2">
              <IoMailOutline className="h-5" />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                E-mail
              </label>
            </div>
            <input
              id="username"
              type="text"
              placeholder="tamara@gmail.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="">
            <div className="flex flex-row space-x-2">
              <IoKeyOutline className="h-5" />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <input
              id="password"
              type="password"
              placeholder="*************"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="my-5">
            <button
              className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Masuk
            </button>
          </div>
          <div className="relative mb-4">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-xs font-medium text-gray-500">
                Masuk Menggunakan
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 p-2 rounded-full bg-[#ECECEC]"
            >
              <title>Apple</title>
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="h-12 w-12 p-2 rounded-full bg-[#ECECEC]"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 p-2 fill-[#0866FF] rounded-full bg-[#ECECEC]"
            >
              <title>Facebook</title>
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
            </svg>
          </div>
          <div className="flex text-xs font-bold items-center justify-center space-x-2 mt-4">
            <span>Tidak memiliki akun?</span>
            <a
              className="inline-block align-baseline text-teal-500 hover:text-teal-600"
              href="#"
            >
              Daftar sekarang
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
