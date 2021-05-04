import styled from "styled-components";

const StyledHome = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: url("/assets/oasis-band-wallpaper.jpg");
  background-size: cover;

  overflow-y: hidden;

  &::after {
    content: "";
    display: block;
    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.4);

    position: absolute;
    left: 0;
    top: 0;
  }
`;

const HomeContent = styled.article`
  position: relative;
  text-align: center;
  z-index: 5;

  transition: all 0.2s ease-in-out;

  &.has-results {
    transform: translateY(-4em);
  }

  .title {
    font-size: 3em;
    margin-bottom: 0.5em;

    color: ${({ theme }) => theme.color.main};
  }

  .sub {
    font-weight: 500;
    color: ${({ theme }) => theme.color.main};
  }
`;

const SearchBox = styled.article`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.main};

  padding-left: 1em;

  margin-top: 2em;

  border-radius: 5px;
`;

const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  background: none;
  border: none;

  color: ${({ theme }) => theme.color.second};
  font-weight: 700;
`;

const SearchButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.second};
  color: ${({ theme }) => theme.color.main};
  padding: 1.5em 2.5em;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  font-weight: 700;
`;

export { StyledHome, HomeContent, SearchBox, SearchInput, SearchButton };
