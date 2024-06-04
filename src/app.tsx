import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './components/home';
import { Explore } from './components/explore';

export const App = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/explore',
            element: <Explore />
        }
    ]);

    return (
        <React.Suspense>
            <RouterProvider router={appRouter} />
        </React.Suspense>
    )
}