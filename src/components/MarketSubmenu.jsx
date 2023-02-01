import React from "react";
import { BsEye, BsSearch } from "react-icons/bs";
import { GrFormView, GrLineChart } from "react-icons/gr";
import { RiBook3Line } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

const MarketSubmenu = () => {
  return (
    <main className="mx-2 bg-white h-fit pb-5 my-2">
      <label className="relative block">
        <div className="absolute inLink href='#'-y-0 left-0 flex items-center pl-2">
          <BsSearch className="text-gray-500" />
        </div>
        <input
          className="placeholder:text-slate-400 block bg-[#F8FAFB] w-full border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 sm:text-sm"
          placeholder="Search"
          type="text"
          name="search"
        />
      </label>
      <div className="flex flex-col gap-4 pt-8 font-bold">
        <Link href="#" className="flex items-center justify-start gap-5  pl-5">
          <GrLineChart size={20} />
          <p className="text-[10px]">Product View</p>
        </Link>
        <Link
          href="#"
          className="flex items-center bg-[#F8FAFB] py-3 justify-start gap-5 mx-2 pl-3"
        >
          <RiBook3Line size={20} />
          <p className="text-[10px] text-red-500">Order Book</p>
        </Link>
        <Link href="#" className="flex items-center justify-start gap-5  pl-5">
          <GiBackwardTime size={20} />
          <p className="text-[10px]">Price History</p>
        </Link>
        <Link href="#" className="flex items-center justify-start gap-5  pl-5">
          <BsEye size={20} />
          <p className="text-[10px]">Open Orders</p>
        </Link>
        <Link href="#" className="flex items-center justify-start gap-5  pl-5">
          <AiOutlineCheckCircle size={20} />
          <p className="text-[10px]">ClosedOrders</p>
        </Link>
        <Link href="#" className="flex items-center justify-start gap-5  pl-5">
          <MdOutlineCancel size={20} />
          <p className="text-[10px]">Cancelled Trades</p>
        </Link>
      </div>
    </main>
  );
};

export default MarketSubmenu;
