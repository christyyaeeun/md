import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </AuthProvider>
  </StrictMode>
);

reportWebVitals();
