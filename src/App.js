import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from './components/CartWidget';
import { ItemListContainer } from './components/ItemListContainer';
import { Nav } from 'react-bootstrap';
import { ItemCount } from './components/ItemCount';


function App() {
  return (
    <>
      <NavBar/>
      <CartWidget/>
      <ItemCount/>
      <ItemListContainer/>

    </>



  );
}

export default App;
