
import './App.css';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

function App() {
  const phones = [
    {
      iname:" iPhone 11pro",
      price:"1200$",
      color:"black",
      id:Math.random
    },
    {
      iname:" iPhone 12pro max",
      price:"1900$",
      color:"grey",
      id:Math.random
    },
    {
      iname:" iPhone 13mini",
      price:"1100$",
      color:"pink",
      id:Math.random
    },
    {
      iname:" iPhone 14",
      price:"1700$",
      color:"white",
      id:Math.random
    },
    {
      iname:" iPhone 15pro",
      price:"2500$",
      color:"gold",
      id:Math.random
    }
  ]
  return (
    <div className="App">
      <Header/>
      {phones.map((el)=>(
        <Main key={el.id} iPhoneName={el.iname} price={el.price} color={el.color}/>

      ))}
      <Footer/>
      
    </div>
  );
}

export default App;
