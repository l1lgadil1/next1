import axios from 'axios';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { API } from '../../helpers/api';
import { Button } from '../Button/Button';
import Input from '../Input/Input';
import Rating from '../Rating/Rating';
import TextArea from '../TextArea/TextArea';
import { ReviewFormInterface } from './ReviewForm.interface';
import styles from './ReviewForm.module.css';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.props';
import { motion } from 'framer-motion';

const ReviewForm: React.FC<IReviewForm> = ({ productId, className, ...props }) => {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [error, setIsError] = React.useState<string>();

  const variants = {
    visible: {
      opacity: 1,
      height: 'auto',
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormInterface>();

  const onSubmit = async (formData: ReviewFormInterface) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {
        ...formData,
        productId,
      });
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError('Что-то пошло не так');
      }
    } catch (error) {
      setIsError('Что-то пошло не так, попробуйте обновить страницу.');
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className={`${className} ${styles.reviewform} `} {...props}>
        <Input
          className={styles.name}
          {...register('name', {
            required: {
              value: true,
              message: 'Заполните имя',
            },
          })}
          error={errors.name}
          placeholder="Имя"
        />
        <Input
          {...register('title', {
            required: {
              value: true,
              message: 'Заполните заголовок',
            },
          })}
          error={errors.title}
          placeholder="Заголовок"
          className={styles.title}
        />
        <div className={styles.rating}>
          <span
            style={{
              color: errors?.rating && '#FC836D',
            }}>
            Оценка
          </span>
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: 'Укажите рейтинг',
              },
            }}
            name="rating"
            render={({ field }) => (
              <Rating
                error={errors?.rating}
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
              />
            )}
          />
        </div>
        <TextArea
          {...register('description', {
            required: {
              value: true,
              message: 'Заполните описание',
            },
          })}
          error={errors?.description}
          placeholder="Текст отзыва"
          className={styles.description}
        />
        <div className={styles.submit}>
          <Button type="submit" appearance="primary">
            Отправить
          </Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={styles.success}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div className="">Спасибо, ваш отзыв будет опубликован после проверки!</div>
          <span className={styles.close} onClick={() => setIsSuccess(false)}>
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
                strokeWidth="3"
              />
              <line
                x1="1.93934"
                y1="10.4246"
                x2="10.4246"
                y2="1.93935"
                stroke="#1CC37E"
                strokeWidth="3"
              />
            </svg>
          </span>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          {error}
          <span className={styles.close} onClick={() => setIsError(undefined)}>
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
                strokeWidth="3"
              />
              <line
                x1="1.93934"
                y1="10.4246"
                x2="10.4246"
                y2="1.93935"
                stroke="#1CC37E"
                strokeWidth="3"
              />
            </svg>
          </span>
        </div>
      )}
    </form>
  );
};

export default ReviewForm;
