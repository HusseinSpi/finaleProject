import { useTranslation } from 'react-i18next'
import { PiBookFill } from 'react-icons/pi'

const Books = ({ books }) => {
  const { t } = useTranslation()

  if (!books || books.length === 0) {
    return <div>No book available</div>
  }

  const book = books[0]

  const handleButtonClicked = () => {
    window.location.href = book.link
  }

  return (
    <div className="p-2">
      <div key={book._id} className="flex gap-5 text-black">
        <div>
          <img
            src={book.image}
            alt={book.title}
            className="w-[150rem] h-[20.4rem] flex items-center"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-sm">{book.title}</h1>
          <h2 className="font-semibold text-sm">{book.author}</h2>
          <p className="text-sm text-justify">{book.desc}</p>
          <button
            onClick={handleButtonClicked}
            className="bg-purple-900 text-white rounded-xl p-2 text-sm hover:bg-purple-700 w-2/5"
          >
            {t('Buy Now!')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Books
