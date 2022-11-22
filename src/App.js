//import logo from './logo.svg';
import dogData from "./assets/pet-data.json";
import './App.css';
import { useState, useEffect } from "react";
import Dog from "./components/dog";
//import Buttons from "./components/buttons";
import * as React from 'react';
import Dog_copy from "./components/Dog_copy";



dogData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});


function App() {
  const [dogs, setDogs] = useState(dogData)
  const [cartItems, setCart] = useState([])
  const [isSorted, setIsSorted] = useState(false)
  //const [item, setItem] = useState(dogData);
  const rescuePups = [...new Set(dogData.map((Val) => Val.breed))];

  const [open, setOpen] = React.useState(false);

  function calcTotal() {
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price
    }
    return total;
  }

  const handleOpen = () => {
    setOpen(!open);
  };

  // const handleMenu = (field) => {
  //   filterItem(field);
  //   setOpen(false);
  // }
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
    setCart([...cartItems, item])
  }

  function removeFromCart(item) {
    setCart(cartItems => cartItems.filter((i, _) => i !== item));
  }

  const sortFunc = () => {
    if (!isSorted) {
      const sortedDogs = [...dogs]
      sortedDogs.sort((a, b) => {
        return a.time - b.time;
      })
      setDogs(sortedDogs)
    } else {
      setDogs(dogData)
    }
  }

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
        trigger={<button class="button2" onClick={handleOpen}>Menu</button>}
        menu={[
          <button onClick={handleMenuThree}>All</button>,
          <button onClick={handleMenuOne}>Labradors</button>,
          <button onClick={handleMenuTwo}>Retrievers</button>,
          <button onClick={handleMenuFour}>Pyranese</button>,
          <button onClick={handleMenuFive}>Bulldog</button>,
          <button onClick={handleMenufemale}>Female</button>,
          <button onClick={handleMenumale}>Male</button>
        ]}
      />
      <button class="button2" onClick={() => {
        setIsSorted(!isSorted)
        sortFunc()
      }} > Sort By Age</button>

      <div className="dogs">
        {dogs.map((item, index) => (
          <Dog item={item} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
        ))}
      </div>
      <div>
        {cartItems.map((item, index) => (
          <Dog_copy item={item} removeFromCart={removeFromCart} />
        ))}
      </div>

      <div>
        <h2>Saved For Later</h2>
        {cartItems.map((item, index) => (
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>

        ))}
        <h2>Total: {calcTotal()}</h2>
      </div>
    </div>
  );
}

export default App;
