'use client';

import { useState } from 'react';
import { NavItemT } from '@/types/NavItem';
import AccordionItem from './AccordionItem';

interface AccordionProps {
  items: NavItemT[];
}

const AccordionsList: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenSubIndex(null);
  };

  const toggleSubAccordion = (index: number) => {
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

  return (
    <div className="mx-auto w-full max-w-md">
      {items.map((item, index) => (
        <AccordionItem
          key={item.label}
          item={item}
          index={index}
          isOpen={openIndex === index}
          toggleAccordion={toggleAccordion}
          openSubIndex={openSubIndex}
          toggleSubAccordion={toggleSubAccordion}
        />
      ))}
    </div>
  );
};

export default AccordionsList;
