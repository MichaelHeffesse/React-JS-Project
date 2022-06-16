import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar  from './components/NavBar';
import  ItemListContainer  from './components/ItemListContainer';
import  ItemCount  from './components/ItemCount';
import ItemList from './components/ItemList';
import Item from './components/Item';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';


function App() {
  const Usuario = {user: "Michael", greetings:"Bienvenido a Digital Hike Up"}
  const onAdd = (count) => {
    <p>Sumaste {count} al carrito</p>
  }

  const serv = [{id: 1, producto: "Emprende", descripcion: "Programa destinado a asistirte en el armado de tu emprendimiento", precio : 9.99, detalle: "Obtenga una guia para conocer los requerimientos basicos segun el negocio que quiera emprender"},
     {id: 2, producto: "Growth", descripcion: "Recibi asistencia para poder hacer crecer tu negocio existente", precio: 15.99, detalle: "Ideal para aquellos que buscan crecer su negocio actual y quieren identificar aquellos puntos de mejora necesarios"},
     {id: 3, producto: "Financer", descripcion: "Recibi asistencia para optimizar tus finanzas, tanto personales como de tu negocio", precio: 19.99, detalle: "Sabes si realmente al final del mes ganaste mas plata? Si tus costos son acordes? Cuanto destinar a inversion? Este paquete te ayudara a guiarte en tus finanzas"}]

  const [data, setData] = React.useState();

  const task = Promise = (resolve, reject) => {
    setTimeout(() => {
      const data = resolve(serv);

    }, 3000);

    React.useEffect(() => {
      setData(data)
    }, []);

    return data.serv
  }


  return (
    <>
      <NavBar items={4}/>
      <ItemCount pedido={1} stock={10} onAdd={onAdd}/>
      <ItemListContainer greetings={Usuario.greetings} user={Usuario.user}/>
      <ItemList serv={task}/>
      <Item serv={task}/>
      <ItemDetailContainer serv={task}/>

    </>



  );
}

export default App;
