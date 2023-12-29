'use client';
import { useEffect, useState } from 'react';
import styles from './FilterTab.module.css';
import { Filters } from '../constants';
import { useAtom } from 'jotai';
import { filterAtom } from './state';

function FilterTab() {
  const [selected, setSelected] = useAtom(filterAtom);
  useEffect(() => {
    if (selected.length === 0) {
      setSelected(['All']);
    }
  }, [selected, setSelected]);
  return (
    <div className="flex justify-center py-8">
      <div className={styles['filter-group'] + ' mx-8 flex-wrap gap-1'}>
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
