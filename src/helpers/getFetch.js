
export const combos = [
    {
      id: 'Comboclasico',
      title: 'Combo clasico',
      description:'12 piezas de rolls clasicos', 
      pictureURL: require('../imagenes/rollsClasicos.png'),
      categoria: 'clasicos',
      price: 590,
      stock: 4
    },
    {
      id: 'ComboPremium',
      title: 'Combo Premium',
      description:'12 piezas de rolls especiales', 
      pictureURL: require('../imagenes/comboPremium.png'),
      categoria: 'especiales',
      price: 750,
      stock: 8
    },
    {
      id: 'ComboVeggie',
      title: 'Combo Veggie',
      description:'12 piezas de rolls vegetarianos', 
      pictureURL: require('../imagenes/rollsVegetarianosEspeciales.png'),
      categoria: 'vegetarianos',
      price: 570,
      stock: 12
    },
    {
      id: 'ComboVegan',
      title: 'Combo Vegan',
      description: '12 piezas de rolls veganos', 
      pictureURL: require('../imagenes/rollsVeganos.png'),
      categoria: 'veganos',
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


  const getItem = () => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(combos)
              reject('Error 404 not found')
          }, 2000);
      })
  }

  export default getItem

  