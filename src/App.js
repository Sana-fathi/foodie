import NavBar from './components/Navbar';
import Benefits from './container/Benefits';
import Cards from './container/Cards';
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
<Order />
<Slider />
<Footer />
    </div>
  );
}

export default App;
