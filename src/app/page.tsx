import { Inter } from 'next/font/google';
import Image from 'next/image';
import dataJson from './data/Albatross_vol009of055-050-0.json';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className} h-screen w-screen bg-image1 bg-no-repeat bg-center bg-contain relative`}
    >
      <div
        className={`border-[#FF0000] border-solid border-2 absolute w-[100px] h-[100px] start-[2081px] left-5`}
      ></div>
    </main>
  );
}
