import Collections from "../components/Collections";
import Discount from "../components/Discount";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Collections />
      <Services />
      <Testimonials />
      <Discount />
    </div>
  );
};

export default Home;
