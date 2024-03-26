import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import PageToRead from './components/PageToRead/PageToRead';
import SignInPage from './components/SignInPage/SignInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import Books from './components/Books/Books';
import BookDetails from './components/BookDetails/BookDetails';
import ReadBooks from './components/ReadBooks/ReadBooks';
import WishListBooks from './components/WishListBooks/WishListBooks';
// import Banner from './components/Banner/Banner';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Books></Books>,
        loader: () => fetch('/FakeData.json')
      }
    ]
  },
  {
    path: "/listedBooks",
    element: <ListedBooks></ListedBooks>,
    children: [
      {
        index: true,
        element: <ReadBooks></ReadBooks>,
        loader: () => fetch('/FakeData.json')
      },
      {
        path: "wishListBooks",
        element: <WishListBooks></WishListBooks>
      }
    ]
  },
  {
    path: "/pagesToRead",
    element: <PageToRead></PageToRead>
  },
  {
    path: "/signInPage",
    element: <SignInPage></SignInPage>
  },
  {
    path: "/signUpPage",
    element: <SignUpPage></SignUpPage>
  },
  {
    path: "/bookDetails/:id",
    element: <BookDetails></BookDetails>,
    loader: () => fetch('/FakeData.json')
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
