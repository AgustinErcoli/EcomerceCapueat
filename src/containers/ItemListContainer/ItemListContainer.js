import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

function ItemListContainer({productos, comb, especiales}) {

    return (
        <div className="contenedor">
            <h2>{ productos }</h2>
            <h2>{ especiales }</h2>
            <h2>{ comb }</h2>
            <ItemList />
        </div>
    )}

export default ItemListContainer
