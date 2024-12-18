import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Classical = () => {
  return (
    <div className="relative flex flex-col xl:w-[60%] xl:min-h-screen xl:left-[20%] text-center text-slate-800 gap-12">
      {/* heading */}
      <div>
        <h1 className="text-2xl">
          Create <b>classical</b> invoice in few minutes
        </h1>
      </div>

      {/* details filling div */}
      <div className="bg-slate-50 rounded-xl">
        {/* sub-heading */}
        <div className="flex justify-center top-2 p-2">
          <h2 className="text-2xl">Invoice</h2>
        </div>

        {/* logo, invoice no. and date */}
        <div>
          {/* date and invoice no. */}
          <div className="flex flex-col gap-1">
            <div className="relative flex items-center">
              <Label htmlFor="invoice_number" className="xl:w-[20%] text-xl">
                Invoice No.
              </Label>
              <Input id="invoice_number" className="xl:w-[30%]" />
            </div>
            <div className="relative flex">
              <Label htmlFor="invoice_date" className="xl:w-[20%] text-xl">
                Invoice Date
              </Label>
              <Input id="invoice_date" type="date" className="xl:w-[30%]" />
            </div>
          </div>
          {/* logo */}
          {/* <div>
            <input type="file" />
          </div> */}
        </div>

        {/* logo for billed by and billed to */}
        <div className="grid grid-cols-2 gap-2 p-4">
          {/* billed by */}
          <div className="flex flex-col bg-blue-100 p-2 gap-4 rounded-xl">
            <Label className="text-xl">
              Billed By <span className="text-14px">(Your details)</span>
            </Label>
            <Input
              className="border border-bottom border-blue-500"
              placeholder="enter biller's name"
            />
            <Input
              className="border border-bottom border-blue-500"
              placeholder="enter the country name"
            />
            <Input
              className="border border-bottom border-blue-500"
              placeholder="enter contact number"
            />
            <Input
              className="border border-bottom border-blue-500"
              placeholder="enter address"
            />
          </div>

          {/* billed to */}
          <div className="flex flex-col bg-blue-100 p-2 gap-4 rounded-xl">
            <Label className="text-xl">
              Billed To <span className="text-14px">(Client details)</span>
            </Label>
            <Input
              className="border border-bottom border-blue-500"
              placeholder="enter client's name"
            />
            <Input
              className="border border-bottom border-blue-500"
              placeholder="enter the client's country"
            />
            <Input
              className="border border-bottom border-blue-500"
              placeholder="enter client's contact number"
            />
            <Input
              className="border border-bottom border-blue-500"
              placeholder="enter client's address"
            />
          </div>
        </div>

        {/* save */}
        <div className="flex p-2 justify-center">
          <Button>Save & continue</Button>
        </div>
      </div>
    </div>
  );
};

export default Classical;
