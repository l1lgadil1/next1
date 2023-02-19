import React, { ForwardedRef, forwardRef } from 'react';
import styles from './TextArea.module.css';
import { TextAreaProps } from './TextArea.props';

const TextArea = forwardRef(
  (
    { className, error, ...props }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ): JSX.Element => {
    return (
      <div className={styles.textAreaWrapper}>
        <textarea
          ref={ref}
          className={`${className} ${styles.textarea} ${error && styles.error}`}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);

export default TextArea;
