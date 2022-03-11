import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import './ItemDetailContainer.css';
import { getFetch } from '../../helpers/getFetch';


const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [prod, setProd] = useState();
  
    
    useEffect(() => {
      setLoading(true)
      getFetch()
        .then(res => setProd(res.find(product => product.id === 1)))
        .finally(
          setLoading(false)
        )
      }, [])
  
    return (
      <>
        {
          loading
            ?
            <div>
              <h1>Cargando...</h1>
            </div>
            :
            <ItemDetail item={prod} />
        }
      </>
    )
  }
  
  export default ItemDetailContainer