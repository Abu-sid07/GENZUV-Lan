"use client";

import { useState } from "react";
import { LayoutGroup, motion } from "motion/react";

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
}

export const ABOUT_GALLERY: readonly GalleryItem[] = [
  {
    id: 'marketing',
    title: 'Marketing',
    subtitle: 'Getting the right people to your business',
    image: "/About/ad.jpg",
    color: '#E5483A',
  },
  {
    id: 'enquiries',
    title: 'Enquiries',
    subtitle: 'Every message gets noticed',
    image: "/About/Message.jpg",
    color: '#6E93C8',
  },
  {
    id: 'automation',
    title: 'Automation',
    subtitle: 'Follow-ups that run themselves',
    image: "/About/AI%20Workflow%20Automation%20Tool%20s.jpg",
    color: '#0B0B0D',
  },
];

interface FluidExpandingGridProps {
  items?: readonly GalleryItem[];
  className?: string;
  id?: string;
}

export function FluidExpandingGrid({
  items = ABOUT_GALLERY,
  className = "",
  id = "fluid-gallery",
}: FluidExpandingGridProps) {
  const [layout, setLayout] = useState(() => {
    const ids = items.map((item) => item.id);
    return {
      row1: ids.slice(0, 2),
      row2: ids.slice(2, 4),
    };
  });

  const handleExpand = (selectedId: string) => {
    const selectedInRow1 = layout.row1.includes(selectedId);
    const selectedRow = selectedInRow1 ? layout.row1 : layout.row2;

    if (selectedRow.length === 1) return;

    const remainingIds = [...layout.row1, ...layout.row2].filter(
      (itemId) => itemId !== selectedId
    );

    setLayout(
      selectedInRow1
        ? { row1: [selectedId], row2: remainingIds }
        : { row1: remainingIds, row2: [selectedId] }
    );
  };

  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden py-12 ${className}`}
    >
      <div className="w-full max-w-2xl px-2 sm:px-6">
        <LayoutGroup id={id}>
          <motion.div
            layout
            className="grid h-[340px] w-full grid-cols-2 grid-rows-2 gap-4 sm:h-[540px] sm:gap-6"
          >
            {items.map((item) => {
              const isRow1 = layout.row1.includes(item.id);
              const rowItems = isRow1 ? layout.row1 : layout.row2;
              const isExpanded =
                rowItems.length === 1 && rowItems[0] === item.id;
              const gridRow = isRow1 ? 1 : 2;
              const gridColumn = isExpanded
                ? "1 / span 2"
                : String(rowItems.indexOf(item.id) + 1);

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  layout
                  layoutId={`${id}-${item.id}`}
                  onClick={() => handleExpand(item.id)}
                  aria-label={`${item.title}: ${item.subtitle}`}
                  aria-pressed={isExpanded}
                  style={{ gridRow, gridColumn }}
                  className={`group relative h-full w-full cursor-pointer overflow-hidden rounded-[24px] text-left text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 ${
                    isExpanded ? "z-20" : "z-10"
                  }`}
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 100,
                      damping: 25,
                    },
                  }}
                >
                  <motion.div
                    layoutId={`${id}-${item.id}-mask-wrapper`}
                    className="absolute inset-0 overflow-hidden"
                    style={{ backgroundColor: item.color }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      className={`absolute inset-0 h-full w-full object-cover transition-[filter,transform] duration-700 ${
                        isExpanded
                          ? "object-[center_35%]"
                          : "object-[center_50%] grayscale-[15%]"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 transition-colors duration-500 ${
                        isExpanded ? "bg-black/0" : "bg-black/20"
                      }`}
                    />
                  </motion.div>

                  <div className="absolute inset-0 z-10 flex select-none flex-col justify-end p-4 sm:p-6">
                    <h3 className="mb-1 text-xl font-medium tracking-tight sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="whitespace-nowrap text-xs font-normal text-white/80 sm:text-sm">
                      {item.subtitle}
                    </p>
                  </div>

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-t from-black/50 to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[24px] border border-white/10 transition-colors duration-500 group-hover:border-white/25"
                  />
                </motion.button>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
}

export default FluidExpandingGrid;
