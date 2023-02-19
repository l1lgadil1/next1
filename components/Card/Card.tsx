import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.props';

const Card = forwardRef(
  (
    { children, color = 'white', className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        className={`${styles.card} ${className} ${styles.blue && color == 'blue'}`}
        {...props}>
        {children}
      </div>
    );
  },
);

export default Card;
