//import logo from './logo.svg';
import dogData from "./assets/pet-data.json";
import './App.css';
import { useState } from "react";
import Dog from "./components/dog";
import Buttons from "./components/buttons";
 

dogData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});


function App() {
  const [dogs, setDogs] = useState([])
  //const [item, setItem] = useState(dogData);
  const rescuePups = [...new Set(dogData.map((Val) => Val.breed))];

  function addToCart(item) {
    setDogs([...dogs, item])
  }

  return (

    <div className="App">

      <h1>Rescue Puppies</h1>

    
    const filterItem = (curdog) => {
        const newItem = dogData.filter((newVal) => {
            return newVal.breed === curdog; 
        	// comparing category for displaying data
    });
    setDogs(newItem);
  };

      <p>
        {dogData.map((item, index) => (
          <Buttons item={item} addToCart={addToCart} />
        ))}
      </p>
      <p>
        {dogData.map((item, index) => (
          <Dog item={item} addToCart={addToCart} />
        ))}
      </p>

      <div>
        <h2>Favorites</h2>
        {dogs.map((item, index) => (
          <div>
            <p>{item.name}</p>
          </div>

        ))}
        {/* TODO: render a list of items in the cart */}
      </div>

    </div>
  );
}

export default App;
