'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { NavItemT } from '@/types/NavItem';
import { ChevronDown } from 'lucide-react';
import NavLink from './NavLink';
import SubAccordionItem from './SubAccordionItem';

interface AccordionItemProps {
  item: NavItemT;
  index: number;
  isOpen: boolean;
  toggleAccordion: (index: number) => void;
  openSubIndex: number | null;
  toggleSubAccordion: (index: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  index,
  isOpen,
  toggleAccordion,
  openSubIndex,
  toggleSubAccordion,
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => toggleAccordion(index)}
        className="flex w-full items-center justify-between bg-white px-6 py-4 text-left hover:bg-gray-50 focus:outline-none"
      >
        <NavLink
          href={item.link}
          label={item.label}
          className="text-lg font-medium text-gray-900"
        />
        {item.subItems && item.subItems.length > 0 && (
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={20} />
          </motion.span>
        )}
      </button>
      <AnimatePresence>
        {item.subItems && item.subItems.length > 0 && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div>
              {item.subItems.map((subItem, subIndex) => (
                <SubAccordionItem
                  key={subItem.label}
                  item={subItem}
                  subIndex={subIndex}
                  isSubOpen={openSubIndex === subIndex}
                  toggleSubAccordion={toggleSubAccordion}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
