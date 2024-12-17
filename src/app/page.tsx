import { Button } from "@/components/ui/button";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col xl:w-[70%] min-h-screen xl:left-[15%] text-center text-slate-800 gap-12">
      {/* div for heading, phrase and explanation for invoice */}
      <div className="relative flex flex-col top-12 items-center gap-8">
        <h1 className="text-slate-700 text-6xl font-extrabold">
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
      <div className="relative flex flex-col top-12 items-center gap-8">
        <div>
          <p className="text-3xl">Choose based on your invoice type</p>
        </div>
        <div className="relative flex gap-8">
          {/* classical */}
          <div>
            <Button
              variant="outline"
              className="relative px-6 py-3 xl:text-2xl xl:p-6 font-semibold border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300 ease-in-out"
            >
              Classical
            </Button>
          </div>

          {/* business */}
          <div>
            <Button
              variant="outline"
              className="relative px-6 py-3 xl:text-2xl xl:p-6 font-semibold border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out"
            >
              Business
            </Button>
          </div>

          {/* moveepix */}
          <div>
            <Button
              variant="outline"
              className="relative px-6 py-3 xl:text-2xl xl:p-6 font-semibold border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              Moveepix
            </Button>
          </div>
        </div>
      </div>
      {/* ❌ div for suggestion and buttons */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
