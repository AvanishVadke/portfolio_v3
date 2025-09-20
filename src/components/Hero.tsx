"use client";
import React, { useRef } from "react";
import LaserFlow from "./LaserFlow";
import MacOSWindow from "./MacOSWindow";

const Hero = () => {
  const revealImgRef = useRef<HTMLImageElement>(null);

  return (
    <div 
      id="home"
      style={{ 
        height: '120vh', 
        position: 'relative', 
        overflow: 'hidden',
        backgroundColor: '#060010'
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', `${x}px`);
          el.style.setProperty('--my', `${y}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty('--mx', '-9999px');
          el.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.08}
        verticalBeamOffset={0.15}
        color="#4a0193"
        className=""
        style={{}}
        dpr={typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1}
        horizontalSizing={0.9}
        verticalSizing={1.3}
        wispDensity={1.2}
        wispSpeed={12}
        wispIntensity={2.5}
        flowSpeed={0.4}
        flowStrength={0.18}
        fogIntensity={0.25}
        fogScale={0.3}
        fogFallSpeed={0.6}
        decay={1.06}
        falloffStart={0.67}
      />
      
      <div style={{
        position: 'absolute',
        top: '65%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '60%',
        backgroundColor: '#060010',
        borderRadius: '20px',
        border: '2px solid #4a0193',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        zIndex: 6
      }}>
        <MacOSWindow />
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={revealImgRef}
        src="/laserFlowImage.png"
        alt="Reveal effect"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
          objectFit: 'cover',
          zIndex: 5,
          mixBlendMode: 'lighten',
          opacity: 0.3,
          pointerEvents: 'none',
          '--mx': '-9999px',
          '--my': '-9999px',
          WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat'
        } as React.CSSProperties}
      />
    </div>
  );
};

export default Hero;
