'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';
import Rectangles from './components/Rectangles';
import DialogRadix from './components/DialogRadix';
import { TextRegionTextLine } from './api/hello/route';
import ZoomableComponent from './components/ZoomableComponent';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [data, setData] = useState<TextRegionTextLine[]>([]);
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [position, setPosition] = useState({ x: '50%', y: '25%' });
  const [updatedText, setUpdatedText] = useState(text);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello', {
          method: 'GET',
        });
        const data = await response.json();
        setData([data.data]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleOpen = (text: string, id: string, type: string) => {
    setShow(true);
    setText(text);
    setId(id);
    setUpdatedText(text);
    setPosition({ x: '50%', y: '25%' });
    setType(type);
  };

  const handleClose = () => {
    setIsSelected(false);
    setShow(false);
    setSelectedId('');
  };

  const handleDrag = (e: MouseEvent) => {
    setPosition((prevPosition) => ({
      x: `calc(${prevPosition.x} + ${e.movementX}px)`,
      y: `calc(${prevPosition.y} + ${e.movementY}px)`,
    }));
  };

  const handleDragStart: React.MouseEventHandler = (e) => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
  };

  const handleDragEnd = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  const handleUpdateData = async (id: string, text: string, type: string) => {
    const res = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, text, type }),
    });
  };

  const updateJsonText = (id: string, text: string, type: string) => {
    if (type === 'text') {
      const textLines =
        data[0].text_regions['textregion_Albatross_vol009of055-050-0']
          .text_lines;
      const textLineToUpdate = Object.values(textLines).find(
        (textLine) => textLine.id === id
      );
      if (textLineToUpdate) {
        textLineToUpdate.text = text;
      }
    } else if (type === 'table') {
      for (const regionId in data[0].table_regions) {
        const region = data[0].table_regions[regionId];
        for (const cellId in region.table_cells) {
          const cell = region.table_cells[cellId];
          for (const textLineId in cell.text_lines) {
            const textLine = cell.text_lines[textLineId];
            if (textLine.id === id) {
              textLine.text = text;
            }
          }
        }
      }
    }

    setData([...data]);
  };

  const toggleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <ZoomableComponent>
      <main
        className={`${inter.className} relative`}
        style={{ position: 'relative' }}
      >
        <Rectangles
          data={data}
          onClick={(text, id, type) => handleOpen(text, id, type)}
          toggleSelected={toggleSelected}
          isSelected={isSelected}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        {show && (
          <DialogRadix
            show={show}
            onOpenChange={handleClose}
            text={text}
            onMouseDown={handleDragStart}
            position={position}
            updatedText={updatedText}
            type={type}
            setType={setType}
            setUpdatedText={setUpdatedText}
            updateJsonText={updateJsonText}
            id={id}
            handleUpdateData={handleUpdateData}
          />
        )}
      </main>
    </ZoomableComponent>
  );
}
