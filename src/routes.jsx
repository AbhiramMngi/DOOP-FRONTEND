import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignUpPage/SignUpPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import BlogEditorPage from './components/BlogEditorPage/BlogEditorPage';
import EditorPage from './components/EditorPage/EditorPage';
import ViewBlogPage from './components/ViewBlogPage/ViewBlog';

const router = createBrowserRouter([
  {
    path: '/',
    element:<ViewBlogPage/>
  },
  {
    path: 'signin',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/blog-editor',
    element: <BlogEditorPage />,
  },
  {
    path: '/edit',
    element: <EditorPage/>,
  }
]);
export default router;
