import { useEffect, useState, useRef } from "react";

import SearchResults from "components/SearchResults";

import useOnClickOutside from "hooks/useClickOutside";
import useDebounce from "hooks/useDebounce";
import useSearch from "hooks/useSearch";

import {
  HomeContent,
  StyledHome,
  SearchBox,
  SearchInput,
  SearchButton,
} from "./styles";

const Home = () => {
  const { tracks, artist, search } = useSearch();

  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebounce<string>(query, 250);
  const [results, setResults] = useState<boolean>(false);

  const resultsRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    async function getData() {
      await search(debouncedQuery);
    }

    if (debouncedQuery.length > 0) {
      getData();

      setResults(true);
    }
  }, [debouncedQuery]);

  const handleClickOutside = () => {
    setResults(false);
  };

  useOnClickOutside(resultsRef, handleClickOutside);

  return (
    <StyledHome>
      <HomeContent className={results ? "has-results" : ""}>
        <h1 className="title">Find every song's lyrics, instant.</h1>
        <p className="sub">
          Find every song in any language, with autoscroll option if you are
          playing.
        </p>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="Search any song..."
            value={query}
            onFocus={() => setResults(true)}
            onChange={(e) => setQuery(e.target.value)}
          ></SearchInput>

          <SearchButton>search</SearchButton>
        </SearchBox>

        {results && tracks ? (
          <SearchResults
            ref={resultsRef}
            tracks={tracks.hits}
            // artist={artist.hits}
          />
        ) : null}
      </HomeContent>
    </StyledHome>
  );
};

export default Home;
