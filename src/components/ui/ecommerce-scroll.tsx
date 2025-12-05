import React from 'react';
import ThumbnailCarousel from './thumbnail-carousel';
import img1 from '../../assets/images/Ecommerce_Frontend/img1.png';
import img2 from '../../assets/images/Ecommerce_Frontend/img2.png';
import img3 from '../../assets/images/Ecommerce_Frontend/img3.png';
import img4 from '../../assets/images/Ecommerce_Frontend/img4.png';
import img5 from '../../assets/images/Ecommerce_Frontend/img5.png';
import img6 from '../../assets/images/Ecommerce_Frontend/img6.png';
import img7 from '../../assets/images/Ecommerce_Frontend/img7.png';
import img8 from '../../assets/images/Ecommerce_Frontend/img8.png';
import img9 from '../../assets/images/Ecommerce_Frontend/img9.png';
import img10 from '../../assets/images/Ecommerce_Frontend/img10.png';
import img11 from '../../assets/images/Ecommerce_Frontend/img11.png';

const items = [
    {
        id: 1,
        url: img1,
        title: 'Ecommerce Home',
    },
    {
        id: 2,
        url: img2,
        title: 'Product View',
    },
    {
        id: 3,
        url: img3,
        title: 'Category Page',
    },
    {
        id: 4,
        url: img4,
        title: 'Shopping Cart',
    },
    {
        id: 5,
        url: img5,
        title: 'Checkout',
    },
    {
        id: 6,
        url: img6,
        title: 'Mobile View',
    },
    {
        id: 7,
        url: img7,
        title: 'Product Details',
    },
    {
        id: 8,
        url: img8,
        title: 'User Profile',
    },
    {
        id: 9,
        url: img9,
        title: 'Settings',
    },
    {
        id: 10,
        url: img10,
        title: 'Order History',
    },
    {
        id: 11,
        url: img11,
        title: 'Analytics',
    },
];

export default function EcommerceScroll() {
    return <ThumbnailCarousel items={items} />;
}
