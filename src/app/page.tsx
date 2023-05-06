'use client';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Rectangles from './components/Rectangles';
import Popup from './components/Popup';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <main
      className={`${inter.className} relative`}
      style={{ position: 'relative' }}
    >
      <Rectangles />
      {show && <Popup />}
    </main>
  );
}
