import React, { useState, useEffect } from 'react';
import { Stage, Layer, Line, Circle } from 'react-konva';

interface Vertex {
  x: number;
  y: number;
}

interface CanvasPageProps {
  x: number;
  y: number;
  width: number;
  height: number;
  onClick: () => void;
}

function CanvasPage(props: CanvasPageProps) {
  const [vertices, setVertices] = useState<Vertex[]>([
    { x: props.x, y: props.y },
    { x: props.x + props.width, y: props.y },
    { x: props.x + props.width, y: props.y + props.height },
    { x: props.x, y: props.y + props.height },
  ]);

  useEffect(() => {
    const savedVertices = localStorage.getItem('vertices');
    if (savedVertices) {
      setVertices(JSON.parse(savedVertices));
    }
  }, []);

  const handleVertexDrag = (index: number, event: any) => {
    const newVertices = [...vertices];
    newVertices[index] = { x: event.target.x(), y: event.target.y() };
    setVertices(newVertices);
  };

  useEffect(() => {
    localStorage.setItem('vertices', JSON.stringify(vertices));
  }, [vertices]);

  return (
    <Stage
      width={2496}
      height={3743}
      style={{ position: 'absolute', zIndex: 1 }}
    >
      <Layer>
        <Line
          points={vertices.flatMap((vertex) => [vertex.x, vertex.y])}
          stroke='red'
          closed
        />
      </Layer>
      <Layer>
        {vertices.map((vertex, index) => (
          <Circle
            key={index}
            x={vertex.x}
            y={vertex.y}
            radius={5}
            fill='red'
            draggable
            onDragMove={(event) => handleVertexDrag(index, event)}
          />
        ))}
      </Layer>
    </Stage>
  );
}

export default CanvasPage;
