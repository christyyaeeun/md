import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/AuthContext';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <AuthProvider>
      <ColorModeScript />
      <ChakraProvider theme={ theme }>
        <CSSReset />
        <App />
      </ChakraProvider>
    </AuthProvider>
  </StrictMode>
);

reportWebVitals();
