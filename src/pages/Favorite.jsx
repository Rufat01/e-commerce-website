import { useState } from "react";
import PorcheShoes from "../assets/porche.png";
import { Responsive } from "../components/Products";


const Favorite = () => {

    const [count, setCount] = useState(1);

    const increaseCount = () => {
        setCount((count) => count + 1);
      };
    
      const decreaseCount = () => {
        if (count > 1) {
          setCount((count) => count - 1);
        }
      };

  return (
    <>
    <div className="px-32 mb-24 sm:px-5 md:px-5 flex flex-col gap-10">
      <div className="sm:flex md:flex items-center sm:mt-6 justify-between">
      <h1 className="text-[50px] font-main my-6 sm:mt-2 sm:mb-0">
        <span className="text-[#F14649]">My</span> Favorite
      </h1>
      <span className="text-[18px] font-semibold lg:hidden">&larr; Back</span>
      </div>

      <div className="flex gap-11 sm:flex-col">
        <div className="w-[400px] sm:w-full h-[400px] sm:h-[200px] md:h-[300px]">
          <img
            className="w-full h-full object-cover"
            src={PorcheShoes}
            alt=""
          />
        </div>

        <div className="flex flex-col w-[530px] sm:w-full">
          <div className="flex justify-between sm:flex-col mb-6">
            <div>
              <h1 className="text-[18px] font-bold mb-3">
                Electrify Nitro Men's{" "}
                <span className="text-[#F14649]">Running Shoes</span>
              </h1>
              <p className="text-sm font-semibold mb-2"><span className="text-[#878690]">Color: </span> Green Glare-Puma Black</p>
              <p className="text-sm font-semibold mb-3"><span className="text-[#878690]">Size:</span> 13</p>
              <span className="text-[#00C7B4]">InStock</span>
            </div>
            <div className="text-end sm:text-start px-2 sm:py-4 sm:px-0">
              <p className="text-[18px] font-bold text-[#5B5046] mb-4">120.00 AZN</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={increaseCount}
                  className="w-8 h-8 border flex items-center justify-center text-[20px]"
                >
                  <span className="mb-1 sm:m-0">+</span>
                </button>
                <span>{count}</span>
                <button
                  onClick={decreaseCount}
                  className="w-8 h-8 border flex items-center justify-center text-[20px]"
                >
                  <span className="mb-1 sm:m-0">-</span>
                </button>
              </div>
            </div>
          </div>
            <div>
                <p className="text-sm font-semibold mb-2"><span className="text-[#878690]">Subtotal:</span> 120.00 AZN</p>
                <p className="text-sm font-semibold mb-6"><span className="text-[#878690]">Shipping Costs:</span> 0.00 AZN</p>
                <div className="mb-6">
                    <button className="py-3 px-11 text-[16px] font-bold bg-[#313638] text-white rounded-lg transition-all duration-300 hover:bg-black">Add to basket</button>
                </div>
                <span className="text-sm font-semibold md:hidden sm:hidden">&larr; Back</span>
            </div>
        </div>
      </div>


    </div>

      <div className="mb-24 sm:px-5 md:px-5">
        <h1 className="font-main text-[50px] text-center sm:text-start mb-24 sm:mb-8 uppercase">
          You May Also <span className="text-[#F14649]">Like</span>
        </h1>
        <div className="px-28 md:px-0 sm:px-0 flex">
          <Responsive />
        </div>
      </div>

      </>
  );
};

export default Favorite;
