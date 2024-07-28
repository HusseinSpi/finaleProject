import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Songs from "./Pages/Songs/Songs";
import Stories from "./Pages/Stories/Stoeies";

import FormingWordGame from "./Components/FormingWordGame/FormingWordGame";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import SingleSong from "./Pages/SingleSong/SingleSong";
import Chat from "./Components/Chat/Chat";
import SignUpPage from "./Pages/signup/Signup";
import SignInPage from "./Pages/signin/SignInPage";
import ForgotPasswordPage from "./Pages/ForgotPasword/ForgotPassword";
import ResetPassword from "./Pages/ForgotPasword/ResetPassword";
import AdminPage from "./Pages/admin/AdminPage";
import Sidebar from "./Components/sidebar/Sidebar";
import Messages from "./Pages/messages/Messages";
import Reviews from "./Pages/reviews/Reviews";
import Tetris from "./Components/Tetris/Tetris";
import ChatRoom from "./Pages/messages/ChatRoom";
import MatchingGame from "./Pages/Games/MatchingGame";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Chat />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "reset-password/:resetToken",
        element: <ResetPassword />,
      },
      {
        path: "songs",
        element: <Songs />,
      },
      {
        path: "song/:videoId",
        element: <SingleSong />,
      },
      {
        path: "stories",
        element: <Stories />,
      },
      {
        path: "forming-word-game",
        element: (
          <DndProvider backend={HTML5Backend}>
            <FormingWordGame />
          </DndProvider>
        ),
      },
      {
        path: "tetris",
        element: <Tetris />,
      },
      {
        path: "MatchingGame",
        element: <MatchingGame />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <Sidebar>
        <AdminPage />
      </Sidebar>
    ),
  },
  {
    path: "messages",
    element: (
      <Sidebar>
        <Messages />
      </Sidebar>
    ),
  },
  {
    path: "chat/:roomNumber",
    element: <ChatRoom />,
  },
  {
    path: "reviews",
    element: (
      <Sidebar>
        <Reviews />
      </Sidebar>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem("jwt");
    if (userToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const PrivateRoute = ({ children }) => {
    return !isAuthenticated ? <Navigate to="/sign-in" /> : children;
  };
  return <RouterProvider router={router} />;
}

export default App;
