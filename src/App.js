//import logo from './logo.svg';
import dogData from "./assets/pet-data.json";
import './App.css';
import { useState, useEffect } from "react";
import Dog from "./components/dog";
import Buttons from "./components/buttons";
import * as React from 'react';



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

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    filterItem("Labrador");
    setOpen(false);
  };

  const handleMenuTwo = () => {
    filterItem("Retriever");
    setOpen(false);
  };

  const handleMenuThree = () => {
    filterItem("all");
    setOpen(false);
  };
  const handleMenuFour = () => {
    filterItem("Pyranese");
    setOpen(false);
  };
  const handleMenuFive = () => {
    filterItem("Bulldog");
    setOpen(false);
  };
  const handleMenufemale = () => {
    filterItembySex("female");
    setOpen(false);
  };
  const handleMenumale = () => {
    filterItembySex("male");
    setOpen(false);
  };

  function addToCart(item) {
    setDogs([...dogs, item])
  }

  const sortedArray = dogData.sort((a, b) => {
    return a.time - b.time;
    })
    

  const Dropdown = ({ open, trigger, menu }) => {
    return (
      <div className="dropdown">
        {trigger}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">{menuItem}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };

  const filterItem = (breed) => {
    const newItem = dogData.filter((newVal) => {
      return newVal.breed === breed;
      // comparing category for displaying data
    });
    if (breed === "all") {
      setDogs(dogData);
    } else {
      console.log(newItem)
      setDogs(newItem);
    }

  };

  const filterItembySex = (sex) => {
    const newItem = dogData.filter((newVal) => {
      return newVal.sex === sex;
      // comparing category for displaying data
    });
    if (sex === "all") {
      setDogs(dogData);
    } else {
      console.log(newItem);
      setDogs(newItem);
    }
  };


  return (

    <div className="App">

      <h1>Rescue Puppies</h1>
      <Dropdown
        open={open}
        trigger={<button onClick={handleOpen}>Dropdown</button>}
        menu={[
          <button onClick={handleMenuThree}>all</button>,
          <button onClick={handleMenuOne}>Labradors</button>,
          <button onClick={handleMenuTwo}>Retrievers</button>,
          <button onClick={handleMenuFour}>Pyranese</button>,
          <button onClick={handleMenuFive}>Bulldog</button>,
          <button onClick={handleMenufemale}>female</button>,
          <button onClick={handleMenumale}>male</button>
        ]}
      />
      <button onClick={() => sortedArray} > Longest Stay First</button>
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



      {/* <h2>Favorites</h2>
        {dogs.map((item, index) => (
          <div>
            <p>{item.name}</p>
          </div>

        ))}
        TODO: render a list of items in the cart */}


    </div >
  );
}

export default App;
