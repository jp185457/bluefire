import { itemObj } from '../lib/model/Item';
import styles from '../styles/MenuItem.module.css';

function MenuItem({ shortDescription, longDescription, price }: itemObj) {
  return (
    <div className={styles.menu}>
      <img
        className={styles.image}
        src="./pizza-example.jpeg"
        alt="example-pic"
      />
      <div className={styles.itemText}>
        <h3 className={styles.heading}>
          <span className={styles.name}>{shortDescription} </span>
          <span className={styles.price}>${price.toFixed(2)}</span>
        </h3>
        <p className={styles.desc}> {longDescription} </p>
      </div>
    </div>
  );
}
export default MenuItem;
