import { FC, useEffect, useState } from "react";
import { getSongDetails } from "api/song";

import Loading from "components/Loading";

import {
  Container,
  SongCover,
  SongInfo,
  HeaderInfo,
  SongLyrics,
} from "./styles";

type SongProps = {
  id: string;
};

const Song: FC<SongProps> = ({ id }) => {
  const [song, setSong] = useState<SongDefails | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await getSongDetails(id);

        setSong(res);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  return song ? (
    <Container>
      <SongCover>
        <img src={song.images.background} alt={song.title} />
      </SongCover>

      <SongInfo>
        <HeaderInfo>
          <h1 className="song-title">{song.title}</h1>
          <p className="song-subtitle"> - {song.subtitle}</p>
        </HeaderInfo>

        <SongLyrics>
          {song.sections
            .filter((song) => song.type === "LYRICS")[0]
            .text.map((line: string, i: number) =>
              line.length > 0 ? (
                <span key={i}>{line}</span>
              ) : (
                <div key={i} className="divider"></div>
              )
            )}
        </SongLyrics>
      </SongInfo>
    </Container>
  ) : (
    <Loading />
  );
};

export default Song;
