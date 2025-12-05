import React from 'react';
import { Terminal, Database, Globe, Layers, GitBranch, Code2 } from 'lucide-react';

const TechMarquee = () => {
    // Define the tools and their styles/icons
    const tools = [
        { name: "React", color: "text-blue-400", icon: <ReactLogo /> },
        { name: "JavaScript", color: "text-yellow-400", icon: <JSLogo /> },
        { name: "TypeScript", color: "text-blue-500", icon: <TSLogo /> },
        { name: "Node.js", color: "text-green-500", icon: <NodeLogo /> },
        { name: "Tailwind", color: "text-cyan-400", icon: <TailwindLogo /> },
        { name: "Python", color: "text-yellow-300", icon: <PythonLogo /> },
        { name: "Git", color: "text-orange-500", icon: <GitBranch size={24} /> },
        { name: "Postgres", color: "text-indigo-400", icon: <Database size={24} /> },
        { name: "Next.js", color: "text-white", icon: <Globe size={24} /> },
        { name: "Figma", color: "text-purple-400", icon: <Layers size={24} /> },
        { name: "VS Code", color: "text-blue-400", icon: <Code2 size={24} /> },
        { name: "Linux", color: "text-yellow-100", icon: <Terminal size={24} /> },
    ];

    return (
        <div className="relative w-full overflow-hidden bg-black py-10">
            {/* Gradient Masks for smooth fade effect at edges */}
            <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

            {/* The scrolling container. 
        We use a custom animation defined in the styles below.
        The 'group' class allows us to pause children on hover.
      */}
            <div
                className="flex gap-8 w-max animate-scroll hover:[animation-play-state:paused]"
                style={{
                    width: "max-content",
                }}
            >
                {/* We render the list twice to create a seamless loop */}
                {[...tools, ...tools].map((tool, index) => (
                    <div
                        key={`${tool.name}-${index}`}
                        className="flex items-center gap-3 px-6 py-3 bg-gray-900 border border-gray-800 rounded-full shadow-lg transition-transform hover:scale-105 hover:bg-gray-800 cursor-default group/item"
                    >
                        <span className={`${tool.color} transition-colors duration-300 group-hover/item:brightness-125`}>
                            {tool.icon}
                        </span>
                        <span className="text-lg font-semibold text-gray-200 tracking-wide">
                            {tool.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Inline styles for the infinite scroll animation */}
            <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default TechMarquee;

// --- Custom Simple Logo Components (SVGs) ---

const ReactLogo = () => (
    <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-current fill-current">
        <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
        <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
        </g>
    </svg>
);

const JSLogo = () => (
    <div className="w-6 h-6 bg-yellow-400 text-black font-bold flex items-end justify-end pb-0.5 pr-0.5 text-[10px] rounded leading-none">
        JS
    </div>
);

const TSLogo = () => (
    <div className="w-6 h-6 bg-blue-500 text-white font-bold flex items-end justify-end pb-0.5 pr-0.5 text-[10px] rounded leading-none">
        TS
    </div>
);

const NodeLogo = () => (
    <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current">
        <path d="M16 0L30 8V24L16 32L2 24V8L16 0ZM26 10L16 4.5L6 10V22L16 27.5L26 22V10Z" />
        <path d="M16 12L22 15L16 18L10 15L16 12Z" />
    </svg>
);

const TailwindLogo = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
);

const PythonLogo = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M10 2c-2 0-3 1-3 3h5v2H5C3 7 2 8 2 10v3h2v-3h7v5h3v-2h2c2 0 3-1 3-3V7c0-2-1-3-3-3h-6z M12 13c2 0 3 1 3 3h-5v-2h7c2 0 3-1 3-3v-3h-2v3H11v-5H8v2h-2c-2 0-3 1-3 3v3c0 2 1 3 3 3h6z" />
    </svg>
);

const ContainerLogo = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M2 11h3v3H2zm4 0h3v3H6zm4 0h3v3h-3zm5-4h3v3h-3zm4 0h3v3h-3zM2 15h3v3H2zm4 0h3v3H6zm4 0h3v3h-3zm5 0h3v3h-3zm4 0h3v3h-3zM2 7h3v3H2zm4 0h3v3H6zm4 0h3v3h-3z" />
    </svg>
);
