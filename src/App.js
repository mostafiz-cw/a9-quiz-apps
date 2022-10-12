/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import QuizDetails from './Components/Quiz Detiles/QuizDetails';

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
      {
        path: '/', 
        loader: async () =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Topics></Topics>
      }
      // {path: '/', element: <Topics></Topics>}
    ]},
    {path: '*', element: <img className="w-1/2 mx-auto my-auto" src="https://i.postimg.cc/CKjz9RqS/Mac-Book-1.png" alt="" />},
    {
      path: '/quiz/:id',
      loader: async ({params}) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },
      element: <QuizDetails></QuizDetails>
    }
  ])

  return (

    <div className="App bg-indigo-50">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
