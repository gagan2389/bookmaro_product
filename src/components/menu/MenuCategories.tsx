
import React from 'react';

interface MenuCategoriesProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const MenuCategories: React.FC<MenuCategoriesProps> = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${activeCategory === category
                        ? 'bg-indigo-900 text-white shadow-md shadow-indigo-200'
                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default MenuCategories;
