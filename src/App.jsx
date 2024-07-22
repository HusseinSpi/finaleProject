import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
import Home from './Pages/Home/Home'
import Songs from './Pages/Songs/Songs'
import Stories from './Pages/Stories/Stoeies'

import FormingWordGame from './Components/FormingWordGame/FormingWordGame'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'songs',
    element: <Songs />,
  },
  {
    path: 'stories',
    element: <Stories />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: 'forming-word-game',
    element: (
      <DndProvider backend={HTML5Backend}>
        <FormingWordGame />
      </DndProvider>
    ),
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
