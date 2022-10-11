/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';

function App() {

  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      {
        path: '/quiz', 
        loader: async () =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Topics></Topics>
      },
      {path: '/statistics', element: <Statistics></Statistics>},
      {path: '/blog', element: <Blog></Blog>},
      // {path: '/', element: <Topics></Topics>}
    ]},
    {path: '*', element: <div>404 Not Found</div>}
  ])

  return (

    <div className="App bg-indigo-50 h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
