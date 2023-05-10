import React, { useState } from 'react';
import Draggable from 'react-draggable';

interface VertexProps {
  x: number;
  y: number;
  index: number;
  onVertexMove: (index: number, x: number, y: number) => void;
}

interface VertexState {
  position: { x: number; y: number };
}

export default function Vertex(props: VertexProps) {
  const [state, setState] = useState<VertexState>({
    position: { x: props.x, y: props.y },
  });

  function handleDrag(event: any, data: any) {
    const x = props.x + data.deltaX;
    const y = props.y + data.deltaY;
    setState({ position: { x, y } });
  }

  return (
    <Draggable
      onDrag={handleDrag} // Este controlador de eventos se llama durante el arrastre
    >
      <div
        className='absolute w-3 h-3 bg-red-500 rounded-full cursor-pointer'
        style={{
          top: `${state.position.y - 3}px`,
          left: `${state.position.x - 3}px`,
        }}
      ></div>
    </Draggable>
  );
}
