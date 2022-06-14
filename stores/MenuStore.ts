import create from 'zustand';
import { item } from '../lib/model/Item';
// Currently referencing: https://javascript.plainenglish.io/using-zustand-and-typescript-to-make-a-to-do-list-in-react-fe4a41e76748
// and https://www.youtube.com/watch?v=sqTPGMipjHk

const addItems = (
  items: item[],
  price: number,
  id: number,
  name: string,
  description: string
): item[] => [...items, { id, name, price, description }];

const removeItems = (items: item[], id: number): item[] =>
  items.filter((item1) => item1.id !== id);

type Store = {
  items: item[];
  addItems: (items: item[]) => void;
  removeItems: (items: item[]) => void;
};

const useStore = create<Store>((set) => ({
  items: [],
  addItems: (items: item[]) => {
    set((state) => ({
      ...state,
      items: addItems(state.items),
    }));
  },
  removeItems: (items: item[]) => {
    set((state) => ({
      items: [...state.items, item],
    }));
  },
}));

export default useStore;
