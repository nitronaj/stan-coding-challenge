import { cache } from 'react';

import sampleData from '@/feed/sample.json';

import { type Entries, type Program, type ProgramType, type Query } from './types';

const ITEMS_PER_PAGE = 21;

export const revalidate = 3600; // revalidate the data at most every hour

const groupBy = function groupBy(
  items: Program[],
  callbackfn: (program: Program) => ProgramType
): Map<ProgramType, Program[]> {
  return items.reduce((map, item) => {
    const key: ProgramType = callbackfn(item);

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)?.push(item);

    return map;
  }, new Map<ProgramType, Program[]>());
};

export const getCacheItems = cache(async (programType: ProgramType) => {
  const data: Entries = (await Promise.resolve(sampleData)).entries;

  const items = groupBy(data, ({ programType }: Program) => programType as ProgramType);
  return items.get(programType) ?? [];
});

function sortItems(items: Program[], sortField: 'title', sortBy = 'asc') {
  items.sort((itemA, itemB) => {
    if (sortBy === 'asc') {
      return itemA[sortField].localeCompare(itemB[sortField]);
    } else {
      return itemB[sortField].localeCompare(itemA[sortField]);
    }
  });
}

export async function getItems(programType: ProgramType, query: Query) {
  const { releaseYear, page = 1, sort = 'title', order = 'asc' } = query;

  const allItems = await getCacheItems(programType);

  const filterItems = allItems.filter((item) => (releaseYear ? item.releaseYear >= releaseYear : true));
  const items = filterItems.slice(0, page * ITEMS_PER_PAGE);

  sortItems(items, sort, order);

  return items;
}
