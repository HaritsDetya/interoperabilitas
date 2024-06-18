import * as React from "react";

function EmailForm() {
  return (
    <form className="mt-6 ml-4 max-md:ml-2.5">
      <label htmlFor="emailInput" className="sr-only">
        Email Address
      </label>
      <div className="flex gap-2 items-center text-xs font-medium text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/915cd63dbf7403396c4fc4624fd449f7e575efd46aa03a25bcbfc5ae5661fc52?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
          alt="Email icon"
          className="shrink-0 aspect-[1.25] w-[15px]"
        />
        <div>E-Mail</div>
      </div>
      <input
        id="emailInput"
        type="email"
        placeholder="tamara@gmail.com"
        className="justify-center items-start p-4 mt-2 text-base font-medium rounded-md border border-solid border-black border-opacity-50 text-black text-opacity-30 max-md:pr-5"
      />
    </form>
  );
}

function PasswordForm() {
  return (
    <form className="mt-3.5 ml-4 max-md:ml-2.5">
      <label htmlFor="passwordInput" className="sr-only">
        Password
      </label>
      <div className="flex gap-2.5 items-center text-xs font-medium text-black">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fecd1cce337d9b3446d15825d8a25939f4773b45b2fd7585ad861a36772e04b?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
          alt="Password icon"
          className="shrink-0 aspect-square w-[13px]"
        />
        <div className="my-auto">Password</div>
      </div>
      <div className="flex gap-5 px-5 py-3 mt-2 text-base font-medium rounded-md border border-solid border-black border-opacity-50 text-black text-opacity-30 max-md:pr-5">
        <input
          type="password"
          placeholder="*********************"
          className="flex-auto my-auto bg-transparent border-none focus:ring-0"
          id="passwordInput"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebc905eb6bf6d0227e3c09245e02585623a5a40ea5afa3a5ec88511cb268936f?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
          alt="Visibility icon"
          className="shrink-0 w-6 aspect-square"
        />
      </div>
    </form>
  );
}

function Login() {
  return (
    <div className="flex flex-col bg-stone-50">
      <section className="z-10 px-5 mt-0 w-full max-md:mt-0 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <aside className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
          </aside>
          <main className="flex flex-col ml-5 w-[53%] max-md:ml-0 max-md:w-full">
            <section className="flex flex-col px-20 py-16 w-full bg-white rounded-3xl shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ece63f53fb1a47190d7be1663bd6dd3ca8a29d194bbdcdf479c439deddb75b58?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
                alt="Logo"
                className="self-center max-w-full aspect-[2.22] w-[250px]"
              />
              <h1 className="mt-11 text-2xl font-bold text-black max-md:mt-10">
                Selamat Datang!
              </h1>
              <p className="mt-1 text-sm font-medium text-stone-400">
                Silahkan lengkapi E-Mail dan Password anda
              </p>
              <EmailForm className="w-full"/>
              <PasswordForm className="w-full"/>
              <button
                type="submit"
                className="justify-center items-center px-16 py-5 mx-7 mt-5 text-base font-medium text-center text-white bg-teal-500 rounded-3xl shadow-sm max-md:px-5 max-md:mx-2.5"
              >
                <a href="/dashboard">Masuk</a>
              </button>
              <section className="flex gap-0.5 mt-7">
                <article className="flex flex-col">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7674a5b860e079a1b554ee907856efdae688b757366be3f862aa5529b3456016?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
                    alt=""
                    className="self-center border border-solid aspect-[20] border-stone-500 stroke-[1px] stroke-stone-500 w-[121px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/67829530f0c11adb0d9cf6029a41e0da7555fe0144379a3675ee14389016c91e?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
                    alt=""
                    className="self-end mt-5 aspect-square w-[50px]"
                  />
                </article>
                <article className="flex flex-col">
                  <div className="flex gap-2 text-xs font-medium text-center text-black text-opacity-60">
                    <div className="grow">Masuk Menggunakan</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/0aaaf5acfcfe8d05c8806f6f8bbbf245d285eed86cf965656655291c408f5aff?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
                      alt=""
                      className="shrink-0 self-start max-w-full border border-solid aspect-[16.67] border-stone-500 stroke-[1px] stroke-stone-500 w-[109px]"
                    />
                  </div>
                  <div className="flex gap-5 justify-between self-start mt-4 ml-7 max-md:ml-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9b7b875d07fdb34af68b1a112a619221efaa2dd550db881b576b80a8951af62?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
                      alt=""
                      className="shrink-0 aspect-square w-[50px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4fac7ba040656d7b934167a5472f3fbe299f345396df1c35f2284e6dd191061?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
                      alt=""
                      className="shrink-0 rounded-full aspect-square w-[50px]"
                    />
                  </div>
                </article>
              </section>
              <div className="flex gap-1.5 self-center mt-3.5 text-xs font-medium">
                <p className="text-black">Tidak memiliki akun?</p>
                <a href="#" className="text-teal-500">
                  Daftar Sekarang!
                </a>
              </div>
            </section>
          </main>
          {/* <aside className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/65d9dbec405271aeb188dd89622fcb64f8ec3d2ec403074328ac34bffa776bfe?apiKey=7879ad012efb4de194a58d39e8a3a4a5&"
              alt="Decorative image"
              className="grow shrink-0 max-w-full aspect-[1.89] mt-[642px] w-[237px] max-md:mt-10"
            />
          </aside> */}
        </div>
      </section>
    </div>
  );
}

export default Login;