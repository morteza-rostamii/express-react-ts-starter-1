import { faker } from '@faker-js/faker';
import api from 'apis/api';
import { TCategory } from 'types/types';
//import { DASHBOARD_ROUTE, USER } from 'consts/const';
//import { redirect } from 'next/navigation';
import { create } from 'zustand'

interface TUseCategoriesStore {
  categories: TCategory[],
  getCategoriesAct: () => void,
}

const useCategoriesStore = create<TUseCategoriesStore>((set:any, get:any) => ({
  categories: [],

  getCategoriesAct: () => {

    const cats = Array.from(new Array(10)).map((el:any) => {
      return {
        id: faker.string.uuid(),
        name: faker.commerce.product(),
        slug: faker.commerce.product(),
        image: faker.image.urlLoremFlickr({category: 'cloths'}),
        description: faker.lorem.words({min: 50, max: 100}),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });

    set((s:any) => ({
      ...s,
      categories: cats,
    }));
  },
}))

const unsub = useCategoriesStore.subscribe((state) => console.log('categoriesStore updated**!', state));

export default useCategoriesStore