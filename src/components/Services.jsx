import Bin from "../assets/bin.svg";
import Lock from "../assets/lock.svg";
import Phone from "../assets/phone.svg";

const data = [
  {
    icon: Bin,
    header: "Free Shipping",
    desc: "Free delivery within city limits You can return the order through the courier free of charge",
  },
  {
    icon: Lock,
    header: "100% Secure Payment",
    desc: "You can pay your order by bank card quickly and securely. This will ensure you receive your goods as soon as possible",
  },
  {
    icon: Phone,
    header: "24/7 Support",
    desc: "24/7 support means customers can get help and find answers to questions as soon as they come up—24/7 and in real-time",
  },
];

const Services = () => {
  return (
    <div className="mt-[160px] sm:mt-[80px] py-[25px] px-[55px] sm:px-5 md:px-5">
      <h1 className="font-main text-[50px] text-center sm:text-start mb-16">
        <span className="text-[#F14649]">Why</span> Choose Us
      </h1>
      <div className="flex items-center gap-[125px] sm:gap-16 md:gap-[10px] justify-center sm:flex-col">
        {data.map((item) => (
          <Service key={item.header} item={item} />
        ))}
      </div>
    </div>
  );
};

const Service = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[282px] p-6 sm:w-full">
      <div className="w-[58px] h-[58px] bg-[#F14649] flex items-center justify-center rounded-full mb-8">
        <img src={item.icon} alt="" />
      </div>
      <div className="text-center">
        <h1 className="mb-2 text-[16px] font-bold">{item.header}</h1>
        <p className="text-sm text-black/40">{item.desc}</p>
      </div>
    </div>
  );
};

export default Services;
