import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import { PublicRoutes, PrivateRoutes } from './routes/routes';
import { ReactQueryDevtools } from 'react-query/devtools';
import HeaderTop from './components/HeaderTop';
import { BrowserRouter } from 'react-router-dom';
import { BasketProvider } from './components/PrivatePages/BasketContext';
import { QueryClientProvider, useQueryClient } from 'react-query';

const queryClient = new useQueryClient();

function App() {
  return (
    <BrowserRouter>
      <BasketProvider>
        <Routes>
          <Route
            path="/"
            element={<HeaderTop />}
          />
          {PublicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          {PrivateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BasketProvider>
    </BrowserRouter>
  );
}

export default App;


