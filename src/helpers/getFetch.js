
export const combos = [
    {
      id: 'Comboclasico',
      title: 'Combo clasico',
      description:'12 piezas de rolls clasicos', 
      pictureURL: 'https://scontent.fepa10-1.fna.fbcdn.net/v/t39.30808-6/275683113_499602338481061_1055443699899172127_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=OmBd-shwyQQAX-W2ZMA&_nc_ht=scontent.fepa10-1.fna&oh=00_AT-1C5t2zcwqQdX9nYpxPIGHN_Hqg5o-TlKm8CcwZZoJDw&oe=622F499F',
      categoria: 'clasicos',
      price: 590,
      stock: 4
    },
    {
      id: 'ComboPremium',
      title: 'Combo Premium',
      description:'12 piezas de rolls especiales', 
      pictureURL: 'https://scontent.fepa10-2.fna.fbcdn.net/v/t39.30808-6/275282896_499602371814391_2401318644595279895_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=_vJnkkpZ_m0AX-1VXTh&_nc_ht=scontent.fepa10-2.fna&oh=00_AT8ZiuOf814sQqRYYO0FKM1QHuOVZJ-EdGIQ4MxlB53fFA&oe=622EC7C5',
      categoria: 'especiales',
      price: 750,
      stock: 8
    },
    {
      id: 'ComboVeggie',
      title: 'Combo Veggie',
      description:'12 piezas de rolls vegetarianos', 
      pictureURL: 'https://scontent.fepa10-1.fna.fbcdn.net/v/t39.30808-6/275505564_499602391814389_3150551513935611525_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=dJ4i4Qs3NFwAX_BHwPF&_nc_ht=scontent.fepa10-1.fna&oh=00_AT9xSJbbf2WkllNhfY_PUfSHGeC3UoS0ColGuX-LOlew8A&oe=62302D60',
      categoria: 'vegetarianos',
      price: 570,
      stock: 12
    },
    {
      id: 'ComboVegan',
      title: 'Combo Vegan',
      description: '12 piezas de rolls veganos', 
      pictureURL: 'https://scontent.fepa10-1.fna.fbcdn.net/v/t39.30808-6/275297578_499602418481053_7492218049799263812_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=nQ6aqox7XjwAX9jAcY4&_nc_ht=scontent.fepa10-1.fna&oh=00_AT8k-vK8CV23dm1xvTcXQC4OzDf3cb3Mtib37vsFGGfKYg&oe=62301300',
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

  