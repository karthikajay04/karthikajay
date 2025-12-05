import React from 'react';
import ThumbnailCarousel from './thumbnail-carousel';
import img1 from '../../assets/images/Erp/erp-1.jpg';
import img2 from '../../assets/images/Erp/erp-2.jpg';
import img3 from '../../assets/images/Erp/erp-3.jpg';
import img4 from '../../assets/images/Erp/erp-4.jpg';
import img5 from '../../assets/images/Erp/erp-5.jpg';
import img6 from '../../assets/images/Erp/erp-6.jpg';
import img7 from '../../assets/images/Erp/erp-7.jpg';
import img8 from '../../assets/images/Erp/erp-8.jpg';
import img9 from '../../assets/images/Erp/erp-9.jpg';
import img10 from '../../assets/images/Erp/erp-10.jpg';
import img11 from '../../assets/images/Erp/erp-11.jpg';
import img12 from '../../assets/images/Erp/erp-12.jpg';
import img13 from '../../assets/images/Erp/erp-13.jpg';
import img14 from '../../assets/images/Erp/erp-14.jpg';
import img15 from '../../assets/images/Erp/erp-15.jpg';
import img16 from '../../assets/images/Erp/erp-16.jpg';
import img17 from '../../assets/images/Erp/erp-17.jpg';
import img18 from '../../assets/images/Erp/erp-18.jpg';
import img19 from '../../assets/images/Erp/erp-19.jpg';
import img20 from '../../assets/images/Erp/erp-20.jpg';
import img21 from '../../assets/images/Erp/erp-21.jpg';
import img22 from '../../assets/images/Erp/erp-22.jpg';
import img23 from '../../assets/images/Erp/erp-23.jpg';

const items = [
    { id: 1, url: img1, title: 'ERP Dashboard' },
    { id: 2, url: img2, title: 'Student Management' },
    { id: 3, url: img3, title: 'Course Modules' },
    { id: 4, url: img4, title: 'Attendance Tracking' },
    { id: 5, url: img5, title: 'Gradebook System' },
    { id: 6, url: img6, title: 'Fee Management' },
    { id: 7, url: img7, title: 'Library Management' },
    { id: 8, url: img8, title: 'Transport Management' },
    { id: 9, url: img9, title: 'Hostel Management' },
    { id: 10, url: img10, title: 'Examination Portal' },
    { id: 11, url: img11, title: 'Timetable Scheduling' },
    { id: 12, url: img12, title: 'Staff Management' },
    { id: 13, url: img13, title: 'Payroll System' },
    { id: 14, url: img14, title: 'Inventory Management' },
    { id: 15, url: img15, title: 'Alumni Portal' },
    { id: 16, url: img16, title: 'Parent Portal' },
    { id: 17, url: img17, title: 'Assignment Submission' },
    { id: 18, url: img18, title: 'Online Assessments' },
    { id: 19, url: img19, title: 'Event Calendar' },
    { id: 20, url: img20, title: 'Notice Board' },
    { id: 21, url: img21, title: 'Reports & Analytics' },
    { id: 22, url: img22, title: 'System Settings' },
    { id: 23, url: img23, title: 'User Profile' },
];

export default function StudentERPScroll() {
    return <ThumbnailCarousel items={items} />;
}
