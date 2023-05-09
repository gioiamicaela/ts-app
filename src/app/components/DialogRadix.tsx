import { Dialog } from '@radix-ui/react-dialog';
import { DialogType } from '../data/dataServer';
import { TextRegionTextLine } from '../api/hello/route';

interface Props {
  show: boolean;
  onOpenChange: () => void;
  text: string;
  onMouseDown: React.MouseEventHandler<HTMLDivElement>;
  position: {
    x: string;
    y: string;
  };
  updatedText: string;
  setUpdatedText: (value: string) => void;
  updateJsonText: (id: string, text: string) => void;
  id: string;
  handleUpdateData: (id: string, text: string) => void;
}

export default function DialogRadix({
  show,
  onOpenChange,
  text,
  onMouseDown,
  position,
  updatedText,
  setUpdatedText,
  updateJsonText,
  id,
  handleUpdateData,
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
          <textarea
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button
            onClick={() => {
              onOpenChange();
              updateJsonText(id, updatedText);
              handleUpdateData(id, updatedText);
            }}
          >
            Save
          </button>
          <button onClick={onOpenChange}>Close</button>
        </Dialog>
      </div>
    </>
  );
}
