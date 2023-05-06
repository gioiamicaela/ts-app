import { Inter } from 'next/font/google';
import Image from 'next/image';
import { TextRegionTextLine, textRegionTextLines } from './data/data';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`${inter.className} h-[3743px] w-[2496px] bg-image1 bg-no-repeat bg-center bg-cover relative`}
    >
      <div>
        {textRegionTextLines.map((item: TextRegionTextLine) => {
          return (
            <div
              className={`border-[#FF0000] border-solid border-2 absolute w-[${item.contour.exterior[1].x}px] h-[70px] start-[${item.contour.exterior[0].x}px] top-[${item.contour.exterior[0].y}px]`}
              key={item.id}
            ></div>
          );
        })}
      </div>
    </main>
  );
}
