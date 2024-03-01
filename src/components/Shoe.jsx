import { Sneaker } from "./Products";
import ElectronShoes from "../assets/product.png";
import SuperShoes from "../assets/super.png";
import PorcheShoes from "../assets/porche.png";
import ElectronShoes2 from "../assets/electron.png";
import PumaShoes from "../assets/puma.png";
import ReebokShoes from "../assets/reebok.png";

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

const Shoe = () => {
  return (
    <div className="lg:px-[50px] md:px-5">
      <div className="my-[50px] sm:mt-6">
        <div className="flex items-center justify-center flex-wrap gap-6">
        {details.map((item) => (
          <Sneaker key={item.id} sneaker={item} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Shoe;
