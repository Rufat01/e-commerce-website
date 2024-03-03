import Slider from "react-slick";
import Puma from "../assets/puma2.png";
import Detail2 from "../assets/detail2.png";
import Detail3 from "../assets/detail3.png";
import { useState } from "react";
import Select from "react-select";
import Favorite from "../assets/favorite-icon.svg";
import { Responsive as Swiper } from "../components/Products";

const options = [
  { value: "Size", label: "Size" },
  { value: "39", label: "39" },
  { value: "40", label: "40" },
  { value: "41", label: "41" },
  { value: "42", label: "42" },
  { value: "43", label: "43" },
  { value: "44", label: "44" },
];

const details = [
  {
    image: Puma,
  },
  {
    image: Detail2,
  },
  {
    image: Detail3,
  },
];

const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  const handleColor = (e, index) => {
    const target = e.target;
    const selectedColor = target.getAttribute("data-color");
    setColor(selectedColor);
    setActiveIndex(index);
  };

  return (
    <div className="mt-[100px] sm:mt-5 mb-[80px] lg:px-[100px] md:mt-6 sm:px-5 md:px-5 overflow-hidden">
      <div className="grid grid-cols-[630px_1fr] gap-10 sm:flex sm:flex-col md:flex md:flex-col">
        <div>
          <Responsive />
        </div>

        <div className="mb-24">
          <div className="flex flex-col">
            <h1 className="text-[40px] font-main mb-3 w-[400px] md:w-full sm:w-full">
              Retaliate Block <span className="text-[#F14649]">Man's</span>{" "}
              Running Shoes
            </h1>
            <p className="text-[16px] text-black/40 font-bold mb-3">
              Men's Shoes
            </p>
            <span className="text-lg font-bold mb-[55px]">142.00 AZN</span>
            <span className="text-[20px] mb-[35px]">&larr; back</span>
          </div>

          <div className="py-3 px-2">
            <label>Color</label>
            <ul className="flex items-center gap-1 mt-3 mb-4 sm:my-8 ">
              <li
                onClick={(e) => handleColor(e, 0)}
                data-color="red"
                className={`${
                  activeIndex === 0 ? "active" : ""
                } w-[30px] h-[30px] rounded-full bg-[#F14649] [&.active]:border border-black [&.active]:border-2`}
              ></li>
              <li
                onClick={(e) => handleColor(e, 1)}
                data-color="pink"
                className={`${
                  activeIndex === 1 ? "active" : ""
                } w-[30px] h-[30px] rounded-full bg-[#F59DBB] [&.active]:border border-black [&.active]:border-2`}
              ></li>
              <li
                onClick={(e) => handleColor(e, 2)}
                data-color="purple"
                className={`${
                  activeIndex === 2 ? "active" : ""
                } w-[30px] h-[30px] rounded-full bg-[#D88AE5] [&.active]:border border-black [&.active]:border-2`}
              ></li>
              <li
                onClick={(e) => handleColor(e, 3)}
                data-color="cyan"
                className={`${
                  activeIndex === 3 ? "active" : ""
                } w-[30px] h-[30px] rounded-full bg-[#0AE3FF] [&.active]:border border-black [&.active]:border-2`}
              ></li>
            </ul>

            <div className="flex items-center gap-10">
              <Select
                className="w-[90px]"
                defaultValue={options[0]}
                options={options}
              />
              <div className="flex items-center gap-4">
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

            <div className="flex mt-10 gap-[18px] border-t pt-5">
              <button className="px-4 py-3 bg-[#313638] text-white rounded-lg font-bold transition-all duration-300 hover:bg-black">
                Add to Basket
              </button>
              <button className="flex items-center gap-1 px-4 py-3 border border-black rounded-lg font-bold transition-all duration-300 hover:bg-[#F14649] hover:text-[white]">
                Add to Wishlist
                <img className="w-4 ml-2" src={Favorite} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-main text-[50px] text-center sm:text-start mb-24 sm:mb-8 uppercase">
          You May Also <span className="text-[#F14649]">Like</span>
        </h1>
        <div className="px-5 md:px-0 sm:px-0 flex">
          <Swiper />
        </div>
      </div>
    </div>
  );
};

function Responsive() {
  const [image, setImage] = useState(Puma);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePicture = (e, index) => {
    const targetImage = e.target.src;
    setImage(targetImage);
    setActiveIndex(index);
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ImageItem = ({ src, index }) => {
    return (
      <div
        onClick={(e) => handlePicture(e, index)}
        className={`w-[70px] h-[70px] border ${
          activeIndex === index ? "active" : ""
        } [&.active]:border-red-500`}
      >
        <img className="w-full h-full object-cover" src={src} alt="" />
      </div>
    );
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="w-[628px] h-[450px] sm:h-[300px] mb-1 rounded-xl">
          {/* Main Image Slider */}
          <img className="w-full h-full object-cover rounded-xl" src={image} alt="" />
        </div>
      </Slider>
      <div className="flex items-center justify-center gap-2">
        <ImageItem src={Puma} index={0} />
        <ImageItem src={Detail2} index={1} />
        <ImageItem src={Detail3} index={2} />
      </div>
    </div>
  );
}

export default ProductDetails;
