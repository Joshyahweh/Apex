import React from "react";

const Categories = () => {
  return (
    <section className="bg-white w-full my-2 text-[10px] font-bold">
      <main className="flex items-center gap-5 pl-10">
        <p>Board</p>
        <p className="bg-[#D71E0E] py-2 px-3 rounded-3xl text-white">X-Traded</p>
        <p className="bg-[#F8FAFB] py-1 px-3 rounded-2xl">OTC</p>
        <p className="bg-[#F8FAFB] py-1 px-3 rounded-2xl">FI</p>
        <p className="bg-[#F8FAFB] py-1 px-3 rounded-2xl">Derivaties</p>
      </main>
      <main className="flex items-center gap-5 py-5 pl-5">
        <p>Product</p>
        <p className="bg-[#D71E0E] py-1 px-4 rounded-xl text-white">All</p>
        <p className="bg-[#F8FAFB] py-1 px-3 rounded-2xl">SMAZ</p>
        <p className="bg-[#F8FAFB] py-1 px-3 rounded-2xl">SBBS</p>
        <p className="bg-[#F8FAFB] py-1 px-3 rounded-2xl">SPRL</p>
        <p className="bg-[#F8FAFB] py-1 px-3 rounded-2xl">SGNG</p>
        <p className="bg-[#F8FAFB] py-1 px-3 rounded-2xl">SSGM</p>
        <p className="bg-[#F8FAFB] py-1 px-3 rounded-2xl">FETC</p>
        <p className="bg-[#F8FAFB] py-1 px-3 rounded-2xl">SCOC</p>
      </main>
    </section>
  );
};

export default Categories;
