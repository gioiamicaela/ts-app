import { Dialog } from '@radix-ui/react-dialog';
import React, { MouseEventHandler, useState } from 'react';

interface Props {
  show: boolean;
  onOpenChange: () => void;
  text: string;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  position: {
    x: string;
    y: string;
  };
}

export default function DialogRadix({
  show,
  onOpenChange,
  text,
  onMouseDown,
  position,
}: Props) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          height: '500px',
          width: '1000px',
          zIndex: 9999,
          backgroundColor: 'red',
        }}
        onMouseDown={onMouseDown}
      >
        <Dialog open={show} onOpenChange={onOpenChange}>
          <h2>Text</h2>
          <p className='text-normal text-base'>{text}</p>
          <button onClick={onOpenChange}>Close</button>
        </Dialog>
      </div>
    </>
  );
}
