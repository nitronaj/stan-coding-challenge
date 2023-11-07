export type TTile = {
  type?: 'SERIES' | 'MOVIES';
  name: string;
  link?: string;
  query?: Query;
  background: {
    url: string;
    size?: string;
  };
};

export type PosterArt = {
  url: string;
  width: number;
  height: number;
};

export type Images = {
  'Poster Art': PosterArt;
};

export type ProgramType = 'series' | 'movie';

export type Program = {
  title: string;
  description: string;
  programType: string;
  images: Images;
  releaseYear: number;
};

export type Entries = Program[];

export type Query = {
  releaseYear?: number;
  page: number;
  sort: 'title';
  order: 'asc' | 'desc';
};
