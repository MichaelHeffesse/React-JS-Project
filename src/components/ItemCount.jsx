import React, { useState, useEffect } from 'react'



const ItemCount = ({pedido, stock, onAdd}) => {

  const [count, setCount] = useState(pedido);

  const sumar = () => {
    if (count<stock) {
      setCount(count + 1)
    } else {
      alert("Limite de consumo alcanzado!")
    };

  }

  const restar = () => {

    count>pedido ? setCount(count - 1) : alert("No puedes seguir restando!");

  }

  const reset = () => {

    setCount(pedido);

  }


  return (
      <>
        <div>
        <h2>Cantidad de productos seleccionados : {count}</h2>

          <button
            onClick={
              sumar
            }>
            +
          </button>
          <button
            onClick={
              restar
            }>
            -
          </button>
          <button
            onClick={
              reset
            }>
            Reset
          </button>
          <button
            onClick={ () => {
              onAdd(count)
            }
            }>
            Agregar al carrito
          </button>
        </div>
      </>

  );
}


export default ItemCount;