import { ToastTypeT } from '@/stores/toast';
import { Easing, Variants } from 'framer-motion';
import {
  CircleAlert,
  CircleCheck,
  CircleX,
  LucideIcon,
  TriangleAlert,
} from 'lucide-react';

export type AnimationType = 'fade' | 'slide';

const TOAST_ICONS: Record<ToastTypeT, LucideIcon> = {
  success: CircleCheck,
  error: CircleX,
  info: CircleAlert,
  warning: TriangleAlert,
};
const TOAST_COLORS: Record<ToastTypeT, string> = {
  success: '#34C759',
  error: '#FF4D4F',
  info: '#4A90E2',
  warning: '#FFA500',
};

export const getToastIcon = (type: ToastTypeT) => {
  return TOAST_ICONS[type];
};
export const getToastColor = (type: ToastTypeT) => {
  return TOAST_COLORS[type];
};

export const getAnimationConfig = (animationType: AnimationType) => {
  const baseTransition: {
    duration: number;
    ease: Easing;
    layout?: { duration: number };
  } = {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1],
    layout: { duration: 0.3 },
  };

  const variants: Record<AnimationType, Variants> = {
    fade: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1, transition: baseTransition },
      exit: { opacity: 0, scale: 0.95, transition: baseTransition },
    },
    slide: {
      initial: { x: 100, opacity: 0, scale: 0.9 },
      animate: { x: 0, opacity: 1, scale: 1, transition: baseTransition },
      exit: { x: 100, opacity: 0, scale: 0.9, transition: baseTransition },
    },
  };

  return {
    variants: variants[animationType] ?? variants.fade,
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
  } as const;
};
