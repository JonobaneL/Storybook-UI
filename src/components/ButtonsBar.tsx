'use client';

import { useToastStore } from '@/stores/toast';
import { getToastColor } from './Toast/utils';

const addToast = (
  type: 'success' | 'error' | 'info' | 'warning',
  title: string,
) => {
  useToastStore.getState().addToast({
    id: Date.now().toString(),
    type,
    title,
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
  });
};

const ButtonsBar: React.FC = () => {
  return (
    <div className="flex gap-2 p-4">
      <button
        onClick={() => addToast('success', 'This is a success toast!')}
        style={{ backgroundColor: getToastColor('success') }}
        className="rounded-xl px-4 py-2 text-white"
      >
        Success
      </button>
      <button
        style={{ backgroundColor: getToastColor('error') }}
        onClick={() => addToast('error', 'This is an error toast!')}
        className="rounded-xl px-4 py-2 text-white"
      >
        Error
      </button>
      <button
        style={{ backgroundColor: getToastColor('info') }}
        onClick={() => addToast('info', 'This is an info toast!')}
        className="rounded-xl px-4 py-2 text-white"
      >
        Info
      </button>
      <button
        style={{ backgroundColor: getToastColor('warning') }}
        onClick={() => addToast('warning', 'This is a warning toast!')}
        className="rounded-xl px-4 py-2 text-white"
      >
        Warning
      </button>
    </div>
  );
};

export default ButtonsBar;
