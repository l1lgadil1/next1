import React from 'react';
import { TopPageProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

import { Htag } from '../../components';
import { Tag } from '../../components';
import Card from '../../components/Card/Card';
import HhData from '../../components/HhData/HhData';
import { TopLevelCategory } from '../../interfaces/toppage.interfase';

const TopPageComponents = ({ page, products, firstCategory }: TopPageProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>

        {products ? (
          <Tag color="gray" size="md">
            {products.length}
          </Tag>
        ) : null}
        <span>Сортировка</span>
      </div>
      <div className="">
        {products ? products.map((p) => <div key={p._id}>{p.title}</div>) : null}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses ? <HhData {...page.hh} /> : null}
    </div>
  );
};

export default TopPageComponents;
