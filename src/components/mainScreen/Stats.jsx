import React from "react";

const Stats = () => {
  return (
    <section className="grid grid-cols-2 text-[10px] font-bold">
      <main className="space-y-3 bg-white">
        <div className="flex items-center text-slate-500   px-8  space-x-48">
          <p>Products</p>
          <p>Quantity</p>
          <p className="relative right-[70px]">Bid Price</p>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8">
          <p>Soybeans (SSBS)</p>
          <p className="text-center">2003</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-green-500">1736.92</p>
            <p className=" px-5 border-green-500 text-green-500  border-[1.7px]">
              Buy
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8 ">
          <p>Paddy Rice (SPRL)</p>
          <p className="text-center">11293</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-green-500">3627.00</p>
            <p className=" px-5 border-green-500 text-green-500 border-[1.7px]">
              Buy
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8">
          <p>Maize (SMAZ)</p>
          <p className="text-center">1832</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-green-500">8294.01</p>
            <p className=" px-5 border-green-500 text-green-500 border-[1.7px]">
              Buy
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8">
          <p>Sorghum (SSGM)</p>
          <p className="text-center">29102</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-green-500">8192.00</p>
            <p className=" px-5 border-green-500 text-green-500 border-[1.7px]">
              Buy
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8">
          <p>Fair Trade ETC (FETC)</p>
          <p className="text-center">3212</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-green-500">1736.92</p>
            <p className=" px-5 border-green-500 text-green-500 border-[1.7px]">
              Buy
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8">
          <p>Fair Trade ETC (FETC)</p>
          <p className="text-center">3212</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-green-500">1736.92</p>
            <p className=" px-5 border-green-500 text-green-500 border-[1.7px]">
              Buy
            </p>
          </div>
        </div>
        <hr />
      </main>
      <main className="space-y-3 bg-white ml-2">
        <div className="flex items-center text-slate-500  px-8  space-x-48">
          <p>Products</p>
          <p>Quantity</p>
          <p className="relative right-20">Offer Price</p>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8">
          <p>Soybeans (SSBS)</p>
          <p className="text-center">2003</p>
          <div className="flex items-center justify-end text-left gap-8 justify-end">
            <p className="text-red-500">1736.92</p>
            <p className=" px-5 border-red-500 text-red-500  border-[1.7px]">
              Sell
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8 ">
          <p>Paddy Rice (SPRL)</p>
          <p className="text-center">11293</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-red-500">3627.00</p>
            <p className=" px-5 border-red-500 text-red-500 border-[1.7px]">
              Sell
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8">
          <p>Maize (SMAZ)</p>
          <p className="text-center">1832</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-red-500">8294.01</p>
            <p className=" px-5 border-red-500 text-red-500 border-[1.7px]">
              Sell
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8">
          <p>Sorghum (SSGM)</p>
          <p className="text-center">29102</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-red-500">8192.00</p>
            <p className=" px-5 border-red-500 text-red-500 border-[1.7px]">
              Sell
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8">
          <p>Fair Trade ETC (FETC)</p>
          <p className="text-center">3212</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-red-500">1736.92</p>
            <p className=" px-5 border-red-500 text-red-500 border-[1.7px]">
              Sell
            </p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 px-8">
          <p>Fair Trade ETC (FETC)</p>
          <p className="text-center">3212</p>
          <div className="flex items-center gap-8 justify-end">
            <p className="text-red-500">1736.92</p>
            <p className=" px-5 border-red-500 text-red-500 border-[1.7px]">
              Sell
            </p>
          </div>
        </div>
        <hr />
      </main>
    </section>
  );
};

export default Stats;
