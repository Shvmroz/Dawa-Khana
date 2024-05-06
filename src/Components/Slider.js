import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../Images/products/products (1).jpg'
import image2 from '../Images/products/products (2).jpg'
import image3 from '../Images/products/products (3).jpg'
import image4 from '../Images/products/products (4).jpg'
import image5 from '../Images/products/products (6).jpg'
import image6 from '../Images/products/products (6).jpg'
import image7 from '../Images/products/products (7).jpg'
import image8 from '../Images/products/products (8).jpg'
import image9 from '../Images/products/products (9).jpg'
import image10 from '../Images/products/products (10).jpg'
import image11 from '../Images/products/products (11).jpg'
import image12 from '../Images/products/products (12).jpg'
import image13 from '../Images/products/products (13).jpg'
import image14 from '../Images/products/products (14).jpg'
import { Products } from './Products';



export const MySlider = () => {
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

    const productData = [
        {
            id: 1,
            imageurl: image1,
            name: "Product 1",
            price: "$7",
            description: "Lorem ipsum dolor sit amet."
        },
        {
            id: 2,
            imageurl: image2,
            name: "Product 2",
            price: "$4",
            description: "Sed do eiusmod tempor incididunt."
        },
        {
            id: 3,
            imageurl: image3,
            name: "Product 3",
            price: "$3",
            description: "Lorem ipsum dolor sit amet."
        },
        {
            id: 4,
            imageurl: image4,
            name: "Product 4",
            price: "$5",
            description: "Sed do eiusmod tempor incididunt."
        },
        {
            id: 5,
            imageurl: image5,
            name: "Product 5",
            price: "$20",
            description: "Lorem ipsum dolor sit amet."
        },
        {
            id: 6,
            imageurl: image6,
            name: "Product 6",
            price: "$16",
            description: "Sed do eiusmod tempor incididunt."
        },
        {
            id: 7,
            imageurl: image7,
            name: "Product 7",
            price: "$11",
            description: "Lorem ipsum dolor sit amet."
        },
        {
            id: 8,
            imageurl: image8,
            name: "Product 8",
            price: "$12",
            description: "Sed do eiusmod tempor incididunt."
        },
        {
            id: 9,
            imageurl: image9,
            name: "Product 9",
            price: "$15",
            description: "Lorem ipsum dolor sit amet."
        },
        {
            id: 10,
            imageurl: image10,
            name: "Product 10",
            price: "$80",
            description: "Sed do eiusmod tempor incididunt."
        },
        {
            id: 11,
            imageurl: image11,
            name: "Product 11",
            price: "$70",
            description: "Sed do eiusmod tempor incididunt."
        },
        {
            id: 12,
            imageurl: image12,
            name: "Product 12",
            price: "$40",
            description: "Sed do eiusmod tempor incididunt."
        },
        {
            id: 13,
            imageurl: image13,
            name: "Product 13",
            price: "$34",
            description: "Sed do eiusmod tempor incididunt."
        },
        {
            id: 14,
            imageurl: image14,
            name: "Product 14",
            price: "$37",
            description: "Sed do eiusmod tempor incididunt."
        },

    ]
    const product = productData.map((item) => <Products name={item.name} url={item.imageurl} price={item.price} description={item.description} />)
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

