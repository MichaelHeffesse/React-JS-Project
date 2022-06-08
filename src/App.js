import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';
import { Nav } from 'react-bootstrap';
import { ItemCount } from './components/ItemCount';


function App() {
  const Usuario = {user: "Michael", greetings:"Bienvenido a Digital Hike Up"}
  const onAdd = (count) => {
    <p>Sumaste {count} al carrito</p>
  }
  return (
    <>
      <NavBar/>
      <ItemCount inicial={1} max={10} onAdd={onAdd}/>
      <ItemListContainer greetings={Usuario} user={Usuario}/>

    </>



  );
}

export default App;
