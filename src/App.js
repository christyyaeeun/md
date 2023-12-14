import React, { lazy, Suspense } from 'react';
import { Spinner, Center } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Error = lazy(() => import('./pages/Error'));

function App() {
  return (
    <Suspense
      fallback={
        <Center height="100vh">
          <Spinner size="xl" thickness="4px" speed="0.65s" color="black" />
        </Center>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/*" element={ <Error /> } />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
