import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div>
    <NavBar />
    <ItemListContainer productos='Productos' especiales='Rolls Especiales' comb='Combos'/>
    </div>
  );
}

export default App;
