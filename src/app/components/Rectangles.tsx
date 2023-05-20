import {
  TextRegionTextLine,
  TextLine,
  TextRegion,
  TableCell,
  TableRegion,
} from '../api/hello/route';
import dynamic from 'next/dynamic';

const DynamicCanvasPage = dynamic(() => import('./CanvaPage'), {
  ssr: false,
});

interface RectangleProps {
  data: TextRegionTextLine[];
  onClick: (text: string, id: string, type: string) => void;
  toggleSelected: () => void;
  isSelected: boolean;
  selectedId: string;
  setSelectedId: (id: string) => void;
}

interface Vertex {
  x: number;
  y: number;
}

interface RectangleState {
  vertices: Vertex[];
}

export default function Rectangles(props: RectangleProps) {
  return (
    <div
      className={`h-[3743px] w-[2496px] bg-image1 bg-no-repeat bg-center bg-cover relative`}
      style={{ position: 'relative' }}
    >
      {props.data.map((region: TextRegionTextLine) => {
        return Object.values(region.text_regions).map(
          (textRegion: TextRegion) => {
            return Object.values(textRegion.text_lines).map(
              (textLine: TextLine) => {
                return (
                  <div key={textLine.id}>
                    {props.selectedId !== textLine.id && (
                      <div
                        onClick={() => {
                          props.onClick(textLine.text, textLine.id, 'text');
                          props.toggleSelected();
                          props.setSelectedId(textLine.id);
                        }}
                        className={`absolute z-1 hover:border-sky-700 hover:border-dashed  border-[#FF0000] border-solid border-2`}
                        key={textLine.id}
                        style={{
                          position: 'absolute',
                          top: `${textLine.contour.exterior[0].y}px`,
                          left: `${textLine.contour.exterior[0].x}px`,
                          width: `${
                            textLine.contour.exterior[1].x -
                            textLine.contour.exterior[0].x
                          }px`,
                          height: `${
                            textLine.contour.exterior[2].y -
                            textLine.contour.exterior[0].y
                          }px`,
                        }}
                      ></div>
                    )}

                    {props.isSelected && props.selectedId === textLine.id && (
                      <DynamicCanvasPage
                        key={textLine.id}
                        x={textLine.contour.exterior[0].x}
                        y={textLine.contour.exterior[0].y}
                        width={
                          textLine.contour.exterior[1].x -
                          textLine.contour.exterior[0].x
                        }
                        id={textLine.id}
                        height={
                          textLine.contour.exterior[2].y -
                          textLine.contour.exterior[0].y
                        }
                        onClick={() => {
                          props.onClick(textLine.text, textLine.id, 'text');
                          props.toggleSelected();
                          props.setSelectedId(textLine.id);
                        }}
                      />
                    )}
                  </div>
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
                      <div key={textLine.id}>
                        {props.selectedId !== textLine.id && (
                          <div
                            onClick={() => {
                              props.onClick(
                                textLine.text,
                                textLine.id,
                                'table'
                              );
                              props.toggleSelected();
                              props.setSelectedId(textLine.id);
                            }}
                            className={`absolute z-1 hover:border-sky-700 hover:border-dashed border-[#FF0000] border-solid border-2`}
                            key={textLine.id}
                            style={{
                              position: 'absolute',
                              top: `${textLine.contour.exterior[0].y}px`,
                              left: `${textLine.contour.exterior[0].x}px`,
                              width: `${
                                textLine.contour.exterior[1].x -
                                textLine.contour.exterior[0].x
                              }px`,
                              height: `${
                                textLine.contour.exterior[2].y -
                                textLine.contour.exterior[0].y
                              }px`,
                            }}
                          ></div>
                        )}
                        {props.selectedId === textLine.id && (
                          <DynamicCanvasPage
                            key={textLine.id}
                            x={textLine.contour.exterior[0].x}
                            y={textLine.contour.exterior[0].y}
                            width={
                              textLine.contour.exterior[1].x -
                              textLine.contour.exterior[0].x
                            }
                            id={textLine.id}
                            height={
                              textLine.contour.exterior[2].y -
                              textLine.contour.exterior[0].y
                            }
                            onClick={() => {
                              props.onClick(
                                textLine.text,
                                textLine.id,
                                'table'
                              );
                              props.toggleSelected();
                              props.setSelectedId(textLine.id);
                            }}
                          />
                        )}
                      </div>
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
