import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home'
import Shop from "./pages/Shop";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/boutique",
    element: <Shop />,
  },
]);

function App() {


  return <RouterProvider router={router} />;
}

export default App
