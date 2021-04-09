import { Classes } from '@blueprintjs/core';
import * as React from 'react';

export function withLoading(Component) {
  return (props) => (
    <Component className={props.loading && Classes.SKELETON} {...props} />
  );
}
