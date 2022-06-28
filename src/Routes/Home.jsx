import React from 'react'
import {useState, useEffect} from "react"
import  ItemListContainer  from '../components/ItemListContainer';
import  ItemCount  from '../components/ItemCount';
import ItemList from '../components/ItemList';
import Item from '../components/Item';
import ItemDetailContainer from '../components/ItemDetailContainer';

function Home() {
    const Usuario = {user: "Michael", greetings:"Bienvenido a Digital Hike Up"}
    const onAdd = (count) => {
      <p>Sumaste {count} al carrito</p>
    }

    const [data, setData] = useState();

    const getProducts = Promise = (resolve, reject) => {
      setTimeout(() => {
        const data = resolve(serv);

      }, 3000);

      useEffect(() => {
        setData(data)
      }, []);

      return data
    };

    const services = getProducts(serv)
  return (
    <>
        {console.log(services)}
        <ItemCount pedido={1} stock={10} onAdd={onAdd}/>
        <ItemListContainer greetings={Usuario.greetings} user={Usuario.user} products={services}/>
        <ItemList serv={services}/>
        <Item serv={services}/>
        <ItemDetailContainer serv={services}/>
    </>
  )
}

export default Home