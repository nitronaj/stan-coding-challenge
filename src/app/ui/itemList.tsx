import { getItems } from '@/app/lib/data';
import { type ProgramType, type Query } from '@/app/lib/types';

import Tile from './tile';

type SeriesListProps = {
  programType: ProgramType;
  query: Query;
};

export default async function ItemList({ programType, query }: SeriesListProps) {
  const series = await getItems(programType, query);

  const seriesList = series.map((item) => {
    const {
      title,
      images: {
        'Poster Art': { url },
      },
    } = item;

    return <Tile key={title} name={title} backgroundImage={url} />;
  });

  return <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">{seriesList}</div>;
}
