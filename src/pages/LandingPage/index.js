import React from 'react';
import Loadable from 'react-loadable';
import { ComponentLoading } from '../../components/ComponentLoading';

const LandingComponent = Loadable({
  loader: () => import('./container'),
  loading: ComponentLoading,
  timeout: 5000,
});

export const Landing = (props) => <LandingComponent {...props} />;

Landing.displayName = 'PageNotFound';
