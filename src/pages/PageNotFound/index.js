import React from 'react';
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const PageNotFoundComponent = Loadable({
  loader: () => import('./component'),
  loading: ComponentLoading,
  timeout: 5000,
});

export const PageNotFound = props => <PageNotFoundComponent {...props} />;

PageNotFound.displayName = 'PageNotFound';