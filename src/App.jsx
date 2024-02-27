import Collections from "./components/Collections"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-0">
        <Header />
        <Hero />
        <Products />
        <Collections />
        <Services />
        <Testimonials />
    </div>
  )
}

export default App
