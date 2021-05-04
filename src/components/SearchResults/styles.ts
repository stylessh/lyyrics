import styled from "styled-components";

const StyledSearchResults = styled.ul`
  position: absolute;

  width: 100%;

  margin-top: 2em;
  background: ${({ theme }) => theme.color.main};

  max-height: 250px;

  border-radius: 5px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: ${({ theme }) => theme.color.second};
  }
`;

const SongItem = styled.li`
  padding: 1em;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
  }

  h3 {
    font-family: "Montserrat";
    font-size: 1.2em;
    margin-left: 1em;

    color: ${({ theme }) => theme.color.second};
  }
`;

const SongImage = styled.img`
  height: 5em;
  width: 5em;

  border-radius: 5px;

  margin: 0.5em 0;

  object-fit: cover;
`;

export { StyledSearchResults, SongItem, SongImage };
