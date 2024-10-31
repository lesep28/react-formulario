import { useState } from "react";
import CardStyles from "../styles/Card.module.css";
import Counter from "./Counter";

const Card = ({ pizza, setCart }) => {
  const { tipo, img, precio } = pizza;
  const [counter, setCounter] = useState(0);
  return (
    <div className={CardStyles.cardContainer}>
      <img src={img} alt={tipo} />
      <h3>{tipo}</h3>
      <h4>{precio}</h4>
      <Counter counter={counter} setCounter={setCounter} />
      <button
        disabled={counter === 0}
        onClick={() => setCart((prev) => [...prev, pizza])}
      >
        Agregar al 🛒
      </button>
    </div>
  );
};

export default Card;
