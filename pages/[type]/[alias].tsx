import React from 'react';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interfase';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { TopLevelCategory, TopPageModel } from '../../interfaces/toppage.interfase';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.inreface';
import { firstLevelMenu } from '../../helpers/helpers';
import TopPageComponents from '../../page-components/TopPageComponent/TopPageComponents';

const TopPage = ({ firstCategory, page, products }: TopPageProps): JSX.Element => {
  return (
    <>
      <TopPageComponents firstCategory={firstCategory} page={page} products={products} />
    </>
  );
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      {
        firstCategory: m.id,
      },
    );
    paths = paths.concat(menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}/`)));
  }
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);

  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      {
        firstCategory: firstCategoryItem.id,
      },
    );

    if (menu.length == 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<TopPageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
    );

    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
      {
        category: page.category,
        limit: 10,
      },
    );

    return {
      props: {
        page,
        firstCategory: firstCategoryItem.id,
        products,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

interface TopPageProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
