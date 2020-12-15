import React from "react";
import PropTypes from "prop-types";

function Food({ name }) {
  return <h3>hi im {name}</h3>;
}

const foodILike = [
  { name: "kimchi" },
  { name: "pasta" },
  { name: "pizza" },
  { name: "ramen" }
];

function renderFood(dish) {
  return <Food name={dish.name} />;
}

function App() {
  return (
    <div className="App">
      <div>HELLO </div>
     {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
