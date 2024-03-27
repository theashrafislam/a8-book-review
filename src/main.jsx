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
import Error from './components/Error/Error';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
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
        element: <WishListBooks></WishListBooks>,
        loader: () => fetch('/FakeData.json')
      }
    ]
  },
  {
    path: "/pagesToRead",
    element: <PageToRead></PageToRead>,
    loader: () => fetch('/FakeData.json')
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
  {
    path: "/aboutUs",
    element: <AboutUs></AboutUs>
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>
  }
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
