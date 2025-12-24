
import React, { useRef } from 'react';

interface FilterItem {
    id: string;
    label: string;
    value: string;
}

interface FilterListProps {
    items: FilterItem[];
    activeValue: string;
    onSelect: (value: string) => void;
    className?: string;
    extraButton?: React.ReactNode;
}

export const FilterList: React.FC<FilterListProps> = ({
    items,
    activeValue,
    onSelect,
    className = '',
    extraButton
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div className={`w-full flex justify-center ${className}`}>
            <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto px-4 py-4 w-full max-w-fit no-scrollbar items-center justify-start sm:justify-center"
            >
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onSelect(item.value)}
                        className={`
                        px-6 py-2 !rounded-full whitespace-nowrap text-sm font-medium transition-all duration-200
                        ${activeValue === item.value
                                ? 'bg-indigo-900 text-white shadow-md transform scale-105'
                                : 'bg-gray-100 text-indigo-900 hover:bg-gray-200 border-transparent border'
                            }
                    `}
                    >
                        {item.label}
                    </button>
                ))}
                {extraButton && (
                    <>
                        <div className="w-px h-6 bg-gray-300 mx-1 flex-shrink-0" />
                        {extraButton}
                    </>
                )}
            </div>
        </div>
    );
};
