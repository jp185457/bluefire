// import type { NextPage } from 'next';
import { InferGetStaticPropsType } from 'next';
// import { itemObj } from '../lib/model/Item';
import MenuItem from '../components/MenuItem';
import style from '../styles/Menu.module.css';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://my-json-server.typicode.com/jp185457/sample-menu-data/pageContent'
  );
  const data = await res.json();

  return {
    props: { items: data },
  };
};

// eslint-disable-next-line react/function-component-definition
const RestMenu = ({
  items,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className={style.container}>
    <div className={style.menu}>
      <h2 className={style.heading}>REST Menu</h2>
      <div className={style.group}>
        {items.map((item) => (
          <div key={item.itemId}>
            <MenuItem {...item} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default RestMenu;
