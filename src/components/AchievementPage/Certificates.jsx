import React, { useState } from 'react';
import { Calendar, CheckCircle2, Award, ChevronDown, ChevronUp } from 'lucide-react';
import TechMarquee from '../ui/tech-marquee';

import cert1 from '../../assets/images/Certificate/certificate-1.png';
import cert2 from '../../assets/images/Certificate/certificate-2.png';
import cert3 from '../../assets/images/Certificate/certificate-3.png';
import cert4 from '../../assets/images/Certificate/certificate-4.png';
import cert5 from '../../assets/images/Certificate/certificate-5.png';
import cert6 from '../../assets/images/Certificate/certificate-6.png';
import cert7 from '../../assets/images/Certificate/certificate-7.png';
import cert8 from '../../assets/images/Certificate/certificate-8.png';
import cert9 from '../../assets/images/Certificate/certificate-9.png';
import cert10 from '../../assets/images/Certificate/certificate-10.png';
import cert11 from '../../assets/images/Certificate/certificate-11.png';
import cert12 from '../../assets/images/Certificate/certificate-12.png';
import cert13 from '../../assets/images/Certificate/certificate-13.png';
import cert14 from '../../assets/images/Certificate/certificate-14.png';
import cert15 from '../../assets/images/Certificate/certificate-15.png';
import cert16 from '../../assets/images/Certificate/certificate-16.png';
import cert17 from '../../assets/images/Certificate/certificate-17.png';

const certificates = [
    {
        id: 15,
        title: "GenAI Powered Data Analytics Job Simulation",
        issuer: "Tata Group",
        date: "2025",
        image: cert15,
        skills: ["Data Analytics", "Generative AI", "Risk Profiling", "Business Intelligence"],
        color: "border-blue-700"
    },
    {
        id: 10,
        title: "Data Engineering Virtual Internship",
        issuer: "EduSkills",
        date: "2024",
        image: cert10,
        skills: ["Data Engineering", "AWS Cloud", "Big Data", "Cloud Computing"],
        color: "border-orange-500"
    },
    {
        id: 13,
        title: "Web Development Internship",
        issuer: "CodSoft",
        date: "2025",
        image: cert13,
        skills: ["Web Development", "HTML/CSS", "JavaScript", "Frontend"],
        color: "border-blue-900"
    },
    {
        id: 11,
        title: "Python Programming Internship",
        issuer: "CodSoft",
        date: "2025",
        image: cert11,
        skills: ["Python", "Software Development", "Programming Logic"],
        color: "border-blue-900"
    },
    {
        id: 14,
        title: "ROOLATHON Hackathon Participation",
        issuer: "Srinivas Institute of Technology",
        date: "2023",
        image: cert14,
        skills: ["Hackathon", "Problem Solving", "Team Collaboration"],
        color: "border-purple-600"
    },
    {
        id: 17,
        title: "The Multilingual Hackathon",
        issuer: "WeMakeDevs",
        date: "2025",
        image: cert17,
        skills: ["Hackathon", "Localization", "Open Source"],
        color: "border-green-500"
    },
    {
        id: 2,
        title: "Codeathon Participation",
        issuer: "Srinivas Institute of Technology",
        date: "2024",
        image: cert2,
        skills: ["Competitive Coding", "Problem Solving", "Algorithms"],
        color: "border-purple-500"
    },
    {
        id: 4,
        title: "Solution Challenge Participation",
        issuer: "Google Developer Groups",
        date: "2025",
        image: cert4,
        skills: ["Social Impact", "Innovation", "Product Development"],
        color: "border-yellow-500"
    },
    {
        id: 1,
        title: "AWS Academy Cloud Foundations",
        issuer: "AWS Academy",
        date: "2024",
        image: cert1,
        skills: ["Cloud Computing", "AWS Core Services", "Cloud Security", "Architecture"],
        color: "border-teal-400"
    },
    {
        id: 3,
        title: "Deep Learning with TensorFlow",
        issuer: "IBM",
        date: "2024",
        image: cert3,
        skills: ["Deep Learning", "TensorFlow", "Neural Networks", "Machine Learning"],
        color: "border-blue-600"
    },
    {
        id: 5,
        title: "Machine Learning with Python",
        issuer: "IBM",
        date: "2025",
        image: cert5,
        skills: ["Python", "Machine Learning", "Scikit-learn", "Data Analysis"],
        color: "border-blue-600"
    },
    {
        id: 6,
        title: "Research Publication: Video Summarizer",
        issuer: "JETIR Journal",
        date: "2025",
        image: cert6,
        skills: ["Research", "Technical Writing", "NLP", "Video Processing"],
        color: "border-blue-900"
    },
    {
        id: 16,
        title: "Paper Presentation: Video Summarizer",
        issuer: "ICRICS-2025 (Srinivas Institute)",
        date: "2025",
        image: cert16,
        skills: ["Research Presentation", "Computer Science", "Public Speaking"],
        color: "border-blue-800"
    },
    {
        id: 7,
        title: "Generative Models for Developers",
        issuer: "Infosys Springboard",
        date: "2025",
        image: cert7,
        skills: ["Generative AI", "LLMs", "Model Deployment", "AI Engineering"],
        color: "border-cyan-500"
    },
    {
        id: 8,
        title: "OpenAI GPT-3 for Developers",
        issuer: "Infosys Springboard",
        date: "2025",
        image: cert8,
        skills: ["GPT-3", "OpenAI API", "Prompt Engineering", "Generative AI"],
        color: "border-sky-500"
    },
    {
        id: 9,
        title: "Introduction to OpenAI GPT Models",
        issuer: "Infosys Springboard",
        date: "2025",
        image: cert9,
        skills: ["OpenAI", "GPT Models", "Generative AI", "AI Fundamentals"],
        color: "border-sky-500"
    },
    {
        id: 12,
        title: "Certificate of Energy Literacy",
        issuer: "Energy Swaraj Foundation",
        date: "2024",
        image: cert12,
        skills: ["Sustainability", "Energy Conservation", "Solar Energy"],
        color: "border-amber-600"
    }
];

const Certificates = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const displayedCertificates = showAll ? certificates : certificates.slice(0, 6);

    return (
        <div id="achievements" className="min-h-screen bg-black text-gray-100 flex flex-col items-center">
            <TechMarquee />
            <div className="max-w-6xl w-full space-y-8 p-8">

                {/* Header Section */}
                <div className="text-center space-y-4 mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-sm text-gray-400">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span>Achievements & Certifications</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                        Licenses & Certifications
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Continuous learning is part of the journey. Here are some of the professional certifications I've earned to validate my skills.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedCertificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="group relative bg-gray-900/50 hover:bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-900/50 overflow-hidden flex flex-col h-full"
                        >
                            {/* Colored Accent Line on Hover */}
                            <div className={`absolute top-0 left-0 w-1 h-full ${cert.color.replace('border', 'bg')} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`} />

                            <div className="flex flex-col h-full justify-between space-y-6 relative z-0">

                                {/* Top Section with Image */}
                                <div className="space-y-4">
                                    <div
                                        className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-800 group-hover:border-gray-700 transition-colors cursor-pointer"
                                        onClick={() => setSelectedImage(cert.image)}
                                    >
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm font-medium">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="space-y-4 pt-4 border-t border-gray-800/50">
                                    <div className="flex items-center text-sm text-gray-500 gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>Issued {cert.date}</span>
                                    </div>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-xs font-medium bg-gray-950 text-gray-300 rounded-full border border-gray-800 flex items-center gap-1"
                                            >
                                                <CheckCircle2 className="w-3 h-3 text-gray-500" />
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-8 py-3 rounded-full bg-gray-900 border border-gray-800 text-white font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                        {showAll ? (
                            <>
                                Show Less <ChevronUp className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                Show Full Collection <ChevronDown className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt="Certificate Full View"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute top-4 right-4 text-white bg-gray-900/50 hover:bg-gray-900 rounded-full p-2 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Certificates;
