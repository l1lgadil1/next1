import React from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.props';

const Card = ({ children, color = 'white', className, ...props }: CardProps): JSX.Element => {
  return (
    <div className={`${styles.card} ${className} ${styles.blue && color == 'blue'}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
