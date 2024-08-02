import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
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
import Navbar from "./Components/Navbar/Navbar";
import ChatRoom from "./Pages/messages/ChatRoom";
import MatchingGame from "./Pages/Games/MatchingGame";
import Draw from "./Pages/Draw/Draw";
import Games from "./Pages/Games/Games";
import Account from "./Pages/account/Account";
import Parenting from "./Pages/Parenting/Parenting";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import CulinaryKids from "./Pages/CulinaryKids/CulinaryKids";
import Puzzle from "./Pages/Puzzle/Puzzle";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? element : <Navigate to="/sign-in" />;
};

const PublicRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("token");
  return !isAuthenticated ? element : <Navigate to="/" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Chat />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-up",
        element: <PublicRoute element={<SignUpPage />} />,
      },
      {
        path: "sign-in",
        element: <PublicRoute element={<SignInPage />} />,
      },
      {
        path: "forgot-password",
        element: <PublicRoute element={<ForgotPasswordPage />} />,
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
        path: "games",
        element: <Games />,
      },
      {
        path: "parenting",
        element: <Parenting />,
      },
      {
        path: "culinary-kids",
        element: <CulinaryKids />,
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
        path: "Draw",
        element: <Draw />,
      },
      {
        path: "puzzel",
        element: <Puzzle />,
      },
      {
        path: "MatchingGame",
        element: <MatchingGame />,
      },
      {
        path: "tic-tac-toe",
        element: <TicTacToe />,
      },
      {
        path: "TicTacToe",
        element: <TicTacToe />,
      },
      {
        path: "account",
        element: <PrivateRoute element={<Account />} />,
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
  return <RouterProvider router={router} />;
}

export default App;
