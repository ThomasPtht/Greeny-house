import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/boutique",
    element: <Shop />,
  },
  {
    path: "/panier",
    element: <Cart />,
  },
]);

function App() {

  return <RouterProvider router={router}  />;
}

export default App
