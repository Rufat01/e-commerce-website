import Collections from "./components/Collections"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Services from "./components/Services"

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-0">
        <Header />
        <Hero />
        <Products />
        <Collections />
        <Services />
    </div>
  )
}

export default App
