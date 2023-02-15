import React from 'react';
import { inputInterface } from './Input.props';
import styles from './Input.module.css';

const Input = ({ value, className, ...props }: inputInterface): JSX.Element => {
  return <input value={value} type="text" className={`${className} ${styles.input}`} {...props} />;
};

export default Input;
