
import Facebook from "../assets/facebook.svg"
import Whatsapp from "../assets/whatsapp.svg"
import Instagram from "../assets/instagram.svg"
import { Link, Navigate } from "react-router-dom";


const navLinks = [
  {
    value: "Home",
    link: '/'
  },
  {
    value: "Shop",
    link: '/shop'
  },
  {
    value: "Blogs",
    link: '#'
  },
  {
    value: "Order Tracking",
    link: '#'
  },
  {
    value: "Wishlist",
    link: '/favorites'
  },
  {
    value: "Basket",
    link: '/cart'
  },
];

const Footer = () => {
  const date = new Date();

  return (
    <footer className="relative flex sm:block items-center justify-between px-3 py-6 sm:pb-0 border-t overflow-hidden">
      <div className="flex flex-col">
        <h1 className="font-main text-2xl mb-6">
          <span className="text-[#F14649]">S</span>porty
        </h1>
        <div className="mb-6">
          <h1 className="text-sm font-semibold mb-1">Address</h1>
          <p className="text-sm text-black/60 font-semibold">Hasan Aliyev 1000 AZ</p>
        </div>
        <div className="mb-6">
          <h1 className="text-sm font-semibold mb-1">Email</h1>
          <a className="text-sm text-black/60 font-semibold" href="#">Sporty@gmail.com</a>
        </div>
        <div className="mb-14">
          <h1 className="text-sm font-semibold mb-1">Phone Number</h1>
          <a className="text-sm text-black/60 font-semibold" href="tel:+994508364315">+994508364315</a>
        </div>
      </div>


      <div>
        <ul className="flex flex-col gap-2 sm:mb-8 sm:gap-4 md:gap-3">
          {navLinks.map((link) => (
            <NavLink link={link} key={link.value} />
          ))}
        </ul>
      </div>


      <div className="flex flex-col">
        <h1 className="text-sm font-semibold mb-[14px]">Let's go</h1>
        <form className="relative flex items-center mb-[34px]">
          <input className="w-[300px] h-10 bg-[#F6F6F6] text-xs text-black/40 pl-[14px] pr-[90px] rounded-lg" placeholder="Enter Your Email Adress" type="text" />
          <button className="absolute px-3 py-2 text-[16px] bg-[#313638] text-white rounded-lg right-0 transition-all duration-300 hover:bg-black">Join us</button>
        </form>
        <h1 className="text-sm font-semibold mb-[14px]">Follow us</h1>
        <ul className="flex items-center gap-6 mb-6">
          <a href="#"><img src={Facebook}/></a>
          <a href="#"><img src={Whatsapp}/></a>
          <a href="#"><img src={Instagram}/></a>
        </ul>
      </div>


      <div className="sm:static absolute bottom-0 w-full h-16 flex items-center justify-center text-center border-t">
        <p className="text-sm font-semibold text-black/60">Copyright Sporty {date.getFullYear()} All Right Reserved</p>
      </div>
    </footer>
  );
};

const NavLink = ({ link }) => {
  return (
    <a href={link.link} className="text-sm font-semibold text-black/60 transition-all duration-300 hover:text-[#F14649] hover:ml-1">
      {link.value}
    </a>
  );
};

export default Footer;
