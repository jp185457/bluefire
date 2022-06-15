// import type { NextPage } from 'next';
import { InferGetStaticPropsType } from 'next';
// import { itemObj } from '../lib/model/Item';
import MenuItem from '../components/MenuItem';

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
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(items);
  return (
    <div>
      <h1>Rest Menu</h1>
      {items.map((item) => (
        <div key={item.itemId}>
          <MenuItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default RestMenu;
