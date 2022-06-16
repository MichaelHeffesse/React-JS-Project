import React from 'react'

function ItemDetailContainer({serv}) {
    const {detalle, producto} = serv
  return (
      <>
      <h1>Detalle de producto de {producto}</h1>
      <p>Detalle: {detalle}</p>
      </>

  )
}

export default ItemDetailContainer