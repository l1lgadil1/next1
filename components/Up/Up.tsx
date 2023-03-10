import React from 'react';
import styles from './Up.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useScrollY } from '../../hooks/useScrollY';

const Up: React.FC = () => {
  const controls = useAnimation();
  const y = useScrollY();

  React.useEffect(() => {
    controls.start({
      opacity: y / document.body.scrollHeight,
    });
  }, [y, controls]);

  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <motion.button
      animate={controls}
      onClick={onScrollTop}
      className={styles.up}
      initial={{ opacity: 0 }}>
      <span>
        <svg
          width="21"
          height="13"
          viewBox="0 0 21 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect
            y="9.89954"
            width="14"
            height="3"
            rx="1.5"
            transform="rotate(-45 0 9.89954)"
            fill="white"
          />
          <path
            d="M9.06069 1.23228C9.64647 0.646496 10.5962 0.646496 11.182 1.23228L18.9602 9.01046C19.546 9.59624 19.546 10.546 18.9602 11.1318C18.3744 11.7176 17.4246 11.7176 16.8389 11.1318L9.06069 3.3536C8.4749 2.76782 8.4749 1.81807 9.06069 1.23228Z"
            fill="white"
          />
        </svg>
      </span>
    </motion.button>
  );
};

export default Up;
