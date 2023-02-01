import React from "react";
import { BsGraphUp, BsGrid1X2 } from "react-icons/bs";
import { FiBriefcase } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";
import { CiFileOn, CiSettings } from "react-icons/ci";
import Link from "next/link";

const Menu = () => {
  return (
    <main className="flex flex-col  gap-8 py-10 px-2 bg-white mt-1 h-[625px] font-semibold">
      <Link href="#">
        <div className="flex items-center justify-center">
          <BsGrid1X2 size={20} />
        </div>
        <p className="text-center text-[10px]">Overview</p>
      </Link>
      <Link href="#">
        <div className="flex items-center justify-center">
          <BsGraphUp color="red" size={20} />
        </div>
        <p className="text-center text-[10px] text-red-500">Market</p>
      </Link>
      <Link href="#">
        <div className="flex items-center justify-center">
          <FiBriefcase size={20} />
        </div>
        <p className="text-center text-[10px]">Portfolio</p>
      </Link>
      <Link href="#">
        <div className="flex items-center justify-center">
          <SlPeople size={20} />
        </div>
        <p className="text-center text-[10px]">Community</p>
      </Link>
      <Link href="#">
        <div className="flex items-center justify-center">
          <CiFileOn size={20} />
        </div>
        <p className="text-center text-[10px]">Reports</p>
      </Link>
      <Link href="#">
        <div className="flex items-center justify-center">
          <CiSettings size={20} />
        </div>
        <p className="text-center text-[10px]">Settings</p>
      </Link>
    </main>
  );
};

export default Menu;
