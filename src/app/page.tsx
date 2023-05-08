'use client';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Rectangles from './components/Rectangles';
import DialogRadix from './components/DialogRadix';
import { updateJsonText } from './data/data';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const [position, setPosition] = useState({ x: '50%', y: '25%' });
  const [updatedText, setUpdatedText] = useState(text);

  const handleOpen = (text: string, id: string) => {
    setShow(true);
    setText(text);
    setId(id);
    setUpdatedText(text);
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

  const handleUpdateData = async (id: string, text: string) => {
    const res = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, text }),
    });
    // const { message } = await res.json();
    // console.log(message);
  };

  return (
    <main
      className={`${inter.className} relative`}
      style={{ position: 'relative' }}
    >
      <Rectangles onClick={(text, id) => handleOpen(text, id)} />
      {show && (
        <DialogRadix
          show={show}
          onOpenChange={handleClose}
          text={text}
          onMouseDown={handleDragStart}
          position={position}
          updatedText={updatedText}
          setUpdatedText={setUpdatedText}
          updateJsonText={updateJsonText}
          id={id}
          handleUpdateData={handleUpdateData}
        />
      )}
    </main>
  );
}
