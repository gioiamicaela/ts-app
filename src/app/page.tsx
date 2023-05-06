'use client';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Rectangles from './components/Rectangles';
import DialogRadix from './components/DialogRadix';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setShow(!show);
  };
  const [show, setShow] = useState<boolean>(false);
  return (
    <main
      className={`${inter.className} relative`}
      style={{ position: 'relative' }}
    >
      <Rectangles onClick={handleClick} />
      <DialogRadix open={show} onOpenChange={() => setShow(false)} />
    </main>
  );
}
