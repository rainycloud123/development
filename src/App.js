//import logo from './logo.svg';
import dogData from "./assets/pet-data.json";
import './App.css';
import { useState, useEffect } from "react";
import Dog from "./components/dog";
import Buttons from "./components/buttons";


dogData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});


function App() {
  const [dogs, setDogs] = useState([])
  useEffect(() => {
    setDogs(dogData)
  }, [])
  //const [item, setItem] = useState(dogData);
  const rescuePups = [...new Set(dogData.map((Val) => Val.breed))];

  function addToCart(item) {
    setDogs([...dogs, item])
  }

  const filterItem = (breed) => {
    const newItem = dogData.filter((newVal) => {
      return newVal.breed === breed;
      // comparing category for displaying data
    });
    console.log(newItem)
    setDogs(newItem);
  };

  return (

    <div className="App">

      <h1>Rescue Puppies</h1>
      <button onClick={() => filterItem("Labrador")} > Filter by Labrador</button>
      {/* <p>
        {dogData.map((item, index) => (
          <Buttons item={item} addToCart={addToCart} />
        ))}
      </p> */}
      <p>
        {dogs.map((item, index) => (
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

    </div >
  );
}

export default App;
