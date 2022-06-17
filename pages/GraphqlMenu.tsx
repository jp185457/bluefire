// import type { NextPage } from 'next';
import { InferGetStaticPropsType } from 'next';
// import { itemObj } from '../lib/model/Item';
import { gql } from '@apollo/client';
import MenuItem from '../components/MenuItem';
import style from '../styles/Menu.module.css';
import apolloClient from '../lib/GraphQL-Client';

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query getItems {
        items {
          itemId
          shortDescription
          longDescription
          price
        }
      }
    `,
  });
  return {
    props: { items: data.items },
  };
}

// eslint-disable-next-line react/function-component-definition
const GraphqlMenu = ({
  items,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(items);
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <h2 className={style.heading}>GraphQL Menu</h2>
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
};

export default GraphqlMenu;
