import Svgs from "@/components/svgs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="w-11/12 m-auto flex items-center justify-center">
        <div className="flex-grow w-fit h-fit">
          <Image
            src="/images/logo.png"
            className="ml-10 mt-3 w-[258px] h-[40px] object-contain"
            alt="Logo"
            width={500}
            height={100}
            priority={true}
          />
        </div>
        <div className="w-fit mr-10 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Svgs name="phone" width={"20px"} height={"20px"} />
            <span className="text-sm">+19052061444</span>
          </div>
          <div className="flex items-center gap-2">
            <Svgs name="mail" width={"20px"} height={"20px"} />
            <a className="text-sm" href="mailto:info@thecanadianhome.com">
              info@thecanadianhome.com
            </a>
          </div>
        </div>
      </div>
      <section className="relative h-screen w-screen">
        <Image
          src={"/images/BannerFront.png"}
          width={1920}
          height={1000}
          priority={true}
          alt="Banner Front"
          className="absolute top-1 z-20 w-screen h-[calc(100vh-10vh)] object-cover"
        />
        <Image
          src={"/images/BannerBack.jpg"}
          width={1920}
          height={1000}
          priority={true}
          alt="Banner Back"
          className="absolute top-1 z-10 w-screen h-[calc(100vh-10vh)] object-cover"
        />
        <div className="absoulte text-center">
          <div className="w-full z-30 relative">
            <div className="text-3xl font-bold pt-[120px] z-30">
              Thinking of selling your home?
            </div>
            <p className="w-6/12 m-auto mt-5 text-lg max-[600px]:w-11/12">
              Get an instant estimate of your home’s value. You can quickly
              determine the estimated value of your home by answering a few
              quick questions.
            </p>
            <input
              type="text"
              placeholder="Enter your address..."
              className="w-6/12 p-3 rounded-lg placeholder:text-slate-400 m-auto mt-5 border-2 border-blue1 max-[600px]:w-11/12"
            />
            <br />

            <button className="bg-blue1 mt-5 rounded-3xl px-3 py-2 w-[212px] text-white">
              Get Free Estimate
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray1 mt-[-80px]">
        <div className="font-semibold text-lg text-center pt-[30px]">
          Featured On
        </div>
        <div className="w-9/12 m-auto mt-[-60px] flex items-center justify-center min-h-[15rem] h-auto max-[1300px]:w-full max-[900px]:mt-0">
          <div className="flex-start p-5 rounded-full cursor-pointer">
            <Svgs name={"arrow-left"} width={"20px"} height={"20px"} />
          </div>
          <div className="flex-grow grid grid-cols-6 gap-2 items-center justify-center place-items-center">
            <Image
              src={"/images/narcity.png"}
              width={100}
              height={100}
              alt="Narcity Canada"
              className="object-contain self-auto max-w-full h-auto"
            />
            <Image
              src={"/images/insauga.png"}
              width={100}
              height={100}
              alt="Insauga"
              className="object-contain self-auto max-w-full h-auto"
            />
            <Image
              src={"/images/cp24.png"}
              width={100}
              height={100}
              alt="CP 24"
              className="object-contain self-auto max-w-full h-auto"
            />
            <Image
              src={"/images/yahoo-finance.png"}
              width={100}
              height={100}
              alt="Yahoo Finance"
              className="object-contain self-auto max-w-full h-auto"
            />
            <Image
              src={"/images/curiocity.png"}
              width={100}
              height={100}
              alt="Curiocity"
              className="object-contain self-auto max-w-full h-auto"
            />
            <Image
              src={"/images/ottawa.png"}
              width={100}
              height={100}
              alt="Ottawa Citizen"
              className="object-contain self-auto max-w-full h-auto"
            />
          </div>
          <div className="flex-end p-5 rounded-full cursor-pointer">
            <Svgs name={"arrow-right"} width={"20px"} height={"20px"} />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="w-11/12 py-10 m-auto grid grid-cols-1 items-center justify-center place-items-center h-auto min-h-[40rem] xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col w-[20rem] h-[25rem]">
            <Image
              src={"/images/mobile1.png"}
              height={100}
              width={100}
              alt="mobile view"
              className="w-[15rem] h-[15rem] self-center object-contain"
            />
            <div className="font-extrabold text-base text-center mt-4">
              Visibility
            </div>
            <div className="text-sm text-center text-desc mt-4 px-3">
              Your house will appear as a ‘featured listing’ on the home page,
              ensuring your house gets the maximum visibility
            </div>
          </div>
          <div className="flex flex-col w-[20rem] h-[25rem]">
            <Image
              src={"/images/people1.png"}
              height={100}
              width={100}
              alt="Agents"
              className="w-[15rem] h-[15rem] self-center object-contain"
            />
            <div className="font-extrabold text-base text-center mt-4">
              Real Local Agents
            </div>
            <div className="text-sm text-center text-desc mt-4 px-3">
              You are backed by a team of Real estate agents who know the market
              in and out. With their market insights, experience and sound data,
              your home will sell in no time.
            </div>
          </div>
          <div className="flex flex-col w-[20rem] h-[25rem]">
            <Image
              src={"/images/mobile-bell.png"}
              height={100}
              width={100}
              alt="Notifications"
              className="w-[15rem] h-[15rem] self-center object-contain"
            />
            <div className="font-extrabold text-base text-center mt-4">
              Email & Notification
            </div>
            <div className="text-sm text-center text-desc mt-4 px-3">
              Users get instant notifications about new listings, price hikes,
              price drops, and neighborhood alerts. We get your property shown
              to people who are actively looking and eager to buy.
            </div>
          </div>
          <div className="flex flex-col w-[20rem] h-[25rem]">
            <Image
              src={"/images/house1.png"}
              height={100}
              width={100}
              alt="mobile view"
              className="w-[15rem] h-[15rem] self-center object-contain"
            />
            <div className="font-black text-base text-center mt-4">
              Professional photos
            </div>
            <div className="text-sm text-center text-desc mt-4 px-3">
              With professional staging and photos, we make your house reach the
              best of its abilities and show it off because looks are what sell.
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#ECF4FA] h-[30rem]">
        <div className="text-xl font-bold text-center pt-10">
          The Canadian Home
        </div>
        <div className="text-xs font-bold text-center mt-3">
          What customers say about the The Canadian Home experience
        </div>
        <div className="w-11/12 m-auto grid grid-cols-1 gap-3 items-center gap-3 justify-center place-items-center h-[20rem] overflow-auto xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <div className="ml-10 m-5 relative grid grid-row-3 bg-white w-fit max-w-[500px] rounded-xl">
            <div className="absolute place-self-start mt-[-10px]">
              <div className="rotate-180 flex w-[38px]">
                <Svgs name="quote" width={"30px"} height={"30px"} />
                <Svgs name="quote" width={"30px"} height={"30px"} />
              </div>
            </div>
            <div className="p-5">
              <p className="text-center">
                The Canadian Home is absolutely amazing. It successfully
                surpasses all the other apps in this area. Their Chat function
                is what have been missing from online home search. The experts
                are always available with correct answers to anything.
              </p>
              <div className="text-center font-bold mt-3">John Brown</div>
            </div>
            <div className="place-self-end relative">
              <div className="flex flex-end w-[38px] absoulte mb-[-10px]">
                <Svgs name="quote" width={"30px"} height={"30px"} />
                <Svgs name="quote" width={"30px"} height={"30px"} />
              </div>
            </div>
          </div>
          <div className="ml-10 relative grid grid-row-3 bg-white w-fit max-w-[500px] rounded-xl">
            <div className="absolute place-self-start mt-[-10px]">
              <div className="rotate-180 flex w-[38px]">
                <Svgs name="quote" width={"30px"} height={"30px"} />
                <Svgs name="quote" width={"30px"} height={"30px"} />
              </div>
            </div>
            <div className="p-5">
              <p className="text-center">
                The Canadian Home is absolutely amazing. It successfully
                surpasses all the other apps in this area. Their Chat function
                is what have been missing from online home search. The experts
                are always available with correct answers to anything.
              </p>
              <div className="text-center font-bold mt-3">John Brown</div>
            </div>
            <div className="place-self-end relative">
              <div className="flex flex-end w-[38px] absoulte mb-[-10px]">
                <Svgs name="quote" width={"30px"} height={"30px"} />
                <Svgs name="quote" width={"30px"} height={"30px"} />
              </div>
            </div>
          </div>
          <div className="ml-10 relative grid grid-row-3 bg-white w-fit max-w-[500px] rounded-xl">
            <div className="absolute place-self-start mt-[-10px]">
              <div className="rotate-180 flex w-[38px]">
                <Svgs name="quote" width={"30px"} height={"30px"} />
                <Svgs name="quote" width={"30px"} height={"30px"} />
              </div>
            </div>
            <div className="p-5">
              <p className="text-center">
                The Canadian Home is absolutely amazing. It successfully
                surpasses all the other apps in this area. Their Chat function
                is what have been missing from online home search. The experts
                are always available with correct answers to anything.
              </p>
              <div className="text-center font-bold mt-3">John Brown</div>
            </div>
            <div className="place-self-end relative">
              <div className="flex flex-end w-[38px] absoulte mb-[-10px]">
                <Svgs name="quote" width={"30px"} height={"30px"} />
                <Svgs name="quote" width={"30px"} height={"30px"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#F3F8FC] text-lg text-center">
        Copyright © 2023 The Canadian Home Realty Inc.
      </footer>
    </main>
  );
}
