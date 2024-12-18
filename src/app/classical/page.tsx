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
      <div>
        {/* sub-heading */}
        <div>
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
            <div>
              {/* billed by */}
              <div></div>

               {/* billed to */}
               <div></div>
            </div>

      </div>

      {/* save */}
      <div>{/* div */}</div>
    </div>
  );
};

export default Classical;
