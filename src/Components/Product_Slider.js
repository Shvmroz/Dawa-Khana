import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductCard } from './Product_Card';
import { Data } from './Data';

export const ProductSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1024, min: 850 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 850, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  };

  const products = Data.map((item) => (
    <ProductCard
      key={item.id} // Assuming each item has a unique id
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div>
      <div className='product-heading green-clr'>
        <h1>Popular Products</h1>
      </div>
      <Carousel responsive={responsive}>
        {products}
      </Carousel>
    </div>
  );
};
