import { ToastT, useToastStore } from '@/stores/toast';
import { getAnimationConfig, getToastColor, getToastIcon } from './utils';
import { LucideX } from 'lucide-react';
import { useEffect } from 'react';
import { cn } from '@/lib/classMerge';
import ToastIndicator from './ToastIndicator';
import { motion } from 'framer-motion';

type ToastPropsT = {
  toast: ToastT;
  closable: boolean;
  closeDuration: number;
  animationType: 'fade' | 'slide';
  className?: string;
};

const Toast: React.FC<ToastPropsT> = ({
  toast,
  closable,
  closeDuration,
  animationType,
  className,
}) => {
  const Icon = getToastIcon(toast.type);
  const color = getToastColor(toast.type);
  const animation = getAnimationConfig(animationType);
  const removeToast = useToastStore((state) => state.removeToast);

  useEffect(() => {
    setTimeout(() => {
      removeToast(toast.id);
    }, toast.closeDuration ?? closeDuration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <motion.div
      variants={animation.variants}
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      className={cn(
        'bg-background relative flex w-[22rem] flex-[0_0_auto] items-center gap-3 overflow-hidden rounded-xl border border-gray-200 p-3 pr-6 shadow-md',
        className,
      )}
    >
      <Icon size={24} color={color} className="flex-[0_0_auto]" />
      <div>
        <h3>{toast.title}</h3>
        {toast.description && (
          <p className="text-sm text-gray-600">{toast.description}</p>
        )}
      </div>
      <ToastIndicator color={color} closeDuration={closeDuration} />

      {closable && (
        <button
          type="button"
          aria-label="close"
          onClick={() => removeToast(toast.id)}
          className="absolute top-3 right-3 cursor-pointer"
        >
          <LucideX size={16} />
        </button>
      )}
    </motion.div>
  );
};

export default Toast;
