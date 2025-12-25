import React from 'react';
import filtersData from '../filters.json';
import { FilterList } from './FilterList';

interface HomeFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const HomeFilters: React.FC<HomeFiltersProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <FilterList
      items={filtersData.homeFilters}
      activeValue={activeFilter}
      onSelect={onFilterChange}
      className="mb-8"
    />
  );
};

export default HomeFilters;
