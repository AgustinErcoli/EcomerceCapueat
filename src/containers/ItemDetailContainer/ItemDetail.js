import './ItemDetail.css';

const ItemDetail = ({ item }) => {


      return (
        <section>
        <p>{item.title}</p>
        <img src={item.img} alt={item.title}></img>
        </section>
      )
    }

export default ItemDetail