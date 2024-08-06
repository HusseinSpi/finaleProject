import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser } from '../../redux/thunk/currentUserThunks'
import { NavLink } from 'react-router-dom'
import logo from '../../../public/logo6.png'
import bubble from '../../../public/bubble.png'
import { useTranslation } from 'react-i18next'
import { LuMenu } from 'react-icons/lu'
import { IoCloseSharp } from 'react-icons/io5'

const Navbar = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const currentUser = useSelector((state) => state.currentUser.data?.data?.user)

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch])

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinkClasses = ({ isActive }) =>
    `flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-lg font-semibold bg-cover transition-transform duration-300 ease-in-out hover:scale-105 ${
      isActive ? 'scale-110 text-blue-950' : 'text-blue-950 animate-float'
    } pt-5`

  const navLinkStyles = {
    backgroundImage: `url(${bubble})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '2.5rem',
  }

  return (
    <nav className="relative p-2 bg-cover bg-[#32BAF1] w-full">
      <div className="flex justify-between items-center lg:hidden">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-30 h-10" />
        </NavLink>
        <button onClick={toggleMenu} className="text-blue-950">
          {isOpen ? (
            <IoCloseSharp size={40} color="#fff" />
          ) : (
            <LuMenu size={35} color="#fff" />
          )}
        </button>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:w-auto text-xl mt-2`}
      >
        <ul className="flex flex-col gap-4 lg:flex-row lg:space-x-4 w-full lg:justify-center items-center">
          <li>
            <NavLink
              to="games"
              className={navLinkClasses}
              style={navLinkStyles}
            >
              {t('Games')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="songs"
              className={navLinkClasses}
              style={navLinkStyles}
            >
              {t('Songs')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="stories"
              className={navLinkClasses}
              style={navLinkStyles}
            >
              {t('Stories')}
            </NavLink>
          </li>

          <li className="hidden lg:flex justify-center">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="w-56 h-14" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="parenting"
              className={navLinkClasses}
              style={navLinkStyles}
            >
              {t('Parenting')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="culinary-kids"
              className={navLinkClasses}
              style={navLinkStyles}
            >
              {t('Meals')}
            </NavLink>
          </li>
          {currentUser && (
            <li>
              <NavLink
                to="account"
                className={navLinkClasses}
                style={navLinkStyles}
              >
                {t('Account')}
              </NavLink>
            </li>
          )}
          {!currentUser && (
            <li>
              <NavLink
                to="sign-in"
                className={navLinkClasses}
                style={navLinkStyles}
              >
                {t('SignIn')}
              </NavLink>
            </li>
          )}
        </ul>
        <div className="absolute top-12 right-4 lg:top-12 lg:right-5">
          <select
            onChange={handleLanguageChange}
            className="p-2 text-lg font-semibold bg-transparent rounded-md text-blue-950"
          >
            <option value="en">En</option>
            <option value="ar">Ar</option>
            <option value="he">He</option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
