import React from 'react'
import Modal from 'react-modal'
import '../../css/Products/Products.css'
function ProductModal(props) {
    const {product, closeModal} = props;
  return (
    <Modal className="productModal" isOpen= {product} onRequestClose= {closeModal}>
        <span className= "close-Icon" onClick={closeModal}> &times;</span>
        <img src={product.imageUrl} alt={ product.title} />
        <p>{product.title}</p>
        <p>{product.desc}</p>
        <span>${product.price}</span>
    </Modal>
  )
}

export default ProductModal;