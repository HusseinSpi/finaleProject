import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Songs from "./Pages/Songs/Songs";
import StoriesComponent from "./Pages/StoriesComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "songs",
    element: <Songs/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
