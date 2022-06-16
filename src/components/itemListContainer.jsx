import React from 'react'



const ItemListContainer = ({greetings,user}) => {


  return (
      <>
        <h6>{greetings}</h6>
        <p>Hola {user}</p>
      </>

  );
}


export default ItemListContainer;