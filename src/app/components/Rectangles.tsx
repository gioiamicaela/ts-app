import { TextRegionTextLine, textRegionTextLines } from '../data/data';

type Props = {
  onClick: (text: string) => void;
};

export default function Rectangles(props: Props) {
  return (
    <div
      className={`h-[3743px] w-[2496px] bg-image1 bg-no-repeat bg-center bg-cover relative`}
    >
      {textRegionTextLines.map((item: TextRegionTextLine) => {
        return (
          <div
            onClick={() => props.onClick(item.text)}
            className={`absolute z-1 hover:border-sky-700 hover:border-dashed hover:border-8 border-[#FF0000] border-solid border-2`}
            key={item.id}
            style={{
              position: 'absolute',
              top: `${item.contour.exterior[0].y}px`,
              left: `${item.contour.exterior[0].x}px`,
              width: `${item.contour.exterior[1].x}px`,
              height: '70px',
            }}
          ></div>
        );
      })}
    </div>
  );
}
