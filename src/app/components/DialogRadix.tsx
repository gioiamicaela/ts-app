import { Dialog } from '@radix-ui/react-dialog';
import React, { useState } from 'react';

interface Props {
  show: boolean;
  onOpenChange: () => void;
  text: string;
}

export default function DialogRadix({ show, onOpenChange, text }: Props) {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          height: '500px',
          width: '1000px',
          zIndex: 9999,
          backgroundColor: 'red',
        }}
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
