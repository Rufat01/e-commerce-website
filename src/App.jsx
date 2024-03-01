import Collections from "./components/Collections"
import Discount from "./components/Discount"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Shoes from "./pages/Shoes"

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-0">
        <Header />
            {/* <Hero />
            <Products />
            <Collections />
            <Services />
            <Testimonials />
            <Discount /> */}
            <Shoes /> {/* Shop Page!*/}
        <Footer />
    </div>
  )
}


export default App
