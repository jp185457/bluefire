import create from 'zustand';

// Currently referencing: https://javascript.plainenglish.io/using-zustand-and-typescript-to-make-a-to-do-list-in-react-fe4a41e76748
// and https://www.youtube.com/watch?v=sqTPGMipjHk

// Current data format: https://jsonformatter.org/e67259 ideally wanted a id but couldn't find one

export interface item {
  price: number;
  name: string;
  description: string;
}
const addItems = (
  items: item[],
  price: number,
  name: string,
  description: string
): item[] => [...items, { name, price, description }];

const removeItems = (items: item[], name: string): item[] =>
  items.filter((item) => item.name !== name);

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
      items: addItems(state.items)
    }));
  },
  removeItems: (items: item[]) => {
    set((state) => ({
      items: [...state.items, item],
    }));
  },
}));

export default useStore;
