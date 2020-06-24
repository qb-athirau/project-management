import React from 'react';
import AppRouter from './routes';
import Toast from '../src/components/Toast';
import { ThemeProvider } from 'styled-components';
import colorThemes from './configs/styles/colorThemes';
import { Provider } from 'react-redux';
import appStore from './store';

const App = () => (
  <Provider store={appStore}>
    <ThemeProvider theme={colorThemes}>
      <Toast />
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

export default App;
