import styled from 'styled-components';

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;

  & > * {
    margin: 6px;
  }
`;

export default MovieList;
