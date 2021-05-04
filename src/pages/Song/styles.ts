import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: 50% 1fr;

  width: 100%;
  height: 100vh;

  overflow: hidden;

  background: ${({ theme }) => theme.color.second};
`;

const SongCover = styled.article`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const SongInfo = styled.article`
  padding: 2em 3em;

  overflow-y: scroll;
`;

const HeaderInfo = styled.div`
  color: ${({ theme }) => theme.color.main};

  .song-title {
    font-size: 3em;
  }

  .song-subtitle {
    font-weight: 400;
  }
`;

const SongLyrics = styled.div`
  margin-top: 2em;

  span {
    display: block;
    margin: 0.5em 0;
    font-family: "Montserrat";

    font-weight: 300;

    color: ${({ theme }) => theme.color.main};
  }

  .divider {
    user-select: none;
    height: 1em;
  }
`;

export { Container, SongCover, SongInfo, HeaderInfo, SongLyrics };
