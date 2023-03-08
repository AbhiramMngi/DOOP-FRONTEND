import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './components/LoginPage/LoginPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    }
]);

export default router;