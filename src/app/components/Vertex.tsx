interface VertexProps {
  x: number;
  y: number;
  handleVertexMove: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Vertex(props: VertexProps) {
  return (
    <div
      className='absolute w-3 h-3 bg-red-500 rounded-full cursor-move'
      draggable='true'
      onMouseMove={props.handleVertexMove}
      style={{ top: `${props.y - 3}px`, left: `${props.x - 3}px` }}
    ></div>
  );
}
