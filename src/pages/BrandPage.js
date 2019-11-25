import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import brandActions from '../modules/brands/actions';

function BrandPage({ fetchBrands, addBrand, deleteBrand, brands }) {
	const [brandName, setBrandName] = useState('');
	
	useEffect(() => {
		fetchBrands();
	},[]);
	
	function onAddClick() {
		addBrand(brandName);
	}

	function onDeleteClick(id){
		deleteBrand(id);
	}
	
	return (
        <>
            <h1>Brand Page</h1>
						<ul>
							{brands && brands.map(brand => (
								<li key={brand.id}>
									{brand.name}
									<button onClick={() => onDeleteClick(brand.id)}>Sil</button>
								</li>
							))}
						</ul>
						<ul>
						</ul>
						<input type="text" onChange={(e) => setBrandName(e.target.value)} />
						<button onClick={onAddClick}>Add Brand</button>
						
        </>
    );
}

const mapStateToProps = state => ({
	...state.brands
});

const mapDispatchToProps = dispatch => ({
	fetchBrands: () => brandActions.fetch(dispatch),
	addBrand: (brandName) => brandActions.add(dispatch, { name: brandName }),
	deleteBrand: (id) => brandActions.delete(dispatch, { id })
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandPage);