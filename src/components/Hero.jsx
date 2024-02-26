import HeroShoes from '../assets/hero-shoes.png'

const Hero = () => {
  return (
    <div className="sm:px-5 lg:px-[50px]">
      <div className="grid grid-cols-[1fr_510px] grid-rows-[690px_160px] md:grid-rows-[450px] md:grid-cols-[1fr_300px] sm:flex sm:flex-col">
        <div className="flex flex-col md:justify-center lg:justify-center lg:pl-20 md:pl-5">
            <p className="font-semibold text-[#6E6359] text-lg mb-4 sm:order-2 sm:w-[250px] sm:mb-[80px]">Сomfortable <span className="text-[#F14649]">shoes</span> Сomfortable <span className="text-[#F14649]">road</span></p>
            <h1 className="font-main text-[120px] md:text-[60px] mb-4 lg:w-[440px] lg:leading-[140px] sm:text-[50px] sm:order-1 sm:mt-8 sm:mb-2">Styles for <span className="text-[#F14649]">you</span></h1>
            <span className="font-bold text-[#6E6359] text-[16px] mb-10 sm:order-4">We work for quality. We are multibrand</span>
            <button className="py-3 px-4 text-white text-2xl bg-[#313638] font-main rounded-lg w-[150px] transition-all duration-300 hover:bg-black sm:hidden">Shop now</button>
            <div className="bg-[#F14649] relative flex items-center sm:h-[200px] sm:mb-6 lg:hidden md:hidden sm:order-3">
                <img className='sm:absolute bottom-[-10px] left-7 sm:order-3 w-[280px]' src={HeroShoes} alt="" />
            </div>
        </div>
        <div className="bg-[#F14649] relative flex items-center sm:hidden">
            <img className='md:absolute lg:absolute left-[-150px] sm:order-3 md:w-[500px] md:left-[-100px]' src={HeroShoes} alt="" />
        </div>
        <div className='bg-[#313638] col-span-2 flex items-center sm:flex-col md:flex-col justify-center gap-[35px]'>
            <div className='py-7 px-20 sm:px-10 flex items-center gap-[77px] text-white'>
                <h1 className='text-[40px] sm:text-2xl font-bold'>1000+</h1>
                <span className='text-white/75 font-bold lg:w-4 text-sm'>Amazing products</span>
            </div>
            <div className='py-7 px-20 sm:px-10 flex items-center gap-[77px] sm:gap-[90px] text-white'>
                <h1 className='text-[40px] sm:text-2xl font-bold'>1600+</h1>
                <span className='text-white/75 font-bold lg:w-4 text-sm'>Happy customer</span>
            </div>
            <div className='py-7 px-20 sm:px-10 flex items-center gap-[77px] text-white'>
                <h1 className='text-[40px] sm:text-2xl font-bold'>1000+</h1>
                <span className='text-white/75 font-bold lg:w-4 text-sm'>Delivered products</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
