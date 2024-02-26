import Arrow from "../assets/rarrow.svg";
import Collection1 from "../assets/collectionV1.png";
import Collection2 from "../assets/collectionV2.png";
import Collection3 from "../assets/collectionV3.png";


const data = [
  {
    id: 1,
    image: Collection1,
    category: "Woman",
  },
  {
    id: 2,
    image: Collection2,
    category: "Man",
  },
  {
    id: 3,
    image: Collection3,
    category: "Kids",
  },
];

const Collections = () => {
  return (
    <div className="sm:px-5 md:px-5">
      <div>
        <h1 className="font-main text-[50px] text-center sm:text-start sm:w-[265px] mb-16 sm:mb-12">
          Collection for <span className="text-[#F14649]">you</span>
        </h1>
        <div className="flex items-center sm:flex-col justify-center gap-6 sm:gap-[90px]">
        {data.map((item) => (
          <Collection key={item.id} item={item} />
        ))}
        </div>
      </div>
    </div>
  );
};

const Collection = ({item}) => {
  return (
      <div className="w-[385px] h-[575px] md:h-[400px] rounded-lg sm:px-4 relative">
        <img
          className="block w-full h-full object-cover rounded-lg mb-6"
          src={item.image}
          alt=""
        />
        <div className="flex items-center gap-3 sm:absolute sm:bottom-[-60px]">
          <h1 className="text-2xl font-main text-[#6E6359]">{item.category}</h1>
          <img className="w-2" src={Arrow} alt="" />
        </div>
      </div>
  );
};

export default Collections;
