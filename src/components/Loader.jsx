import { Spinner } from '@blueprintjs/core';
import React from 'react';

function LoaderComponent({ isLoading, children }) {
  if (isLoading) {
    return <Spinner size={50} value={null} />;
  }
  // Render nothing if no children present
  return children ? children : null;
}

export default LoaderComponent;
