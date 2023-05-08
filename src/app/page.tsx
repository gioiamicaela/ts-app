'use client';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Rectangles from './components/Rectangles';
import DialogRadix from './components/DialogRadix';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const handleOpen = (text: string) => {
    setShow(true);
    setText(text);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <main
      className={`${inter.className} relative`}
      style={{ position: 'relative' }}
    >
      <Rectangles onClick={(text) => handleOpen(text)} />
      {show && (
        <DialogRadix show={show} onOpenChange={handleClose} text={text} />
      )}
    </main>
  );
}
