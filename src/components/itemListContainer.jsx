import React from 'react'
import ItemList from './ItemList';



const ItemListContainer = ({greetings,user, products}) => {

  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

  return (
      <>
        <h6>{greetings}</h6>
        <p>Hola {user}</p>

        {(products.lenght > 1)? <ItemList serv={products} />: alert("No hay productos")}
      </>

  );
}


export default ItemListContainer;