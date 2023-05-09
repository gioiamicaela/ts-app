import {
  TextRegionTextLine,
  TextLine,
  TextRegion,
  TableCell,
  TableRegion,
} from '../api/hello/route';

interface RectangleProps {
  data: TextRegionTextLine[];
  onClick: (text: string, id: string, type: string) => void;
}

export default function Rectangles(props: RectangleProps) {
  return (
    <div
      className={`h-[3743px] w-[2496px] bg-image1 bg-no-repeat bg-center bg-cover relative`}
    >
      {props.data.map((region: TextRegionTextLine) => {
        return Object.values(region.text_regions).map(
          (textRegion: TextRegion) => {
            return Object.values(textRegion.text_lines).map(
              (textLine: TextLine) => {
                return (
                  <div
                    onClick={() =>
                      props.onClick(textLine.text, textLine.id, 'text')
                    }
                    className={`absolute z-1 hover:border-sky-700 hover:border-dashed hover:border-8 border-[#FF0000] border-solid border-2`}
                    key={textLine.id}
                    style={{
                      position: 'absolute',
                      top: `${textLine.contour.exterior[0].y}px`,
                      left: `${textLine.contour.exterior[0].x}px`,
                      width: `${
                        textLine.contour.exterior[1].x -
                        textLine.contour.exterior[0].x
                      }px`,
                      height: '70px',
                    }}
                  ></div>
                );
              }
            );
          }
        );
      })}
      {props.data.map((textRegion: TextRegionTextLine) => {
        return Object.values(textRegion.table_regions).map(
          (tableRegion: TableRegion) => {
            return Object.values(tableRegion.table_cells).map(
              (tableCell: TableCell) => {
                if (!tableCell.text_lines) {
                  return null;
                }
                return Object.values(tableCell.text_lines).map(
                  (textLine: TextLine) => {
                    return (
                      <div
                        onClick={() =>
                          props.onClick(textLine.text, textLine.id, 'table')
                        }
                        className={`absolute z-1 hover:border-sky-700 hover:border-dashed hover:border-8 border-[#FF0000] border-solid border-2`}
                        key={textLine.id}
                        style={{
                          position: 'absolute',
                          top: `${textLine.contour.exterior[0].y}px`,
                          left: `${textLine.contour.exterior[0].x}px`,
                          width: `${
                            textLine.contour.exterior[1].x -
                            textLine.contour.exterior[0].x
                          }px`,
                          height: '70px',
                        }}
                      ></div>
                    );
                  }
                );
              }
            );
          }
        );
      })}
    </div>
  );
}
