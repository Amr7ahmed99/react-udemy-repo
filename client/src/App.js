import React , { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import data from './data-file.json';
import Filter from './components/Filter/Filter';
function App() {
  const [products, setProducts]= useState(data);
  const [size, setSize]= useState("");
  const [order, setOrder]= useState("");

  const handelFilterBySize= (e) =>{
    setSize(e.target.value);
    if(e.target.value === "ALL"){
      setProducts(data);
    }else{
      let productsClone= [...data];
      let newProducts= productsClone.filter( pro => pro.sizes.indexOf(e.target.value) !== -1 );
      setProducts(newProducts);
    }
  };

  const handelFilterByOrder= (e) =>{
    setOrder(e.target.value);
    let productsClone= [...data];
    if(e.target.value === "Lowest"){
      productsClone.sort( (a,b) => a.price - b.price);//negative
    }else if(e.target.value === "Highest"){
      productsClone.sort( (a,b) => b.price - a.price);//positive
    }else{
      productsClone.sort( (a,b) => a.id < b.id ? 1: -1);
    }
    setProducts(productsClone);
  };
  
  return (
    <div className="layout">
     <Header />
      <main>
        <Products products= { products }/>
        <Filter size= {size} handelFilterBySize= {handelFilterBySize} handelFilterByOrder= {handelFilterByOrder}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
