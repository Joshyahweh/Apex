import React from "react";

const Tradelog = () => {
  return (
    <section className="text-[10px] bg-white mt-2 font-bold h-60 overflow-auto">
      <h2 className="px-8 py-3">Trade Log</h2>
      <hr />
      <main className="space-y-3">
        <div className="grid grid-cols-7 text-slate-500  px-8 ">
          <p>Security</p>
          <p>Board</p>
          <p>Order Type</p>
          <p>Matched Price</p>
          <p>Quantity</p>
          <p>Date</p>
          <p>Time</p>
        </div>
        <hr />
        <div className="grid grid-cols-7 px-8">
          <p>Soybeans (SSBS)</p>
          <p>X-Traded</p>
          <p>Buy</p>
          <p>1792.65</p>
          <p>9265</p>
          <p>17 Oct, 2020</p>
          <p>07:38</p>
        </div>
        <hr />
        <div className="grid grid-cols-7 px-8 ">
          <p>Paddy Rice (SPRL)</p>
          <p>X-Traded</p>
          <p>Buy</p>
          <p>1792.65</p>
          <p>9265</p>
          <p>8 Sep, 2020</p>
          <p>02:02</p>
        </div>
        <hr />
        <div className="grid grid-cols-7 px-8">
          <p>Maize (SMAZ)</p>
          <p>OTC</p>
          <p>Sell</p>
          <p>1792.65</p>
          <p>9265</p>
          <p>24 May, 2020</p>
          <p>06:42</p>
        </div>
        <hr />
        <div className="grid grid-cols-7 px-8">
          <p>Sorghum (SSGM)</p>
          <p>FI</p>
          <p>Sell</p>
          <p>1792.65</p>
          <p>9265</p>
          <p>1 Feb, 2020</p>
          <p>01:09</p>
        </div>
        <hr />
        <div className="grid grid-cols-7 px-8">
          <p>Fair Trade ETC (FETC)</p>
          <p>3212</p>
          <p>1736.92</p>
        </div>
        <hr />
        <div className="grid grid-cols-7 px-8">
          <p>Fair Trade ETC (FETC)</p>
          <p>3212</p>
          <p>1736.92</p>
        </div>
        <hr />
      </main>
    </section>
  );
};

export default Tradelog;
