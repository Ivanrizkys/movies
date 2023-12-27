import { Language, Status, Type, TypeMovie } from "../enums";

export interface Movies {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: Type;
  language: Language;
  genres: string[];
  status: Status;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: Date | null;
  ended: Date | null;
  officialSite: null | string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: Network | null;
  dvdCountry: null;
  externals: Externals;
  image: Image | null;
  summary: null | string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Previousepisode;
  previousepisode?: Previousepisode;
}

export interface Previousepisode {
  href: string;
}

export interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: null | string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country | null;
  officialSite: null | string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average: number | null;
}

export interface Schedule {
  time: string;
  days: string[];
}

export interface MovieParams {
  id: string;
}
