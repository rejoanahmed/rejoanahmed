'use client';
import { useState } from 'react';
import styles from './FilterTab.module.css';
import { Filters } from '../constants';

function FilterTab() {
  const [selected, setSelected] = useState<(typeof Filters)[number][]>(['All']);
  return (
    <div className="flex justify-center py-8">
      <div className={styles['filter-group']}>
        {Filters.map((filter, index) => (
          <button
            key={index}
            className={`${styles['filter']} ${
              selected.includes(filter) ? styles['selected'] : ''
            }`}
            onClick={() => {
              if (filter === 'All') {
                setSelected(['All']);
              } else {
                const newSelected = selected.includes('All')
                  ? []
                  : [...selected];
                if (newSelected.includes(filter)) {
                  newSelected.splice(newSelected.indexOf(filter), 1);
                } else {
                  newSelected.push(filter);
                }
                setSelected(newSelected);
              }
            }}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterTab;
