import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.png";
import { IoSunnyOutline } from "react-icons/io5";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";

const Header = () => {
  return (
    <header className="grid grid-cols-2 items-center justify-between bg-white px-4">
      <main className="flex items-center justify-between  pr-10">
        <Image src={logo} alt="Logo" className="cursor-pointer" />
        <div className="flex items-center justify-between gap-2 bg-[#F4F4F6] p-2 rounded-2xl cursor-pointer">
          <p className="uppercase text-[10px] font-semibold">light</p>
          <IoSunnyOutline className="bg-white p-1 rounded-full" size={20} />
        </div>
      </main>

      <main className="flex items-center justify-between uppercase  bg-white">
        <div className="flex items-center justify-between gap-16 border-x-2  px-6">
          <BiChevronRight className="cursor-pointer" size={15} />
          <div className="text-center">
            <p className="text-[10px] text-slate-500">
              cash balance <br />
            </p>
            <strong className="flex items-center  text-[12px]">
              <TbCurrencyNaira />
              8,374,763
            </strong>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-slate-500">
              securities value <br />
            </p>
            <strong className="flex items-center  text-[12px]">
              <TbCurrencyNaira />
              8,374,763
            </strong>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-slate-500">
              loan balance <br />
            </p>
            <strong className="flex items-center  text-[12px]">
              <TbCurrencyNaira />
              7,542,246
            </strong>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="bg-[#1E1E1E] text-white cursor-pointer px-2 py-1 text-[10px] ">
            Demo
          </p>
          <BiChevronDown className="cursor-pointer" size={15} />
        </div>
      </main>
    </header>
  );
};

export default Header;
