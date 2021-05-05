import { Alignment, Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import * as scrollHelpers from '../common/scroll.helpers';
import {
  fetchMovies,
  fetchMoviesNext,
  selectIsLoading,
  selectMovies
} from '../features/movies/moviesSlice';
import MovieGroup from './MovieGroup';
import MovieModal from './MovieModal';

const StyledContentDiv = styled.div`
  && {
    margin-top: 64px; /* Bar height */
  }
`;

const StyledGridDiv = styled.div`
  && {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: flex-start;
    & > * {
      margin: 12px;
    }
  }
`;

const MoviePage = () => {
  const dispatch = useDispatch();

  const [birthDate, setBirthDate] = useState(new Date('1983-06-13'));

  const movieList = useSelector(selectMovies);
  const isLoading = useSelector(selectIsLoading);

  /* */
  const handleDateChange = (date, isUserChange) => {
    if (isUserChange) {
      setBirthDate(new Date(date));
    }
  };

  /* Effect to handle birth date changes (including first page load) */
  useEffect(() => {
    dispatch(fetchMovies({ date: birthDate }));
  }, [dispatch, birthDate]);

  /* Effect to handle window scroll changes */
  useEffect(() => {
    const handleScroll = () => {
      if (!isLoading) {
        let percentageScrolled = scrollHelpers.getScrollDownPercentage(window);
        if (percentageScrolled > 0.95) {
          dispatch(fetchMoviesNext({ date: birthDate }));
        }
      }
    };
    window.onscroll = handleScroll;

    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, isLoading, birthDate]);

  /* */
  return (
    <>
      <Navbar fixedToTop={true} className="bp3-dark">
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Season Movies</NavbarHeading>
        </NavbarGroup>
      </Navbar>
      <StyledContentDiv>
        <div></div>
        <StyledGridDiv>
          <div>
            <DateInput
              formatDate={(date) => date.toLocaleDateString()}
              onChange={handleDateChange}
              parseDate={(str) => new Date(str)}
              placeholder={'D/M/YYYY'}
              minDate={new Date('1902-01-01')}
              value={birthDate}
            />
          </div>
          <div>
            <MovieGroup movies={movieList} isLoading={isLoading} />
          </div>
        </StyledGridDiv>
      </StyledContentDiv>
      <MovieModal />
    </>
  );
};

export default MoviePage;
