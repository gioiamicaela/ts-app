'use client';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Rectangles from './components/Rectangles';
import DialogRadix from './components/DialogRadix';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [position, setPosition] = useState({ x: '50%', y: '25%' });

  const handleOpen = (text: string) => {
    setShow(true);
    setText(text);
    setPosition({ x: '50%', y: '25%' });
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleDrag = (e: MouseEvent) => {
    setPosition((prevPosition) => ({
      x: `calc(${prevPosition.x} + ${e.movementX}px)`,
      y: `calc(${prevPosition.y} + ${e.movementY}px)`,
    }));
  };

  const handleDragStart: React.MouseEventHandler = (e) => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
  };

  const handleDragEnd = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  return (
    <main
      className={`${inter.className} relative`}
      style={{ position: 'relative' }}
    >
      <Rectangles onClick={(text) => handleOpen(text)} />
      {show && (
        <DialogRadix
          show={show}
          onOpenChange={handleClose}
          text={text}
          onMouseDown={handleDragStart}
          position={position}
        />
      )}
    </main>
  );
}
