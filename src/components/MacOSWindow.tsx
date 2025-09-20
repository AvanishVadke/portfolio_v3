"use client";
import React from 'react';
import TextType from './TextType';
import LogoLoop from './LogoLoop';
import {
  SiTypescript,
  SiJavascript,
  SiVercel,
  SiSupabase,
  SiTailwindcss,
  SiReact,
  SiDocker,
  SiNextdotjs,
  SiPython,
  SiAmazon,
  SiExpo,
  SiGithub,
  SiGit,
  SiFirebase,
  SiKotlin,
} from "react-icons/si";

const techLogos = [
  { node: <SiTypescript color="#3178c6" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript color="#f7df1e" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiPython color="#3776ab" />, title: "Python", href: "https://www.python.org" },
  { node: <SiReact color="#61dafb" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs color="#ffffff" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss color="#06b6d4" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiSupabase color="#3ECF8E" />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiVercel color="#ffffff" />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiAmazon color="#ff9900" />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiDocker color="#2496ed" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiExpo color="#ffffff" />, title: "Expo React Native", href: "https://expo.dev" },
  { node: <SiGithub color="#ffffff" />, title: "GitHub", href: "https://github.com" },
  { node: <SiGit color="#f05032" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiFirebase color="#ffca28" />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiKotlin color="#7f52ff" />, title: "Kotlin", href: "https://kotlinlang.org" },
];

const MacOSWindow = () => {
  return (
    <div className="relative w-full h-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden group">
      {/* Subtle laser glow */}
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
      
      {/* MacOS Top Bar */}
      <div className="h-7 flex items-center px-4 bg-white/5 border-b border-white/10 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] cursor-pointer hover:brightness-110 transition-all" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] cursor-pointer hover:brightness-110 transition-all" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] cursor-pointer hover:brightness-110 transition-all" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-8">
        
        {/* Name */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-wide">
            <TextType 
              text={["Avanish Vadke"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              variableSpeed={false}
              onSentenceComplete={() => {}}
            />
          </h1>
          <p className="text-base md:text-lg text-gray-400 font-light tracking-wider">
            Software Developer • MERN Stack • Mobile developer
          </p>
        </div>

        {/* Technology Stack LogoLoop */}
        <div className="mt-12 w-full">
          <div className="h-20 relative overflow-hidden">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#060010"

              ariaLabel="Technology stack logos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacOSWindow;
