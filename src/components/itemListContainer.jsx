import React from 'react'



const ItemListContainer = ({greetings,user}) => {
  const Usuario =  {greetings:"Bienvenido a Digital Hike Up", user:"Michael"};
  return (
      <>
        <h1>{greetings}</h1>
        <p>Hola {user}</p>
      </>

  );
}


export {ItemListContainer};