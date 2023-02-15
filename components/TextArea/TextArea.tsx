import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({ className, ...props }) => {
  return <textarea className={` ${className} ${styles.textarea} `} {...props} />;
};

export default TextArea;
