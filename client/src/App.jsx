import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Gig from "./pages/gig/Gig.jsx";
import Gigs from "./pages/gigs/Gigs.jsx";
import Login from "./pages/login/Login.jsx";
import Message from "./pages/message/Message.jsx";
import Messages from "./pages/messages/Messages.jsx";
import MyGigs from "./pages/myGigs/MyGigs.jsx";
import Orders from "./pages/orders/Order.jsx";
import Register from "./pages/register/Register.jsx";
import Add from "./pages/add/Add.jsx";
import "./App.scss";

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path:"/add",
          element:<Add />
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/message/:id",
          element:<Message />
        },
        {
          path:"/messages",
          element:<Messages />
        },
        {
          path:"/myGigs",
          element:<MyGigs />
        },
        {
          path:"/orders",
          element:<Orders />
        },
        {
          path:"/register",
          element:<Register />
        }
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
