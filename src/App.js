import NavBar from './components/Navbar';
import About from './container/About';
import Benefits from './container/Benefits';
import Cards from './container/Cards';
import Contact from './container/Contact';
import Features from './container/Features';
import Footer from './container/Footer';
import Hero from './container/Hero';
import Order from './container/Order';
import Slider from './container/Slider';

function App() {
  return (
    <div className="App">
   <NavBar />   
<Hero />
<Cards />
{/* <Features /> */}

<Benefits />
<Slider />
<Order />
{/* <About /> */}
<Contact />
<Footer />
    </div>
  );
}

export default App;
