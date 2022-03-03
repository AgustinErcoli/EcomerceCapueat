import rollsClasicos from '../imagenes/rollsClasicos.png'
import comboPremium from '../imagenes/comboPremium.png'
import veggies from '../imagenes/veggies - copia.jpg'
import rollsVeganos from '../imagenes/rollsVeganos - copia.png'



export const combos = [
    {
      id: 1,
      title: 'Combo clasico',
      description:'12 piezas de rolls clasicos', 
      img: {rollsClasicos},
      price: 590,
      stock: 4
    },
    {
      id: 2,
      title: 'Combo Premium',
      description:'12 piezas de rolls especiales', 
      img: {comboPremium},
      price: 750,
      stock: 8
    },
    {
      id: 3,
      title: 'Combo Veggie',
      description:'12 piezas de rolls vegetarianos', 
      img: {veggies},
      price: 570,
      stock: 12
    },
    {
      id: 4,
      title: 'Combo Vegan',
      description: '12 piezas de rolls veganos', 
      img: {rollsVeganos},
      price: 600,
      stock: 7
    },
  ]
  
  export const getFetch = new Promise((resolve, reject)=>{

      let url = 'Capueat.com'

      if (url === 'Capueat.com') {
        setTimeout(() => {
          resolve(combos)
        }, 2000);
      }else{
        reject('400 not found')
      }
    })
