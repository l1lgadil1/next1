import React from 'react';
import { withLayout } from '../layout/Layout';

const search = ({ params }): JSX.Element => {
  console.log(params);
  return <>search</>;
};

export default withLayout(search);