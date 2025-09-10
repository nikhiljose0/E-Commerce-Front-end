// import React, { useEffect, useState } from 'react'
// import './Popular.css'
// import Item from '../Items/Item'

// function Popular() {

//   const [popularProducts,setPopularProducts]=useState([]);

//   useEffect(()=>{
//     fetch('https://e-commerce-back-end-bp7u.onrender.com/popularinwomen')
//     .then((response)=>response.json())
//     .then((data)=>setPopularProducts(data));
//   },[])

  
  
//   return (
//     <div className='popular'>
//       <h1>POPULAR IN WOMEN</h1>
//       <hr />
//       <div className="popular-item">
//         {popularProducts.map((item,i)=>{
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//         })}
//       </div>
//     </div>
//   )
// }

// export default Popular
import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Items/Item';
import BACKEND_URL from '../../config';   // ✅ import backend URL

function Popular() {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/popularinwomen`)   // ✅ using config.js
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;

