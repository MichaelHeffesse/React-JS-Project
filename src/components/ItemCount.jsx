import React, { useState, useEffect } from 'react'



const ItemCount = ({inicial, max, onAdd}) => {

  const [count, setCount] = useState(inicial);

  const sumar = () => {
    if (count<max) {
      setCount(count +1)
    }else {
      console.log(max)
    }

  }

  const restar = () => {
    count<inicial ? setCount(count - 1) : console.log(inicial)
  }

  const reset = () => {
    setCount(inicial)
  }
  return (
      <>
        <div style={{ border: '1px solid red', height: '200px', backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0') }}>
        Cantidad de productos seleccionados: {count = max ? max: count<inicial ? inicial: count}

        <button
          onClick={
            sumar
          }>
          Añadir
        </button>
        <button
          onClick={
            restar
          }>
          Quitar
        </button>
        <button
          onClick={
            reset
          }>
          Resetear
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


export {ItemCount};