import React from 'react';
import styles from './Divider.module.css';
import { IDivider } from './Divider.props';

const Divider: React.FC<IDivider> = ({ className, ...props }) => {
  return <hr className={`${styles.hr} ${className}`} {...props} />;
};

export default Divider;
