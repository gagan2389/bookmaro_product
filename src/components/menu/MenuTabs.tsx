import { useNavigate, useLocation, useParams } from 'react-router-dom';

interface MenuTabsProps {
  tabs: string[];
}

const MenuTabs: React.FC<MenuTabsProps> = ({ tabs }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isTabActive = (tab: string) => {
    const currentPath = location.pathname.split('/').pop()?.toLowerCase();
    const tabLower = tab.toLowerCase();

    if (tabLower === 'menu' && (currentPath === 'menu' || currentPath === id)) return true;
    return currentPath === tabLower;
  };

  const handleTabClick = (tab: string) => {
    navigate(`/${id}/${tab.toLowerCase()}`);
  };

  return (
    <div className="flex justify-center overflow-x-auto gap-4 md:gap-8 scrollbar-hide">
      {tabs.map((tab) => {
        const isActive = isTabActive(tab);
        return (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`text-base font-medium whitespace-nowrap pb-1 border-b-2 transition-colors ${
              isActive
                ? 'border-indigo-900 text-indigo-900'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default MenuTabs;
