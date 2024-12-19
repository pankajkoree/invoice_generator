"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import plus from "../../../public/plus.png";
import Image from "next/image";
import { useState } from "react";

interface Item {
  id: number;
  name?: string;
  percentage?: number;
  quantity?: number;
  price?: number;
}

const Classical = () => {
  const [items, setItems] = useState<Item[]>([{ id: 1 }]);

  console.log(items);

  const addNewLine = () => {
    setItems((prevItems) => [...prevItems, { id: prevItems.length + 1 }]);
  };

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
              className="border border-slate-400"
              placeholder="enter biller's name"
            />
            <Input
              className="border border-slate-400"
              placeholder="enter the country name"
            />
            <Input
              className="border border-slate-400"
              placeholder="enter contact number"
            />
            <Input
              className="border border-slate-400"
              placeholder="enter address"
            />
          </div>

          {/* billed to */}
          <div className="flex flex-col bg-blue-100 p-2 gap-4 rounded-xl">
            <Label className="text-xl">
              Billed To <span className="text-14px">(Client details)</span>
            </Label>
            <Input
              className="border border-slate-400"
              placeholder="enter client's name"
            />
            <Input
              className="border border-slate-400"
              placeholder="enter the client's country"
            />
            <Input
              className="border border-slate-400"
              placeholder="enter client's contact number"
            />
            <Input
              className="border border-slate-400"
              placeholder="enter client's address"
            />
          </div>
        </div>

        {/* item's div */}
        <div className="flex flex-col p-4">
          {/* item label */}
          <div className="flex bg-slate-600 rounded-t-xl text-xl text-white p-2">
            <p className="xl:w-[40%]">Item</p>
            <p className="xl:w-[10%]">GST</p>
            <p className="xl:w-[10%]">Quantity</p>
            <p className="xl:w-[10%]">Rate</p>
            <p className="xl:w-[10%]">Amount</p>
            <p className="xl:w-[10%]">C. GST</p>
            <p className="xl:w-[10%]">Total</p>
          </div>

          {/* item's inputs */}
          {/* <div className="flex rounded-t-xl text-xl text-white p-2 gap-1">
            <div className="xl:w-[40%]">
              <Input placeholder="item's name" />
            </div>
            <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
              <Input />
              <p> % </p>
            </div>
            <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
              <Input />
            </div>
            <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
              <p> ₹ </p>
              <Input />
            </div>
            <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
              <p> ₹ </p>
              <Label className="text-xl">{1}</Label>
            </div>
            <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
              <p> ₹ </p>
              <Label className="text-xl">{1}</Label>
            </div>
            <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
              <p> ₹ </p>
              <Label className="text-xl">{1}</Label>
            </div>
          </div> */}

          {/* Items Inputs */}
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex rounded-t-xl text-xl text-white p-2 gap-1"
            >
              <div className="xl:w-[40%]">
                <input
                  placeholder="item's name"
                  className="w-full rounded p-2 border text-white"
                  value={item.name || ""}
                  onChange={(e) =>
                    setItems((prev) =>
                      prev.map((i) =>
                        i.id === item.id ? { ...i, name: e.target.value } : i
                      )
                    )
                  }
                />
              </div>
              <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
                <input
                  type="number"
                  className="w-full rounded p-2 border text-white text-center"
                  value={item.percentage || ""}
                  onChange={(e) =>
                    setItems((prev) =>
                      prev.map((i) =>
                        i.id === item.id
                          ? {
                              ...i,
                              percentage: parseFloat(e.target.value) || 0,
                            }
                          : i
                      )
                    )
                  }
                />
                <p>%</p>
              </div>
              <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
                <input
                  type="number"
                  className="w-full rounded p-2 border text-white text-center"
                  value={item.quantity || ""}
                  onChange={(e) =>
                    setItems((prev) =>
                      prev.map((i) =>
                        i.id === item.id
                          ? { ...i, quantity: parseInt(e.target.value) || 0 }
                          : i
                      )
                    )
                  }
                />
              </div>
              <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
                <p>₹</p>
                <input
                  type="number"
                  className="w-full rounded p-2 border text-white text-center"
                  value={item.price || ""}
                  onChange={(e) =>
                    setItems((prev) =>
                      prev.map((i) =>
                        i.id === item.id
                          ? { ...i, price: parseFloat(e.target.value) || 0 }
                          : i
                      )
                    )
                  }
                />
              </div>
              <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
                <p>₹</p>
                <label className="text-xl">
                  {(item.price || 0) * (item.quantity || 0)}
                </label>
              </div>
              <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
                <p>₹</p>
                <label className="text-xl">{index + 1}</label>
              </div>
              <div className="xl:w-[10%] flex justify-center text-slate-700 gap-1">
                <p>₹</p>
                <label className="text-xl">{index + 1}</label>
              </div>
            </div>
          ))}

          {/* Add New Line Button */}
          <div
            className="relative flex items-center justify-center gap-2 p-2 border-2 border-dashed cursor-pointer"
            onClick={addNewLine}
          >
            <Image src={plus} alt="plus" className="w-[20px] h-[20px]" />
            <p className="text-xl">Add new line</p>
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
