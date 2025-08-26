import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import ThemeProvider from './shared/lib/theme/ThemeProvider.tsx';
import { BrowserRouter } from 'react-router';

const rootElement = ReactDOM.createRoot(document.getElementById('root')!);

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
