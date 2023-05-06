import { Dialog } from '@radix-ui/react-dialog';

interface DialogProps {
  open: boolean;
  onOpenChange: () => void;
}

export default function DialogRadix({
  open: show,
  onOpenChange: onClose,
}: DialogProps) {
  return (
    <>
      <Dialog
        open={show}
        onOpenChange={onClose}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999 }}
      >
        <h2>Título del diálogo</h2>
        <p>Contenido del diálogo...</p>
        <button onClick={onClose}>Cerrar diálogo</button>
      </Dialog>
    </>
  );
}
