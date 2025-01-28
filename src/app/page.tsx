import Header from "@/components/Header"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <div className="flex flex-col lg:flex-row gap-4 items-center w-100 h-screen px-8">
      <div className="flex flex-col gap-4 ml-2 justify-center items-center lg:items-start w-[90%] py-10  h-auto lg:w-1/2 lg:h-96">
        <h1 
        className="font-bold text-5xl ">
          Welcome To Our Website
          </h1>
        <p 
        className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolore repellat eligendi, delectus debitis placeat hic! Ex delectus cumque quae dolorem consectetur repudiandae quaerat modi, veritatis illum a ipsum ipsa!
          </p>
        <button 
        className="rounded-sm px-10 py-2 mt-4 bg-black text-white">
          Contact Us
          </button>
      </div>
      <div className="lg:w-1/2 lg:h-48 h-auto w-full flex items-center justify-center">
      <Image
      className="w-auto h-96"
      src="/img/black.jpg"
      width={500}
      height={400}
      alt="theme"
    />
      </div>
    </div>
    </>
  );
}
