import Image from 'next/image';
import { itemObj } from '../lib/model/Item';
import pizza from '../lib/assets/pizza-example.jpeg';
import styles from '../styles/MenuItem.module.css';

function MenuItem({ shortDescription, longDescription, price }: itemObj) {
  return (
    <div>
      <div className={styles.menu}>
        <Image src={pizza} width={75} height={75} />
        <div className={styles.itemText}>
          <h3 className={styles.name}>
            <span>{shortDescription} </span>
            <span>${price}</span>
          </h3>
        </div>
        <p className={styles.desc}> {longDescription} </p>
      </div>
    </div>
  );
}
export default MenuItem;
