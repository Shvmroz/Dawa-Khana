import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductCard, } from './Product_Card';
import { Data } from './Data';



export const ProductSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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


    const product = Data.map(
        (item) => <ProductCard
            name={item.name} url={item.imageurl} price={item.price} description={item.description}
        />
    )
    return (
        <div>
            <div className='product-heading '>
                <h1>Products</h1>
            </div>
            <Carousel responsive={responsive}>
                {product}
            </Carousel>
        </div>
    )
}

