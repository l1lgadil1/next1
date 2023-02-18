import React, { useReducer } from 'react';
import { TopPageProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';

import { Htag, P } from '../../components';
import { Tag } from '../../components';
import Card from '../../components/Card/Card';
import HhData from '../../components/HhData/HhData';
import Sort from '../../components/Sort/Sort';
import { TopLevelCategory } from '../../interfaces/toppage.interfase';
import Products from '../../components/Product/Products';
import Advantages from '../../components/Advantages/Advantages';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';

const TopPageComponents = ({ page, products, firstCategory }: TopPageProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  const setSort = (sort: SortEnum) => {
    dispatchSort({
      type: sort,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>

        {products ? (
          <Tag color="gray" size="md">
            {products.length}
          </Tag>
        ) : null}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div className="">
        {sortedProducts ? sortedProducts.map((p) => <Products key={p._id} product={p} />) : null}
      </div>
      <div className={styles.hhTitle}> 
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && page.hh ? <HhData {...page.hh} /> : null}
      {page.advantages && page.advantages.length > 0 ? (
        <>
          <Htag tag="h2">Преймущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      ) : null}
      {page.seoText && (
        <div className={styles.SEO} dangerouslySetInnerHTML={{ __html: page.seoText }}></div>
      )}
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};

export default TopPageComponents;
