import { useState, useEffect } from 'react';
import LineWaves from './LineWaves';

export default function AnimatedBackground() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initial theme check
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme);

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'dark';

  // Config for dark mode vs light mode
  // LineWaves requires Hex colors for color1, color2, color3
  const config = isDark
    ? {
        color1: '#ffffff', // Bright for dark mode
        color2: '#a0a0a0',
        color3: '#555555',
        brightness: 0.15,
        warpIntensity: 0.8
      }
    : {
        color1: '#000000', // Dark colors for light mode
        color2: '#333333',
        color3: '#777777',
        brightness: 0.15,
        warpIntensity: 0.8
      };

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: isDark ? 'rgba(15, 15, 15, 0.65)' : 'rgba(255, 255, 255, 0.75)',
          zIndex: 1,
          pointerEvents: 'none',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)'
        }} 
      />
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <LineWaves
          color1={config.color1}
          color2={config.color2}
      color3={config.color3}
      brightness={config.brightness}
      warpIntensity={config.warpIntensity}
      speed={0.3}
      innerLineCount={20}
      outerLineCount={24}
      rotation={-45}
      edgeFadeWidth={0.2}
      colorCycleSpeed={1.0}
      enableMouseInteraction={true}
      mouseInfluence={2.0}
    />
      </div>
    </div>
  );
}
