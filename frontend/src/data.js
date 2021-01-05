import p1 from "./images/p1.jpg"
import p2 from "./images/p2.png"
import p3 from "./images/p3.jpg"


const data = {
    products:[
        {
            _id: '1',
            name: 'Rx 560',
            category: 'Graficas',
            image: p1,
            price:120,
            brand:'AMD',
            rating: 4.5,
            numeReviews:10,
            description: 'high quality product'
        },
        {
            _id: '2',
            name: 'Rx 580',
            category: 'Graficas',
            image: p2,
            price:320,
            brand:'AMD',
            rating: 4.5,
            numeReviews:10,
            description: 'high quality product'
        },
        {
            _id: '3',
            name: 'gtx 1060',
            category: 'Graficas',
            image: p3,
            price:250,
            brand:'NIVIDIA',
            rating: 5.0,
            numeReviews:10,
            description: 'high quality product'
        }
    ]
}

export default data;