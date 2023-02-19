import React, { ForwardedRef, forwardRef } from 'react';
import { inputInterface } from './Input.props';
import styles from './Input.module.css';

const Input = forwardRef(
  (
    { className, error, ...props }: inputInterface,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          type="text"
          className={`${className} ${styles.input} ${error && styles.error}`}
          {...props}
        />
        {error && <span className={error && styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);

export default Input;
