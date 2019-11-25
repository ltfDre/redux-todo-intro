import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import productActions from '../modules/products/actions';

function ProductPage({ fetchProducts, addProduct, deleteProduct, products }) {
    const [productName, setProductName] = useState('');
    
    useEffect(() => {
        fetchProducts();
    }, []);

    function onAddClick() {
        addProduct(productName);
    }

    function onDeleteClick(id) {
        deleteProduct(id);
    }

    return (
        <>
            <h1>Product Page</h1>
            <ul>
                {products && products.map(product => (
                    <li key={product.id}>
                        {product.name}
                        <button onClick={() => onDeleteClick(product.id)}>Sil</button>
                    </li>
                ))}
            </ul>
            <input type="text" onChange={(e) => setProductName(e.target.value)} />
            <button onClick={onAddClick}>Add Product</button>
        </>
    );
}

const mapStateToProps = state => ({
    ...state.products
});

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => productActions.fetch(dispatch),
    addProduct: (productName) => productActions.add(dispatch, { name: productName }),
    deleteProduct: (id) => productActions.delete(dispatch, { id })
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);