import React, { useState, useEffect } from 'react'



const ItemCount = () => {
const [item, setItem] = useState(0);
  return (
      <>
        <div style={{ border: '1px solid red', height: '200px', backgroundColor: '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0') }}>
        Cantidad de productos seleccionados: {item}
        <button
          onClick={() => {
            /* x = x + 1; */
            setItem(item + 1);
          }}>
          Añadir
        </button>
        </div>
      </>

  );
}


export {ItemCount};