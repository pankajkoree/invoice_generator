"use client";

import { Button } from "@/components/ui/button";
import Footer from "./components/Footer";
import Image from "next/image";
import classicalSample from "../../public/classic-sample.png";
import businessSample from "../../public/business-sample.png";
import moveepixSample from "../../public/moveepix-sample.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const gotoClassical = () => router.push("/classical");
  const gotoBusiness = () => router.push("/business");
  const gotoMoveepix = () => router.push("/moveepix");

  return (
    <div>
      <div className="relative flex flex-col xl:w-[70%] xl:left-[15%] text-center text-slate-800 gap-12">
        {/* div for heading, phrase and explanation for invoice */}
        <div className="relative flex flex-col items-center top-4  gap-4">
          <h1 className="text-slate-700 text-6xl font-bold">
            Invoice Generator
          </h1>
          <h2 className="text-4xl italic">Free online invoice maker</h2>
          <p className="relative flex xl:w-[50%] text-xl">
            Create professional invoices online in just a few minutes with our
            free invoice generator. Simply enter your billing details, customize
            the design, and download or print as a PDF. Save time and stay
            organized with easy-to-use features for all your invoicing needs.
          </p>
        </div>
        {/* ❌ div for heading, phrase and explanation for invoice */}

        {/* div for suggestion and buttons */}
        <div className="relative flex flex-col items-center gap-4">
          <div>
            <p className="text-3xl">Choose based on your invoice type</p>
          </div>
          <div className="relative flex gap-4">
            {/* classical */}
            <div
              className="flex flex-col gap-4 cursor-pointer"
              onClick={gotoClassical}
            >
              <Button
                variant="outline"
                className="relative px-6 py-3 xl:text-2xl xl:p-6 font-semibold border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300 ease-in-out"
              >
                Classical
              </Button>
              <Image
                src={classicalSample}
                alt="classicalSample"
                className="xl:w-[200px] xl:h-[290px] border border-slate-700"
              />
            </div>

            {/* business */}
            <div
              className="flex flex-col gap-4 cursor-pointer"
              onClick={gotoBusiness}
            >
              <Button
                variant="outline"
                className="relative px-6 py-3 xl:text-2xl xl:p-6 font-semibold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out"
              >
                Business
              </Button>
              <Image
                src={businessSample}
                alt="businessSample"
                className="xl:w-[200px] xl:h-[290px] border border-green-500"
              />
            </div>

            {/* moveepix */}
            <div
              className="flex flex-col gap-4 cursor-pointer"
              onClick={gotoMoveepix}
            >
              <Button
                variant="outline"
                className="relative px-6 py-3 xl:text-2xl xl:p-6 font-semibold border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-300 ease-in-out"
              >
                Moveepix
              </Button>
              <Image
                src={moveepixSample}
                alt="moveepixSample"
                className="xl:w-[200px] xl:h-[290px] border border-yellow-500"
              />
            </div>
          </div>
        </div>
        {/* ❌ div for suggestion and buttons */}

        {/* Footer */}
        <div className="relative flex flex-col items-center gap-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
