import React from 'react';
import { Button } from '../Button/Button';
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import TextArea from '../TextArea/TextArea';
import styles from './ReviewForm.module.css';
import { IReviewForm } from './ReviewForm.props';

const ReviewForm: React.FC<IReviewForm> = ({ productId, className, ...props }) => {
  return (
    <>
      <div className={`${className} ${styles.reviewform} `} {...props}>
        <Input placeholder="Имя" />
        <Input placeholder="Заголовок" className={styles.title} />
        <div className={styles.rating}>
          <span>Оценка</span>
          <Rating rating={0} />
        </div>
        <TextArea placeholder="Текст отзыва" className={styles.description} />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div className="">Спасибо, ваш отзыв будет опубликован после проверки!</div>
        <span className={styles.close}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
              x1="2.06066"
              y1="1.93934"
              x2="10.5459"
              y2="10.4246"
              stroke="#1CC37E"
              stroke-width="3"
            />
            <line
              x1="1.93934"
              y1="10.4246"
              x2="10.4246"
              y2="1.93935"
              stroke="#1CC37E"
              stroke-width="3"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default ReviewForm;
