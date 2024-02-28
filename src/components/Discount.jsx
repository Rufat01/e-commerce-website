const Discount = () => {
  return (
    <div className="bg-[#313638] text-center py-6 mb-[100px] sm:mx-3 md:mx-5">
        <h1 className="font-main text-[50px] sm:text-3xl text-white mb-6">Subscribe to Get <span className="text-[#F14649]">10%</span></h1>
        <form className="relative inline-flex flex items-center justify-center">
            <input type="text" className="w-[330px] sm:w-[300px] h-12 text-[16px] text-black/60 pl-2 pr-[120px] rounded-lg" placeholder="Enter you email adress" />
            <button className="absolute py-2 px-4 border border-[#F14649] text-[#F14649] text-[16px] right-0 rounded-lg m-1 transition-all duration-300 hover:bg-[#F14649] hover:text-white">Subscribe</button>
        </form>
    </div>
  )
}

export default Discount
