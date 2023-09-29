import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"></meta>
        <link rel="icon"></link>
      </Head>

      <main className="h-screen flex items-center justify-center">
        <form className="bg-white flex rounded-lg w-1/2 font-Inter">
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-Inter text-center">Let's Go!</h1>
            <div className="mt-6">
              <div className="pb-4">
                <label className="block font-Inter text-lg pb-2" htmlFor="name">
                  We just emailed you
                </label>
                <p className="text-gray-500">
                  Please enter the code we emailed you.
                </p>
                <p>example@site.com</p>

                <div className="pb-4">
                  <label
                    className="block font-Inter text-sm pb-2"
                    htmlFor="password"
                  >
                    Confirmation code
                  </label>

                  <div>
                    <input
                      className="border-2 border-gray-500 p-2 rounded-md w-1/2"
                      type="number"
                      name="code"
                    ></input>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-pink-500 text-sm 
              text-white py-3 mt-6 rounded-lg w-full"
                ></button>
                <div className="block">
                  <u>Resend code </u> or <u>call</u>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
