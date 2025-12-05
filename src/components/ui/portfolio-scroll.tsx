import React from 'react';
import ThumbnailCarousel from './thumbnail-carousel';
import img1 from '../../assets/images/Portfolio_website/portfolio-1.png';
import img2 from '../../assets/images/Portfolio_website/portfolio-2.png';
import img3 from '../../assets/images/Portfolio_website/portfolio-3.png';
import img4 from '../../assets/images/Portfolio_website/portfolio-4.png';
import img5 from '../../assets/images/Portfolio_website/portfolio-5.png';
import img6 from '../../assets/images/Portfolio_website/portfolio-6.png';

const items = [
    { id: 1, url: img1, title: 'Portfolio Home' },
    { id: 2, url: img2, title: 'Portfolio Projects' },
    { id: 3, url: img3, title: 'Portfolio About' },
    { id: 4, url: img4, title: 'Portfolio Contact' },
    { id: 5, url: img5, title: 'Portfolio Skills' },
    { id: 6, url: img6, title: 'Portfolio Achievements' },
];

export default function PortfolioScroll() {
    return <ThumbnailCarousel items={items} />;
}
