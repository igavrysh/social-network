import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Preloader from '../components/common/Preloader/Preloader';

export const withSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Preloader />}>
        <Component {...props} />
      </Suspense>
    );
  };
}