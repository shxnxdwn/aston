import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import ThemeProvider from './shared/lib/theme/ThemeProvider.tsx';
import { BrowserRouter } from 'react-router';
import store from '@/app/providers/store';
import { Provider } from 'react-redux';

const rootElement = ReactDOM.createRoot(document.getElementById('root')!);

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
