import Slider from "react-slick";
import Puma from "../assets/puma-logo.png";
import Adidas from "../assets/adidas-logo.png";
import Nike from "../assets/nike-logo.png";
import Reebok from "../assets/reebok-logo.png";

const data = [
  {
    item: Puma,
  },
  {
    item: Adidas,
  },
  {
    item: Nike,
  },
  {
    item: Reebok,
  },
];

const Testimonials = () => {
  return (
    <div className="sm:px-5 md:px-5">
      <h1 className="font-main text-[50px] text-center sm:text-start mb-[74px]">
        Our P<span className="text-[#F14649]">art</span>ners
      </h1>
      <Responsive />
    </div>
  );
};

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite:true,
          dots:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true,
          dots:false
        },
      },
    ],
  };
  return (
    <div className="slider-container lg:px-[200px] overflow-x-hidden">
      <Slider {...settings}>
        {data.map((item) => (
          <Testimonial key={item} testimonial={item.item} />
        ))}
      </Slider>
    </div>
  );
}

const Testimonial = ({ testimonial }) => {
  return (
    <div className="w-[200px] h-[120px] flex items-center justify-center sm:max-w-[300px]">
      <img src={testimonial} alt="" />
    </div>
  );
};

export default Testimonials;
