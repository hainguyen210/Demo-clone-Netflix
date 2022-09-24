import { useState, useEffect } from 'react';

const height = window.innerHeight || document.documentElement.clientHeight;
const width = window.innerWidth || document.documentElement.clientWidth;

export const useViewport = () => {
  const [windowWidth, setWindowWidth] = useState({ height, width });

  useEffect(() => {
    const handleWindowWidth = () => {
      const height = window.innerHeight || document.documentElement.clientHeight;
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWindowWidth({height, width});
    }
    handleWindowWidth();
    window.addEventListener('resize', handleWindowWidth);
    return () => {
      window.removeEventListener('resize', handleWindowWidth);
    }
  },[]);
  return [windowWidth];
}