import React from 'react';
import './GlitchText.css';

export interface GlitchTextProps {
  children?: React.ReactNode;
  text?: string;
  mode?: 'slices' | 'rgb' | 'simple';
  trigger?: 'always' | 'hover';
  speed?: number;
  intensity?: number;
  burstDuration?: number;
  offset?: number;
  skew?: number;
  flicker?: boolean;
  fontWeight?: number | string;
  enableShadows?: boolean;
  shadowColors?: [string, string];
  className?: string;
  style?: React.CSSProperties;
}

export default function GlitchText({
  children,
  text,
  mode = 'slices',
  trigger = 'always',
  speed = 1,
  intensity = 0.5,
  burstDuration = 0.6,
  offset = 10,
  skew = 0,
  flicker = false,
  fontWeight = 900,
  enableShadows = true,
  shadowColors = ['#ff0000', '#00ffff'],
  className = '',
  style = {},
}: GlitchTextProps) {
  const content = text || (typeof children === 'string' ? children : '');

  const dynamicStyles: React.CSSProperties = {
    ...style,
    fontWeight,
    color: '#ffffff',
    ['--glitch-offset' as any]: `${offset}px`,
    ['--glitch-shadow-1' as any]: enableShadows ? shadowColors[0] : 'transparent',
    ['--glitch-shadow-2' as any]: enableShadows ? shadowColors[1] : 'transparent',
  };

  return (
    <span
      className={`glitch-text glitch-${mode} ${className}`}
      data-text={content}
      style={dynamicStyles}
    >
      {children || content}
    </span>
  );
}

