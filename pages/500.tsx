import React from 'react';
import { withLayout } from '../layout/Layout';
import { Htag } from '../components';

const Error500 = () => {
  return (
    <>
      <Htag tag="h1"> Ошибка 500</Htag>
    </>
  );
};

export default withLayout(Error500);
