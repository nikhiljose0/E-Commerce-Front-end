// import React, { createContext,useEffect,useState } from "react";
// import { data } from "react-router-dom";
 
// export const ShopContext = createContext(null);


// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < 300 + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// }

// const ShopContextProvider = (props) => {
  
//     const [all_product,setAll_Product] = useState([]);
//     const [cartItems, setCartItems] = useState(getDefaultCart);

// useEffect(() => {
//   fetch("https://e-commerce-back-end-bp7u.onrender.com/allproducts")
//     .then((Response) => Response.json())
//     .then((data) => setAll_Product(data));

//   if (localStorage.getItem("auth-token")) {
//     fetch("https://e-commerce-back-end-bp7u.onrender.com/getcart", {
//       method: "POST",
//       headers: {
//         Accept: "application/form-data",
//         "auth-token": localStorage.getItem("auth-token"), // ✅ FIXED
//         "Content-Type": "application/json",
//       },
//       body: "",
//     })
//       .then((response) => response.json())
//       .then((data) => setCartItems(data));
//   }
// }, []);

// const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     if(localStorage.getItem("auth-token"))
//     {
//       fetch('https://e-commerce-back-end-bp7u.onrender.com/addtocart', {
//       method: 'POST',
//       headers: {
//         Accept:'application/form-data',
//         'auth-token':`${localStorage.getItem("auth-token")}`,
//         'Content-Type':'application/json',
//       },
//       body: JSON.stringify({"itemId":itemId}),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {console.log(data)});
//     }
//   };  
  

// const removeFromCart = (itemId) => {
//   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

//   if (localStorage.getItem("auth-token")) {
//     fetch("https://e-commerce-back-end-bp7u.onrender.com/removefromcart", {
//       method: "POST",
//       headers: {
//         "auth-token": localStorage.getItem("auth-token"),
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ itemId }),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data); // { success: true, message: "Removed from cart" }
//       });
//   }
// };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//         for (const item in cartItems) {
//              if (cartItems[item] > 0) {
//         let itemInfo = all_product.find(
//           (product) => product.id === Number(item)
//         );
//         totalAmount += itemInfo.new_price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };
//    const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   }
  

//       const contextValue = {
//         all_product,
//         cartItems,
//         addToCart,
//         removeFromCart,
//       getTotalCartAmount,
//       getTotalCartItems,
//     };
    


//     return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>    )
// }
// export default ShopContextProvider;
import React, { createContext, useEffect, useState } from "react";
import BACKEND_URL from "../config.js";  // ✅ import the single source of truth

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 301; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart);

  useEffect(() => {
    fetch(`${BACKEND_URL}/allproducts`)
      .then((res) => res.json())
      .then((data) => setAll_Product(data));

    if (localStorage.getItem("auth-token")) {
      fetch(`${BACKEND_URL}/getcart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    if (localStorage.getItem("auth-token")) {
      fetch(`${BACKEND_URL}/addtocart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if (localStorage.getItem("auth-token")) {
      fetch(`${BACKEND_URL}/removefromcart`, {
        method: "POST",
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
