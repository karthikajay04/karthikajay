"use client";

import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";
import StickyScroll from "../ui/sticky-scroll";
import FitAndTrackScroll from "../ui/fit-and-track-scroll";
import EcommerceScroll from "../ui/ecommerce-scroll";
import PortfolioScroll from "../ui/portfolio-scroll";
import StudentERPScroll from "../ui/student-erp-scroll";


export default function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20 bg-black" id="projects">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Projects
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const GithubButton = ({ href }: { href: string }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex gap-2 border-none transition-all duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] rounded-full font-extrabold justify-center items-center px-4 py-3 text-[0.825rem] leading-4 bg-black/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04),inset_0_0_0_1px_rgba(255,255,255,0.04)] text-white hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),inset_0_0_0_1px_rgba(252,232,3,0.08)] hover:text-[#fce803] hover:-translate-y-1 hover:bg-black/50 mt-8 mx-auto w-fit"
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z"
                    fill="currentColor"
                ></path>
            </svg>
            <span>View on Github</span>
        </a>
    );
};

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <img
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const StudentAIHubContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Student AI Hub
                </span>{" "}
                is an all-in-one platform designed to help students with learning, productivity, and coding. It offers tools like a video summarizer, code debugger, code generator, roadmap builder, AI chatbot, and interactive learning games. The platform aims to simplify studies, speed up project development, and support students with smart, easy-to-use AI features—all in one place.
            </p>
            <div className="w-full rounded-xl">
                <StickyScroll />
            </div>
            <GithubButton href="#" />
        </div>
    );
};

const FitAndTrackContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Fit and Track
                </span>{" "}
                is a lightweight fitness and habit-tracking web app built using Node.js, Express, EJS, and CSS. It allows users to track their daily habits, fitness routines, and progress through a clean, simple interface. The app is designed to help users stay consistent, monitor improvements, and build healthier routines over time.
            </p>
            <div className="w-full rounded-xl">
                <FitAndTrackScroll />
            </div>
            <GithubButton href="https://github.com/karthikajay04/Fit-and-Track-" />
        </div>
    );
};

const EcommerceContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    E-Commerce Frontend
                </span>{" "}
                This is a fully responsive eCommerce frontend developed using React. The app includes product listing pages, product detail views, category filters, a shopping cart UI, and smooth page navigation using React Router. Designed with reusable components and modern UI styling, it provides users with a fast, clean, and seamless online shopping experience. Perfect foundation for connecting to any backend or API.
            </p>
            <div className="w-full rounded-xl">
                <EcommerceScroll />
            </div>
            <GithubButton href="https://github.com/karthikajay04/Ecommerce-Frontend" />
        </div>
    );
};

const PortfolioContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Portfolio Website
                </span>{" "}
                This is the portfolio website you are currently viewing. It showcases my projects, skills, and achievements. Built with React, Tailwind CSS, and Framer Motion, it features a modern, responsive design with smooth animations and a dark mode aesthetic.
            </p>
            <div className="w-full rounded-xl">
                <PortfolioScroll />
            </div>
            <GithubButton href="https://github.com/karthikajay04/PortfolioWebsite" />
        </div>
    );
};

const StudentERPContent = () => {
    return (
        <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mb-8">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                    Student ERP System
                </span>{" "}
                is a comprehensive management solution for educational institutions. It streamlines administrative tasks, manages student records, tracks attendance, handles grading, and facilitates communication between teachers, students, and parents. Built with modern web technologies, it ensures efficiency and transparency in educational operations.
            </p>
            <div className="w-full rounded-xl">
                <StudentERPScroll />
            </div>
            <GithubButton href="https://github.com/karthikajay04/collage-erp-system" />
        </div>
    );
};

const data = [
    {
        category: "Productivity website for student and teacher",
        title: "Student AI Hub",
        src: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        content: <StudentAIHubContent />,
    },
    {
        category: "Fitness & Habit Tracker",
        title: "Fit and Track",
        src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        content: <FitAndTrackContent />,
    },
    {
        category: "E-Commerce",
        title: "E-Commerce Frontend",
        src: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
        content: <EcommerceContent />,
    },
    {
        category: "Personal Portfolio",
        title: "Portfolio Website",
        src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
        content: <PortfolioContent />,
    },
    {
        category: "Management System",
        title: "Student ERP System",
        src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop",
        content: <StudentERPContent />,
    },
];
