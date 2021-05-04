import { forwardRef } from "react";
import { Link } from "wouter";

import { StyledSearchResults, SongItem, SongImage } from "./styles";

type SearchResultsProps = {
  tracks: Song[];
};

const SearchResults = forwardRef<HTMLUListElement, SearchResultsProps>(
  ({ tracks }, ref) => {
    return (
      <StyledSearchResults ref={ref}>
        {tracks.map((song: Song) => (
          <SongItem key={song.track.key}>
            <Link to={`/song/${song.track.key}`}>
              <SongImage
                src={song.track.images.coverart}
                alt={song.track.title}
              />

              <h3>
                {song.track.title} - {song.track.subtitle}
              </h3>
            </Link>
          </SongItem>
        ))}
      </StyledSearchResults>
    );
  }
);

export default SearchResults;
