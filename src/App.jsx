import React from 'react'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root-layout/Root';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Error from './pages/Error';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"element={<Root />}>
        <Route path='/' element={<Home/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
