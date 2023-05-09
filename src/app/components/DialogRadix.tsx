import { Dialog } from '@radix-ui/react-dialog';

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
          zIndex: 9999,
          width: '500px',
        }}
        onMouseDown={onMouseDown}
      >
        <Dialog open={show} onOpenChange={onOpenChange}>
          <div className='bg-white rounded shadow-lg w-full '>
            <div className='border-b px-4 py-2 flex justify-between items-center'>
              <h2 className='font-semibold text-lg'>Update text</h2>
              <button onClick={onOpenChange} className='text-black'>
                X
              </button>
            </div>
            <div className='p-3'>
              <textarea
                className='w-full'
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
            </div>
            <div className='flex justify-end items-center w-100 border p-3 '>
              <button
                className='bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white mr-1'
                onClick={() => {
                  onOpenChange();
                  updateJsonText(id, updatedText);
                  handleUpdateData(id, updatedText);
                }}
              >
                Save
              </button>
              <button
                className='bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1'
                onClick={onOpenChange}
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}
