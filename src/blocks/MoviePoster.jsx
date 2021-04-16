import { Intent, Tag } from '@blueprintjs/core';
import * as React from 'react';
import styled from 'styled-components/macro';

import { withLoading } from './helpers';

const MoviePoster = withLoading(styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
  cursor: pointer;
  max-width: ${(props) => props.maxWidth || '100%'};

  & > * {
    margin-bottom: 2px;
  }
`);

const Image = styled.img`
  max-width: 100%;
`;

const Title = styled(({ ...props }) => <Tag fill={true} intent={Intent.PRIMARY} {...props} />)``;

/* */
MoviePoster.Image = Image;
MoviePoster.Title = Title;

export default MoviePoster;
