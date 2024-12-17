import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex flex-col xl:w-[70%] min-h-screen bg-purple-300 xl:left-[15%] gap-">
      {/* div for */}
      <div className="relative flex flex-col top-12 items-center gap-8">
        <h1 className="text-red-600 text-6xl">Invoice Generator</h1>
        <h2 className="text-3xl italic">Free online invoice maker</h2>
        <p className="relative flex xl:w-[50%] text-center text-xl">
          Create professional invoices online in just a few minutes with our
          free invoice generator. Simply enter your billing details, customize
          the design, and download or print as a PDF. Save time and stay
          organized with easy-to-use features for all your invoicing needs.
        </p>
      </div>
      <div className="relative flex flex-col top-12 items-center">
        <div>
          <p>Choose based on your invoice type</p>
        </div>
        <div>
          <Button>Classical</Button>
          <Button>Business</Button>
          <Button>Moveepix</Button>
        </div>
      </div>
    </div>
  );
}
