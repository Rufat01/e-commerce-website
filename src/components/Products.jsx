import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ElectronShoes from "../assets/product.png";
import FavoriteIcon from "../assets/favorite-icon.svg";
import SuperShoes from "../assets/super.png";
import PorcheShoes from "../assets/porche.png";
import ElectronShoes2 from "../assets/electron.png";
import FavoritedIcon from "../assets/favorite-iconfilled.png";
import PumaShoes from "../assets/puma.png";
import ReebokShoes from "../assets/reebok.png";

import { useState } from "react";

const details = [
  {
    id: 1,
    image: ElectronShoes,
    title: "Electron E Sneakers",
    category: "Woman's Shoes",
    price: 120.0,
  },
  {
    id: 2,
    image: SuperShoes,
    title: "Super E Sneakers",
    category: "Man's Shoes",
    price: 113.0,
  },
  {
    id: 3,
    image: PorcheShoes,
    title: "Porche E Sneakers",
    category: "Woman's Shoes",
    price: 210.0,
  },
  {
    id: 4,
    image: ElectronShoes2,
    title: "Electron E Sneakers",
    category: "Man's Shoes",
    price: 160.0,
  },
];

const Products = () => {
  return (
    <div className="lg:px-[50px] md:px-5">
      <div className="mt-[96px] sm:mt-16">
        <h1 className="font-main text-center text-[50px] mb-16 sm:mb-8 sm:text-start sm:ml-5">
          <span className="text-[#F14649]">New</span> Arrivals
        </h1>
        <Responsive />
        <BestSneakers />
      </div>
    </div>
  );
};

const Responsive = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplaySpeed: 3000,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slider-container h-[430px] overflow-hidden">
      <Slider {...settings}>
        {details.map((item) => (
          <Sneaker key={item.id} sneaker={item} />
        ))}
      </Slider>
    </div>
  );
};

export const Sneaker = ({ sneaker }) => {
  const [icon, setIcon] = useState(false);

  return (
    <div className="w-[282px] sm:w-[355px] md:w-[355px]">
      <div className="relative w-full h-[276px] bg-[#E5E5E5]/50 flex items-center justify-center mb-6">
        <img
          src={sneaker.image}
          className="block w-full h-full object-cover"
          alt="shoes"
        />
        {icon ? (
          <img
            className="absolute top-[28px] right-[26px] w-5"
            src={FavoritedIcon}
            alt="favorite icon"
            onClick={() => setIcon((t) => !t)}
          />
        ) : (
          <img
            className="absolute top-[28px] right-[26px]"
            src={FavoriteIcon}
            alt="favorite icon"
            onClick={() => setIcon((t) => !t)}
          />
        )}
      </div>
      <div>
        <div className="flex items-center gap-11 mb-2">
          <h1 className="font-bold text-[16px]">{sneaker.title}</h1>
          <span className="text-black/60 text-sm">{sneaker.price} AZN</span>
        </div>
        <p className="text-black/60 text-sm mb-6">{sneaker.category}</p>
        <button className="py-3 px-6 border border-[#6E6359] rounded-lg font-semibold text-[#6E6359] transition-all duration-300 hover:bg-black hover:text-white">
          Add to basket
        </button>
      </div>
    </div>
  );
};

const BestSneakers = () => {
  return (
    <div className="mt-[200px] sm:mt-24 md:mt-24 mb-[105px] sm:mb-24">
      <h1 className="font-main text-[50px] text-center sm:text-start sm:px-5 mb-16 sm:mb-10">
        Bestseller This <span className="text-[#F14649]">Week</span>
      </h1>
      <div className="flex items-center justify-center sm:flex-col gap-12">
        <div className="w-[542px] sm:w-[358px] md:w-[358px]">
          <div className="w-full h-[324px] md:h-[250px] sm:h-[179px] bg-[#E5E5E5]/50 mb-6 sm:mb-16">
            <img className="w-full h-full object-cover md:h-[250px]" src={PumaShoes} alt="shoe" />
          </div>
          <div className="sm:mb-8">
            <div className="flex items-center justify-between mb-1">
              <h1 className="font-bold">Puma</h1>
              <span className="text-sm text-black/60 font-semibold">
                AZN 213.00
              </span>
            </div>
            <p className="text-sm text-black/60 font-semibold">Woman's Shoes</p>
          </div>
        </div>
        <div>
        <div className="w-[542px] sm:w-[358px] md:w-[358px]">
          <div className="w-full h-[324px] md:h-[250px] sm:h-[179px] bg-[#E5E5E5]/50 mb-6 sm:mb-16">
            <img className="w-full h-full object-cover md:h-[250px]" src={ReebokShoes} alt="shoe" />
          </div>
          <div className="sm:mb-8">
            <div className="flex items-center justify-between mb-1">
              <h1 className="font-bold">Reebok</h1>
              <span className="text-sm text-black/60 font-semibold">
                AZN 230.00
              </span>
            </div>
            <p className="text-sm text-black/60 font-semibold">Man's Shoes</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
