import App from "./App";
import Shopping from "./components/Shopping";
import Cart from "./components/Cart";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shopping",
    element: <Shopping />,
  },
  {
    path: "cart",
    element: <Cart />,
  }
];

export default routes;