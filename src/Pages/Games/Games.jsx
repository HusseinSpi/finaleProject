import { NavLink } from 'react-router-dom'
import background from '../../../public/bbg.jpg'
import tetris from '../../../public/tetrisBG.jpg'
import animals from '../../../public/animalsBG.jpg'
import drawing from '../../../public/drawingBG.jpg'
import matching from '../../../public/matchingBG.png'
import tictactoe from '../../../public/tictactoe.webp'
import puzzel from '../../../public/puzzelBG.jpg'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { createRecentActivity } from '../../redux/thunk/recentActivityThunks'

const Games = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const currentUser = useSelector(
    (state) => state.currentUser?.data?.data?.user
  )

  const handlePlayGame = (gameName) => {
    if (currentUser) {
      dispatch(
        createRecentActivity({
          type: 'game',
          description: gameName,
          user: currentUser._id,
        })
      )
    }
  }

  const games = [
    { link: '/tetris', imgSrc: tetris, alt: 'tetris', label: t('Tetris') },
    {
      link: '/forming-word-game',
      imgSrc: animals,
      alt: 'forming words',
      label: t('Forming Words'),
    },
    {
      link: '/Draw',
      imgSrc: drawing,
      alt: 'drawing',
      label: t('Drawing and Coloring'),
    },
    {
      link: '/MatchingGame',
      imgSrc: matching,
      alt: 'matching pairs',
      label: t('Matching Pairs'),
    },
    {
      link: '/tic-tac-toe',
      imgSrc: tictactoe,
      alt: 'tic tac toe',
      label: t('Tic Tac Toe'),
    },
    { link: '/puzzle', imgSrc: puzzel, alt: 'puzzle', label: t('Puzzle') },
  ]

  return (
    <div
      className="w-screen h-screen p-5 relative"
      style={{
        background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
    >
      <div className="flex flex-wrap gap-10 justify-center ">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-blue-900 p-4 m-2 rounded-xl w-[18rem] h-[20rem] transform transition-transform duration-200 hover:scale-105 hover:bg-blue-800"
          >
            <NavLink to={game.link} onClick={() => handlePlayGame(game.label)}>
              <img
                className="w-[20rem] h-[15rem]"
                src={game.imgSrc}
                alt={game.alt}
              />
              <h1 className="text-white text-center mt-5">{game.label}</h1>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Games
