import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Technology } from './components/technology';
import { Sports } from './components/sports';
import { Photography } from './components/photography';
import { Root } from './components/root';

const Home = React.lazy(() => (import('./components/home')));
const Explore = React.lazy(() => (import('./components/explore')));
const LogIn = React.lazy(() => (import('./components/manage-user/login')));
const SignIn = React.lazy(() => (import('./components/manage-user/signin')));

export const App = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/explore',
                    element: <Explore />
                },
                {
                    path: '/login',
                    element: <LogIn />
                },
                {
                    path: '/signin',
                    element: <SignIn />
                },
                {
                    path: '/technology',
                    element: <Technology />
                },
                {
                    path: '/sports',
                    element: <Sports />
                },
                {
                    path: '/photography',
                    element: <Photography />
                }
            ]
        }
    ]);

    return (
        <React.Suspense>
            <RouterProvider router={appRouter} />
        </React.Suspense>
    )
}