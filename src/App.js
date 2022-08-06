import NavBar from './components/Navbar';
import Benefits from './container/Benefits';
import Cards from './container/Cards';
import Features from './container/Features';
import Hero from './container/Hero';
import Order from './container/Order';

function App() {
  return (
    <div className="App">
   <NavBar />   
<Hero />
<Cards />
{/* <Features /> */}
<Benefits />
<Order />
    </div>
  );
}

export default App;
