import React , { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import data from './data-file.json';
function App() {
  const [products, setProducts]= useState(data);
  return (
    <div className="layout">
     <Header />
      <main>
        <Products products= { products }/>
        <div className="filter-wrapper">
          filter
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
