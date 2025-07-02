import { create } from 'zustand';

export type ToastTypeT = 'success' | 'error' | 'warning' | 'info';

export type ToastT = {
  id: string;
  title: string;
  type: ToastTypeT;
  description?: string;
  closeDuration?: number;
};

type StoreProps = {
  toasts: ToastT[];
  addToast: (toast: ToastT) => void;
  removeToast: (id: string) => void;
};

export const useToastStore = create<StoreProps>((set) => ({
  toasts: [],
  addToast: (toast) => set((state) => ({ toasts: [...state.toasts, toast] })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
