import React, { useState } from 'react';
import { Data } from '../Components/Data';
import { ProductCard } from '../Components/Product_Card';

export const Shop = () => {
  const [itemsToShow, setItemsToShow] = useState(8); // Initial number of items to show
  const products = Data.slice(0, itemsToShow).map((item) => (
    <div key={item.id} className="col-md-3">
      <ProductCard
        name={item.name}
        url={item.imageurl}
        price={item.price}
        description={item.description}
      />
    </div>
  ));

  const showMore = () => {
    setItemsToShow(itemsToShow + 4); // Increase the number of items to show by 4
  };

  return (
    <>
      <div className="shop">
        <div className="heading text-center">
          <h1 className="green-clr animated bounceInLeft">Shop</h1>
        </div>
        <div className="container">
          <div className="row">{products}</div>
          {itemsToShow < Data.length && (
            <div className="view-more text-center m-3">
              <h5 onClick={showMore}>
                View More
              </h5>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
