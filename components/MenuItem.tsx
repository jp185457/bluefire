import Image from 'next/image';
import { itemObj } from '../lib/model/Item';
import pizza from '../lib/assets/pizza-example.jpeg';
import styles from '../styles/MenuItem.module.css';

function MenuItem({ shortDescription, longDescription, price }: itemObj) {
  return (
    <div className={styles.menu}>
      <Image className={styles.image} src={pizza} width={80} height={80} />
      <div className={styles.itemText}>
        <h3 className={styles.heading}>
          <span className={styles.name}>{shortDescription} </span>
          <span className={styles.price}>${price}</span>
        </h3>
        <p className={styles.desc}> {longDescription} </p>
      </div>
    </div>
  );
}
export default MenuItem;
