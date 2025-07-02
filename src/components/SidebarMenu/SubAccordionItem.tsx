'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { NavItemT } from '@/types/NavItem';
import { ChevronDown } from 'lucide-react';
import NavLink from './NavLink';

interface SubAccordionItemProps {
  item: NavItemT;
  subIndex: number;
  isSubOpen: boolean;
  toggleSubAccordion: (index: number) => void;
}

const SubAccordionItem: React.FC<SubAccordionItemProps> = ({
  item,
  subIndex,
  isSubOpen,
  toggleSubAccordion,
}) => {
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <NavLink
          href={item.link}
          label={item.label}
          className="block flex-1 px-10 py-3 text-gray-700 hover:bg-gray-100"
        />
        {item.subItems && item.subItems.length > 0 && (
          <button onClick={() => toggleSubAccordion(subIndex)} className="p-3">
            <motion.span
              animate={{ rotate: isSubOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} />
            </motion.span>
          </button>
        )}
      </div>
      <AnimatePresence>
        {item.subItems && item.subItems.length > 0 && isSubOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div>
              {item.subItems.map((nestedSubItem) => (
                <NavLink
                  key={nestedSubItem.label}
                  href={nestedSubItem.link}
                  label={nestedSubItem.label}
                  className="block px-14 py-2 text-gray-600 hover:bg-gray-100"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubAccordionItem;
