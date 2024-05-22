import React from 'react';
import all_product from '../Assets/all_product';


function MenProducts() {
  // Filter products by category "men"
  const menProducts = all_product.filter(product => product.category === 'men');

  // Render the filtered products
  return (
    <div>
      <h2>Men's Products</h2>
      {menProducts.length > 0 ? (
        <div>
          {menProducts.map(product => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>New Price: {product.new_price}</p>
              <p>Old Price: {product.old_price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found in the "men" category.</p>
      )}
    </div>
  );
}

export default MenProducts;

