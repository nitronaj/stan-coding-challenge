import { type Query } from '@/app/lib/types';
import SeriesList from '@/app/ui/itemList';

export default function Movies({ searchParams }: { searchParams: Query }) {
  return (
    <div className="mt-6 mb-24 flex flex-wrap grow   mx-auto max-w-7xl px-6 container">
      <SeriesList programType="movie" query={searchParams} />
    </div>
  );
}
