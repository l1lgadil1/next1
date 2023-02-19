import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { Htag } from '../components';
import { Button } from '../components';
import { P } from '../components';
import { Tag } from '../components';
import Rating from '../components/Rating/Rating';
import Input from '../components/Input/Input';
import TextArea from '../components/TextArea/TextArea';
import { withLayout } from '../layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interfase';
import { API } from '../helpers/api';

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = React.useState<number>(4);

  return (
    <>
      <Htag tag="h1">Unique class</Htag>
      <Button appearance="primary" arrow="down">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <P size="sm">Text</P>
      <Tag size="sm" color="green">
        text
      </Tag>
      <Tag size="md" color="gray">
        text
      </Tag>
      <Tag size="md" color="primary">
        text
      </Tag>
      <Rating isEditable={true} rating={rating} setRating={setRating} />
      <Input placeholder="123" />
      <TextArea placeholder="123" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage, {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
