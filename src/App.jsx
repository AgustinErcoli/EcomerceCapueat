import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div>
    <NavBar />
    <ItemListContainer productos='Productos' especiales='Rolls Especiales' comb='Combos'/>
    <ItemDetailContainer />
    </div>
  );
}

export default App;
