import React from 'react';

interface MenuTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const MenuTabs: React.FC<MenuTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center overflow-x-auto gap-4 md:gap-8 scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`text-base font-medium whitespace-nowrap pb-1 border-b-2 transition-colors ${
            activeTab === tab
              ? 'border-indigo-900 text-indigo-900'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default MenuTabs;
