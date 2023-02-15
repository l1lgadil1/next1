import React from 'react';
import styles from './Product.module.css';
import { productProps } from './Product.props';
import Card from '../Card/Card';
import Rating from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';

const Products = ({ product, className, ...props }: productProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt="img" />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag color="ghost" key={c}>
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>price</div>
      <div className={styles.creditTitle}>credit</div>
      <div className={styles.rateTitle}>{product.reviewCount} отзывов</div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.features}>features</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div className="">Преймущества</div>
          <div className=""> {product.advantages}</div>
        </div>
        <div className={styles.disadvantages}>
          <div className="">Недостатки</div>
          <div className="">{product.disadvantages}</div>
        </div>
      </div>
      <div className={styles.hr}>
        <hr />
      </div>
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подрбонее</Button>
        <Button appearance="ghost" arrow={'right'}>
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};

export default Products;
