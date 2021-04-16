import { Alignment, Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';

import { getMovies } from '../actions';
import * as scrollHelpers from '../common/scroll.helpers';
import * as movieHelpers from './helpers';
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

  const [currentPage, setCurrentPage] = useState(1);
  const [birthDate, setBirthDate] = useState(new Date('1983-06-13'));

  const { response, isLoading } = useSelector((state) => state.movieBrowser.movieList);
  const movies = movieHelpers.getMoviesList(response); // TODO useMemo when response changes

  /* */
  const handleDateChange = (date, isUserChange) => {
    if (isUserChange) {
      setBirthDate(new Date(date));
    }
  };

  /* Effect to handle birth date changes (including first page load) */
  useEffect(() => {
    dispatch(getMovies(birthDate, 1, true)); // reset results = true
  }, [dispatch, birthDate]);

  /* Effect to handle window scroll changes */
  useEffect(() => {
    const handleScroll = () => {
      if (!isLoading) {
        let percentageScrolled = scrollHelpers.getScrollDownPercentage(window);
        if (percentageScrolled > 0.8) {
          const nextPage = currentPage + 1;
          dispatch(getMovies(birthDate, nextPage));
          setCurrentPage(nextPage);
        }
      }
    };
    window.onscroll = handleScroll;

    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, currentPage, isLoading, birthDate]);

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
            />
          </div>
          <div>
            <MovieGroup movies={movies} isLoading={isLoading} />
          </div>
        </StyledGridDiv>
      </StyledContentDiv>
      <MovieModal />
    </>
  );
};

export default MoviePage;
