import React, { ForwardedRef, forwardRef } from 'react';
import styles from './Product.module.css';
import { productProps } from './Product.props';
import Card from '../Card/Card';
import Rating from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { devlOfNum, priceRu } from '../../helpers/helpers';
import Divider from '../Divider/Divider';
import Image from 'next/image';
import Review from '../Review/Review';
import ReviewForm from '../ReviewForm/ReviewForm';
import { API } from '../../helpers/api';
import { motion } from 'framer-motion';

const Products = motion(
  forwardRef(
    (
      { product, className, ...props }: productProps,
      ref: ForwardedRef<HTMLDivElement>,
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = React.useState<boolean>(false);

      const productRef = React.useRef<HTMLDivElement>(null);

      const onScrollToReview = () => {
        setIsReviewOpened(true);
        productRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };

      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <Image src={API.API + product.image} alt={product.title} width={70} height={70} />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              {priceRu(product.price)}
              {product.oldPrice && (
                <Tag className={styles.oldPrice} color="green">
                  {priceRu(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              {priceRu(product.credit)}/<span className={styles.month}>месяц</span>
            </div>
            <div className={styles.rating}>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((c) => (
                <Tag color="ghost" key={c} className={styles.category}>
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>
              <a className={styles.reviewLink} onClick={onScrollToReview}>
                <span> {product.reviewCount}</span>
                <span>{devlOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</span>
              </a>
            </div>
            <div className={styles.hr}>
              <Divider className={styles.hr} />
            </div>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.features}>
              {product.characteristics.map((c) => (
                <div className={styles.characteristics} key={c.name}>
                  <span className={styles.characteristicName}>{c.name}</span>
                  <span className={styles.characteristicDots}></span>
                  <span className={styles.characteristicsValue}>{c.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.advBlock}>
              {product.advantages && (
                <div className={styles.advantages}>
                  <div className={styles.advTitle}>Преймущества</div>
                  <div className=""> {product.advantages}</div>
                </div>
              )}
              {product.disadvantages && (
                <div className={styles.disadvantages}>
                  <div className={styles.advTitle}>Недостатки</div>
                  <div className="">{product.disadvantages}</div>
                </div>
              )}
            </div>
            <Divider className={`${styles.hr} ${styles.hr2}`} />
            <div className={styles.actions}>
              <Button appearance="primary">Узнать подрбонее</Button>
              <Button
                appearance="ghost"
                arrow={!isReviewOpened && 'right'}
                onClick={() => setIsReviewOpened((prev) => !prev)}
                className={styles.reviewButton}>
                Читать отзывы
              </Button>
            </div>
          </Card>
          <Card
            ref={productRef}
            color="blue"
            className={`${styles.reviews} ${isReviewOpened && styles.opened} ${
              !isReviewOpened && styles.closed
            }`}>
            {product.reviews.map((r) => (
              <div ref={productRef}>
                <Review review={r} key={r._id} />
                <Divider />
              </div>
            ))}
            <ReviewForm productId={product._id} />
          </Card>
        </div>
      );
    },
  ),
);

export default Products;
