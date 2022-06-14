// import type { NextPage } from 'next';
import { InferGetStaticPropsType } from 'next';
import { item } from '../lib/model/Item';

export const getStaticProps = async () => {
  const res = await fetch(
    'https://my-json-server.typicode.com/jp185457/sample-menu-data/pageContent'
  );
  const data = await res.json();

  return {
    props: { items: data },
  };
};

function RestMenu({ items }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Rest Menu</h1>
      {items.map((item1: item) => (
        <div key={item1.id}>
          <li>
            <h3>{item1.price}</h3>
          </li>
        </div>
      ))}
    </div>
  );
}

export default RestMenu;
