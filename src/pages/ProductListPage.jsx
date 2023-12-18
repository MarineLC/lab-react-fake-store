import { useEffect, useState } from "react";
import "../App.css";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
 /* const url = "https://fakestoreapi.com/products";
  const fetchData = async url => {
       try {
         const response = await fetch(url)
         console.log(response)
         
       } catch (error) {
         console.log(error)
       }
     }
*/
     useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then(response =>  response.json())
      .then(apiData => setProducts(apiData));
      
     }, [])
  // To fetch the list of products, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductListPage">
      {/* Render list of products here */}
    {products.map(products => (
      <div className='content' key={products.id} >
        <img src={products.image} alt={products.title} />
      <li>{products.title}</li>
      <li>{products.category}</li>
      <li>{products.price}</li>
      <li>{products.description}</li>
   
 
    
      </div>


    ))}

    </div>
  );
}

export default ProductListPage;
