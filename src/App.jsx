import './App.css';
import ItemListContainer from './components/contenedor/ItemListContainer';

import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div>
    <NavBar />
    <ItemListContainer productos='Productos' especiales='Rolls Especiales' vegetarianos='Rolls Vegetarianos'/>
    </div>
  );
}

export default App;
