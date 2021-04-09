import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

import MoviePoster from '../blocks/MoviePoster';

/*storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));*/

const stories = storiesOf('MoviePoster', module);
stories.addDecorator(withKnobs);

stories
  .add('default', () => (
    <MoviePoster
      maxWidth={text('Max width', '300px')}
      loading={boolean('Loading', false)}>
      <MoviePoster.Image
        src={text(
          'Image src',
          'https://image.tmdb.org/t/p/w300/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg'
        )}
      />
      <MoviePoster.Title>{text('Title', 'The Lion King')}</MoviePoster.Title>
    </MoviePoster>
  ))
  .add('without title', () => (
    <MoviePoster
      maxWidth={text('Max width', '300px')}
      loading={boolean('Loading', false)}>
      <MoviePoster.Image
        src={text(
          'Image src',
          'https://image.tmdb.org/t/p/w300/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg'
        )}
      />
    </MoviePoster>
  ));
