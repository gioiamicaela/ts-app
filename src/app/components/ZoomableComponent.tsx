import { useEffect, useRef } from 'react';

const ZoomableComponent = ({ children }: { children: React.ReactNode }) => {
  const zoomContainerRef = useRef<HTMLDivElement>(null);
  let zoomTimeout: NodeJS.Timeout | null = null;
  let isZooming = false;

  const handleMouseEnter = () => {
    isZooming = true;
  };

  const handleMouseLeave = () => {
    const container = zoomContainerRef.current;
    if (!container) return;

    clearTimeout(zoomTimeout as NodeJS.Timeout);
    isZooming = false;
    zoomTimeout = setTimeout(() => {
      if (!isZooming) {
        container.style.transformOrigin = 'initial';
        container.style.transform = 'scale(1)';
      }
    }, 100); // Ajusta el valor del retraso según sea necesario
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isZooming) return;

    const container = zoomContainerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const cursorX = event.clientX - containerRect.left;
    const cursorY = event.clientY - containerRect.top;

    requestAnimationFrame(() => {
      container.style.transformOrigin = `${cursorX}px ${cursorY}px`;
      container.style.transform = 'scale(1.5)';
    });
  };

  useEffect(() => {
    return () => {
      clearTimeout(zoomTimeout as NodeJS.Timeout);
      const container = zoomContainerRef.current;
      if (container) {
        container.style.transformOrigin = 'initial';
        container.style.transform = 'scale(1)';
      }
    };
  }, []);

  return (
    <div
      ref={zoomContainerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default ZoomableComponent;
