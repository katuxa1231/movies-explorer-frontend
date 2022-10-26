import { useEffect, useState } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    let resizeTimeOutId = null;

    const handleResize = () => {
      clearTimeout(resizeTimeOutId)
      resizeTimeOutId = setTimeout(() => setWindowDimensions(getWindowDimensions()), 500)
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
