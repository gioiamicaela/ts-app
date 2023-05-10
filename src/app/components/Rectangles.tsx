import {
  TextRegionTextLine,
  TextLine,
  TextRegion,
  TableCell,
  TableRegion,
} from '../api/hello/route';
import Vertex from './Vertex';
import { useEffect, useState } from 'react';

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
  const [state, setState] = useState<RectangleState>({ vertices: [] });

  function handleVertexMove(index: number, x: number, y: number) {
    const vertices = [...state.vertices];
    vertices[index] = { x, y };
    setState({ ...state, vertices });
  }

  return (
    <div
      className={`h-[3743px] w-[2496px] bg-image1 bg-no-repeat bg-center bg-cover relative`}
    >
      {props.data.map((region: TextRegionTextLine) => {
        return Object.values(region.text_regions).map(
          (textRegion: TextRegion) => {
            return Object.values(textRegion.text_lines).map(
              (textLine: TextLine) => {
                const vertex: Vertex[] = [
                  {
                    x: 0,
                    y: 0,
                  },
                  {
                    x:
                      textLine.contour.exterior[1].x -
                      textLine.contour.exterior[0].x,
                    y: 0,
                  },
                  {
                    x: 0,
                    y:
                      textLine.contour.exterior[2].y -
                      textLine.contour.exterior[0].y,
                  },
                  {
                    x:
                      textLine.contour.exterior[1].x -
                      textLine.contour.exterior[0].x,
                    y:
                      textLine.contour.exterior[2].y -
                      textLine.contour.exterior[0].y,
                  },
                ];

                return (
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
                  >
                    {/* {props.isSelected &&
                      props.selectedId === textLine.id &&
                      vertex.map((vertex: Vertex, index: number) => {
                        return (
                          <div
                            key={index}
                            className='absolute w-3 h-3 bg-red-500 rounded-full'
                            style={{
                              top: `${vertex.y - 3}px`,
                              left: `${vertex.x - 3}px`,
                            }}
                          ></div>
                        );
                      })} */}
                    {props.isSelected &&
                      props.selectedId === textLine.id &&
                      vertex.map((vertex: Vertex, index: number) => (
                        <Vertex
                          key={index}
                          index={index} // incluir el índice del vértice
                          x={vertex.x}
                          y={vertex.y}
                          onVertexMove={handleVertexMove}
                        />
                      ))}
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
                    const vertex: Vertex[] = [
                      {
                        x: 0,
                        y: 0,
                      },
                      {
                        x:
                          textLine.contour.exterior[1].x -
                          textLine.contour.exterior[0].x,
                        y: 0,
                      },
                      {
                        x: 0,
                        y:
                          textLine.contour.exterior[2].y -
                          textLine.contour.exterior[0].y,
                      },
                      {
                        x:
                          textLine.contour.exterior[1].x -
                          textLine.contour.exterior[0].x,
                        y:
                          textLine.contour.exterior[2].y -
                          textLine.contour.exterior[0].y,
                      },
                    ];
                    return (
                      <div
                        onClick={() => {
                          props.onClick(textLine.text, textLine.id, 'table');
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
                      >
                        {/* {props.isSelected &&
                          props.selectedId === textLine.id &&
                          vertex.map((vertex: Vertex, index: number) => {
                            return (
                              <div
                                key={index}
                                className='absolute w-3 h-3 bg-red-500 rounded-full'
                                style={{
                                  top: `${vertex.y - 3}px`,
                                  left: `${vertex.x - 3}px`,
                                }}
                              ></div>
                            );
                          })} */}
                        {props.isSelected &&
                          props.selectedId === textLine.id &&
                          vertex.map((vertex: Vertex, index: number) => (
                            <Vertex
                              key={index}
                              index={index} // incluir el índice del vértice
                              x={vertex.x}
                              y={vertex.y}
                              onVertexMove={handleVertexMove}
                            />
                          ))}
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
