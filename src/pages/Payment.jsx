import PorcheShoes from "../assets/porche.png";


const Payment = () => {
  return (
    <div className="flex sm:flex-col justify-between my-6 px-[122px] sm:px-5 md:px-5">
         <h1 className="text-[50px] font-main lg:hidden md:hidden"><span className="text-[#F14649]">My</span> Shipping</h1>
      <div className="flex flex-col gap-11 sm:gap-5 sm:order-2">
          <h1 className="text-[50px] font-main sm:hidden"><span className="text-[#F14649]">My</span> Shipping</h1>
          <div>
              <p className="text-lg text-[#5B5046] font-bold mb-2">Info for Shipping</p>
              <form className="grid grid-cols-2 gap-6 sm:flex sm:flex-col md:flex md:flex-col">
                   <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm text-black/40 mb-1">First Name</label>
                        <input className="w-[240px] sm:w-full p-3 rounded-lg border border-black" type="text" id="name" placeholder="First Name" />
                   </div>

                   <div className="flex flex-col">
                        <label htmlFor="lastname" className="text-sm text-black/40 mb-1">Last Name</label>
                        <input className="w-[240px] sm:w-full p-3 rounded-lg border border-black" type="text" id="lastname" placeholder="Last Name" />
                   </div>

                   <div className="flex flex-col">
                        <label htmlFor="city" className="text-sm text-black/40 mb-1">City</label>
                        <input className="w-[240px] sm:w-full p-3 rounded-lg border border-black" type="text" id="city" placeholder="City" />
                   </div>

                   <div className="flex flex-col">
                        <label htmlFor="zip" className="text-sm text-black/40 mb-1">Zip Code</label>
                        <input className="w-[240px] sm:w-full p-3 rounded-lg border border-black" type="text" placeholder="Zip Code" id="zip" />
                   </div>   

                   <div className="flex flex-col">
                        <label htmlFor="address" className="text-sm text-black/40 mb-1">Address</label>
                        <input className="w-[240px] sm:w-full p-3 rounded-lg border border-black" type="text" placeholder="Address" id="address" />
                   </div>   

              </form>
          </div>
          
          <div>
               <p className="text-lg text-[#5B5046] font-bold mb-2">Contact</p>
               <form className="flex sm:flex-col gap-6 mb-6 md:flex-col">
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-sm text-black/40 mb-1">Phone Number</label>
                        <input className="w-[240px] sm:w-full p-3 rounded-lg border border-black" type="text" id="phone" placeholder="Phone" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className="text-sm text-black/40 mb-1">E-Mail</label>
                        <input className="w-[240px] sm:w-full p-3 rounded-lg border border-black" type="email" id="phone" placeholder="E-Mail" />
                    </div>
               </form>

               <div className="flex flex-col gap-3 mb-10">
                        <div className="flex items-center sm:items-start gap-2">
                            <input className="accent-[#F14649]" type="checkbox" />
                            <span className="text-sm">Please send me SMS shipping updates about my order</span>
                        </div> 

                        <div className="flex items-center sm:items-start gap-2">
                            <input className="accent-[#F14649]" type="checkbox" />
                            <span className="text-sm">Please add me to the Sporty email list</span>
                        </div>
               </div>

               <div className="flex flex-col items-center">
                   <span className="mb-10">&larr; Back</span>
                   <button className="py-3 px-11 text-[16px] font-bold bg-[#313638] text-white rounded-lg transition-all duration-300 hover:bg-black">Continue To Payment</button>
               </div>

          </div>

      </div>

        {/* Second Div */}

        <div className="flex flex-col w-[450px] sm:w-full py-6 sm:order-1">
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
              <p className="text-[18px] font-bold text-[#5B5046] mb-1">120.00 AZN</p>
            </div>
          </div>
            <div>
                <p className="text-sm font-semibold mb-2"><span className="text-[#878690]">Subtotal:</span> 120.00 AZN</p>
                <p className="text-sm font-semibold mb-6"><span className="text-[#878690]">Shipping Costs:</span> 0.00 AZN</p>
            </div>

         <div className="w-[400px] sm:w-full h-[400px] sm:h-[200px] md:h-[300px] mx-auto mt-[76px] sm:mt-10">
            <img className="w-full h-full object-cover" src={PorcheShoes} alt="" />
         </div>

        </div>

    </div>
  )
}

export default Payment
