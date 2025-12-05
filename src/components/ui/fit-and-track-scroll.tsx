import React from 'react';
import ThumbnailCarousel from './thumbnail-carousel';
import img1 from '../../assets/images/Fit_and_Track/img1.png';
import img2 from '../../assets/images/Fit_and_Track/img2.png';
import img3 from '../../assets/images/Fit_and_Track/img3.png';
import img4 from '../../assets/images/Fit_and_Track/img4.png';
import img5 from '../../assets/images/Fit_and_Track/img5.png';
import img6 from '../../assets/images/Fit_and_Track/img6.png';
import img7 from '../../assets/images/Fit_and_Track/img7.png';

const items = [
    { id: 1, url: img1, title: 'Fit and Track 1' },
    { id: 2, url: img2, title: 'Fit and Track 2' },
    { id: 3, url: img3, title: 'Fit and Track 3' },
    { id: 4, url: img4, title: 'Fit and Track 4' },
    { id: 5, url: img5, title: 'Fit and Track 5' },
    { id: 6, url: img6, title: 'Fit and Track 6' },
    { id: 7, url: img7, title: 'Fit and Track 7' },
];

export default function FitAndTrackScroll() {
    return <ThumbnailCarousel items={items} />;
}
