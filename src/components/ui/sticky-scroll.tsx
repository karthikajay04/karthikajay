import React from 'react';
import ThumbnailCarousel from './thumbnail-carousel';
import img1 from '../../assets/images/Student_Ai_hub/img1.png';
import img2 from '../../assets/images/Student_Ai_hub/img2.png';
import img3 from '../../assets/images/Student_Ai_hub/img3.png';
import img4 from '../../assets/images/Student_Ai_hub/img4.png';
import img5 from '../../assets/images/Student_Ai_hub/img5.png';
import img6 from '../../assets/images/Student_Ai_hub/img6.png';
import img7 from '../../assets/images/Student_Ai_hub/img7.png';
import img8 from '../../assets/images/Student_Ai_hub/img8.png';
import img9 from '../../assets/images/Student_Ai_hub/img9.png';
import img10 from '../../assets/images/Student_Ai_hub/img10.png';
import img11 from '../../assets/images/Student_Ai_hub/img11.png';
import img12 from '../../assets/images/Student_Ai_hub/img12.png';
import img13 from '../../assets/images/Student_Ai_hub/img13.png';

const items = [
    { id: 1, url: img1, title: 'Student AI Hub 1' },
    { id: 2, url: img2, title: 'Student AI Hub 2' },
    { id: 3, url: img3, title: 'Student AI Hub 3' },
    { id: 4, url: img4, title: 'Student AI Hub 4' },
    { id: 5, url: img5, title: 'Student AI Hub 5' },
    { id: 6, url: img6, title: 'Student AI Hub 6' },
    { id: 7, url: img7, title: 'Student AI Hub 7' },
    { id: 8, url: img8, title: 'Student AI Hub 8' },
    { id: 9, url: img9, title: 'Student AI Hub 9' },
    { id: 10, url: img10, title: 'Student AI Hub 10' },
    { id: 11, url: img11, title: 'Student AI Hub 11' },
    { id: 12, url: img12, title: 'Student AI Hub 12' },
    { id: 13, url: img13, title: 'Student AI Hub 13' },
];

export default function StickyScroll() {
    return <ThumbnailCarousel items={items} />;
}
