import { createContext, FC, useEffect, useState } from "react";

import { search as searchSong } from "../api/search";

const initial = {
  tracks: {
    hits: [],
  },
  artist: {
    hits: [],
  },

  search: () => null,
};

export const SearchContext = createContext(
  (initial as unknown) as SearchResultsContext
);

const SearchProvider: FC = ({ children }) => {
  const [tracks, setTracks] = useState<any>(null);
  const [artist, setArtist] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const search = async (song: string) => {
    const results: SearchResults = await searchSong(song);
    

    setTracks(results.tracks);
    setArtist(results.artist);
  };

  const value = {
    tracks,
    artist,
    search,
  };

  return (
    <SearchContext.Provider value={value}>
      {!loading && children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
