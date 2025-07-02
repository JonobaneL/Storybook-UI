'use client';

import { useToastStore } from '@/stores/toast';
import Toast from '.';
import { AnimatePresence } from 'framer-motion';

type ContainerPropsT = {
  closable?: boolean;
  closeDuration?: number;
  animation?: 'fade' | 'slide';
};

const ToastContainer: React.FC<ContainerPropsT> = ({
  closable = false,
  closeDuration = 2000,
  animation = 'fade',
}) => {
  const toasts = useToastStore((state) => state.toasts);
  return (
    <div className="fixed right-4 bottom-4 z-50 flex max-h-[80vh] flex-col gap-4 overflow-auto">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            toast={toast}
            closable={closable}
            closeDuration={closeDuration}
            animationType={animation}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;
