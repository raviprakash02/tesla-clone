import Image from "next/image";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Threed from "./Component/Threed";

export default function Home() {
  return (
    <div className="App w-full">
      <Header />

      <section className="hero pt-[10vh]">
        <div className="flex flex-col items-center justify-between w-full h-full text-white">
          <div className="flex flex-col w-full h-[70vh]">
            <h1 className="text-6xl font-bold">Model 3 </h1>
            <p className="text-2xl underline">
              {" "}
              1.99% APR Financing Ending August 31{" "}
            </p>
            <p className="text-1xl">From $34,9901</p> 
          </div>
          <div className="flex h-[20vh] items-center justify-center gap-5">
            <button
              className="px-20 py-2 bg-[#3E6AE1] h-fit rounded-lg hover:bg-[#3E6AE1]/80"
              type="submit"
            >
              Order now
            </button>
            <button
              className="px-20 py-2 bg-white h-fit rounded-lg text-black"
              type="submit"
            >
              Demo Drive
            </button>
          </div>
           
        </div>
      </section>

      <section className="hero1 hero">
        <div className="flex flex-col items-center justify-between w-full h-full text-white">
          <div className="flex flex-col w-full h-[80vh]">
            <h1 className="text-6xl font-bold">Model Y </h1>
            <p className="text-2xl underline">
              {" "}
              1.99% APR Financing Ending August 31{" "}
            </p>
            <p className="text-1xl">From $34,9901</p> 
          </div>
          <div className="flex h-[20vh] items-center justify-center gap-5">
            <button
              className="px-20 py-2 bg-[#3E6AE1] h-fit rounded-lg hover:bg-[#3E6AE1]/80"
              type="submit"
            >
              Order now
            </button>
            <button
              className="px-20 py-2 bg-white h-fit rounded-lg text-black"
              type="submit"
            >
              Demo Drive
            </button>
          </div>
        </div>
      </section>

      <section className="animation">{/* <Threed /> */}</section>

      <section className="hero2 hero">
        <div className="flex flex-col items-center justify-between w-full h-full text-white">
          <div className="flex flex-col w-full h-[80vh]">
            <h1 className="text-6xl font-bold">Model X </h1>
            <p className="text-2xl underline">
              {" "}
              1.99% APR Financing Ending August 31{" "}
            </p>
            <p className="text-1xl">From $34,9901</p> 
          </div>
          <div className="flex h-[20vh] items-center justify-center gap-5">
            <button
              className="px-20 py-2 bg-[#3E6AE1] h-fit rounded-lg hover:bg-[#3E6AE1]/80"
              type="submit"
            >
              Order now
            </button>
            <button
              className="px-20 py-2 bg-white h-fit rounded-lg text-black"
              type="submit"
            >
              Demo Drive
            </button>
          </div>
           
        </div>
      </section>

      <section className="hero3 hero">
        <div className="flex flex-col items-center justify-between w-full h-full text-white">
          <div className="flex flex-col w-full h-[80vh]">
            <h1 className="text-6xl font-bold">Model S </h1>
            <p className="text-2xl underline">
              {" "}
              1.99% APR Financing Ending August 31{" "}
            </p>
            <p className="text-1xl">From $34,9901</p> 
          </div>
          <div className="flex h-[20vh] items-center justify-center gap-5">
            <button
              className="px-20 py-2 bg-[#3E6AE1] h-fit rounded-lg hover:bg-[#3E6AE1]/80"
              type="submit"
            >
              Order now
            </button>
            <button
              className="px-20 py-2 bg-white h-fit rounded-lg text-black"
              type="submit"
            >
              Demo Drive
            </button>
          </div>
           
        </div>
      </section>

      <section className="hero5 hero">
        <div className="flex flex-col items-center justify-between w-full h-full text-white">
          <div className="flex flex-col w-full h-[80vh]">
            <h1 className="text-6xl font-bold">Solar Panels </h1>
            <p className="text-2xl underline">
              Schedule a Virtual Consultation
            </p>
          </div>
          <div className="flex h-[20vh] items-center justify-center gap-5">
            <button
              className="px-20 py-2 bg-[#3E6AE1] h-fit rounded-lg hover:bg-[#3E6AE1]/80"
              type="submit"
            >
              Order now
            </button>
            <button
              className="px-20 py-2 bg-white h-fit rounded-lg text-black"
              type="submit"
            >
              Learn More
            </button>
          </div>
           
        </div>
        <Footer />
      </section>
    </div>
  );
}
