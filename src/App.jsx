import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
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
