export interface IStory {
  section: string;
  subsection: string;
  title: string;
  url: string;
  uri: string;
  byline: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  multimedia: IMultimedia[];
  geo_facet: string[];
}

interface IMultimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  caption: string;
  copyright: string;
}

export interface IStore {
  storiesReducer: IStoriesReducer;
}
interface IStoriesReducer {
  section: string;
  stories: any;
}
