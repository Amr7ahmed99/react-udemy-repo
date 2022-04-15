import React from 'react';
import '../../css/Filter/Filter.css';

function Filter(props) {
  return (
    <div className="filter-wrapper">
        <h2 className="filter-title">
            Filter
        </h2>
        <p className='products-Num'>
            Number of products 4
        </p>
        <div className="filter-size">
            <p>
                Filter
            </p>
            <select value={props.size}  id="filterBySize" onChange={ props.handelFilterBySize }>
                <option value="ALL"> ALL</option>
                <option value="XS"> XS</option>
                <option value="S"> S</option>
                <option value="M"> M</option>
                <option value="L"> L</option>
                <option value="XL"> XL</option>
                <option value="XXL"> XXL</option>
            </select>
        </div>
        <div className="filter-order">
            <p>
                Order
            </p>
            <select id="filterByOrder" onChange={props.handelFilterByOrder}>
                <option value="Latest"> Latest</option>
                <option value="Lowest"> Lowest</option>
                <option value="Highst"> Highst</option>
            </select>
        </div>
    </div>
  )
}

export default Filter;