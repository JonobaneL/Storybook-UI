'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useClickOutside } from '@/hooks/useOutsideClick';
import { NAV_LIST } from '@/data/mockNavList';
import AccordionsList from './AccordionsList';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useClickOutside(sidebarRef, () => setIsOpen(false));

  const sidebarVariants: Variants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const backdropVariants = {
    open: { opacity: 0.5 },
    closed: { opacity: 0 },
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="bg-primary fixed top-4 right-4 z-50 cursor-pointer rounded-full p-1.5 text-white focus:outline-none"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Menu size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-30 m-0 bg-black"
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              ref={sidebarRef}
              className="fixed top-0 right-0 z-40 flex h-full w-[22rem] flex-col overflow-auto bg-white p-4 shadow-lg"
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mb-2 flex justify-end">
                <button
                  className="rounded-xl p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1">
                <AccordionsList items={NAV_LIST} />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
