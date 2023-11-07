import { type Query } from '../../lib/types';
import SeriesList from '../../ui/itemList';

export default function Series({ searchParams }: { searchParams: Query }) {
  return (
    <div className="mt-6 mb-24 flex flex-wrap mx-auto max-w-7xl px-6 container">
      <SeriesList programType="series" query={searchParams} />
    </div>
  );
}
