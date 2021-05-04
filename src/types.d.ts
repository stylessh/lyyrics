interface ITheme {
  color: {
    main: string;
    second: string;
    third: string;
  };
}

type Song = {
  track: {
    key: string;

    layout: string;
    type: string;
    title: string;
    subtitle: string;

    url: string;

    share: any;
    hub: any;
    artist: any;

    images: {
      background: string;
      coverart: string;
      covertarthq: string;
      joecolor: string;
    };
  };
};

interface SongDefails {
  albumadamid: string;

  key: string;
  isrc: string;

  myshazam: any;

  layout: string;
  type: string;
  title: string;
  subtitle: string;

  url: string;
  urlparams: any;

  sections: any[];

  share: any;
  hub: any;
  artists: any;

  genres: {
    primary: string;
  };

  images: {
    background: string;
    coverart: string;
    covertarthq: string;
    joecolor: string;
  };
}

interface SearchResults {
  tracks: {
    hits: Song[];
  };

  artist: {
    hits: any[];
  };
}

interface SearchResultsContext extends SearchResults {
  search: (song: string) => Promise<void>;
}
