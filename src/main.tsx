import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import ThemeProvider from './shared/lib/theme/ThemeProvider.tsx';


const rootElement = ReactDOM.createRoot(document.getElementById('root')!);


rootElement.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
