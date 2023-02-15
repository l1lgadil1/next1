import React from 'react';
import { SortEnum } from './Sort.props';
import styles from './Sort.module.css';
import { SortInterface } from './Sort.props';

const Sort = ({ sort, setSort, className, ...props }: SortInterface): JSX.Element => {
  console.log(sort);
  return (
    <div className={`${styles.sort} ${className}`} {...props}>
      <div onClick={() => setSort(SortEnum.Rating)}>
        <span className={sort == SortEnum.Rating && styles.active}>
          <svg
            className={styles.sortIcon}
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="3" rx="1.5" fill="#7653FC" />
            <rect y="5" width="14" height="3" rx="1.5" fill="#7653FC" />
            <rect y="10" width="8" height="3" rx="1.5" fill="#7653FC" />
          </svg>
        </span>
        <span className={sort === SortEnum.Rating && styles.active}>По рейтингу</span>
      </div>
      <div onClick={() => setSort(SortEnum.Price)}>
        <span className={sort == SortEnum.Price && styles.active}>
          <svg
            className={styles.sortIcon}
            width="20"
            height="13"
            viewBox="0 0 20 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="3" rx="1.5" fill="#7653FC" />
            <rect y="5" width="14" height="3" rx="1.5" fill="#7653FC" />
            <rect y="10" width="8" height="3" rx="1.5" fill="#7653FC" />
          </svg>
        </span>
        <span className={sort == SortEnum.Price && styles.active}>По цене</span>
      </div>
    </div>
  );
};

export default Sort;
