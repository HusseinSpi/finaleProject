import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBooks } from "../../redux/thunk/booksThunk";
import { useTranslation } from "react-i18next";
import { createRecentActivity } from "../../redux/thunk/recentActivityThunks";

const Books = () => {
   const dispatch = useDispatch();
   const books = useSelector((state) => state.books.data[0] || []);
   const [isLoading, setIsLoading] = useState(true);
   const { t, i18n } = useTranslation();
   const currentUser = useSelector(
     (state) => state.currentUser?.data?.data?.user
   );

   useEffect(() => {
     const fetchData = async () => {
       setIsLoading(true);
       await dispatch(getAllBooks());
       setIsLoading(false);
     };

     if (books.length === 0) {
       fetchData();
     } else {
       setIsLoading(false);
     }
   }, [dispatch, books]);

   const filteredBooks = books[i18n.language] || books["en"] || [];

   const handleButtonClicked = (book) => {
     if (currentUser) {
       dispatch(
         createRecentActivity({
           type: "book",
           description: book.title,
           user: currentUser._id,
         })
       );
     }
     window.location.href = book.link;
   };

   if (isLoading) {
     return <div className="text-center">Loading...</div>;
   }

   return (
     <div className="flex flex-wrap gap-7">
       {filteredBooks.map((book) => (
         <div
           key={book.title}
           className="w-[30rem] bg-sky-700 flex flex-col items-center p-5 mt-10 gap-5 text-white text-center"
         >
           <img
             src={book.image}
             alt={book.title}
             className="w-[16rem] h-[18rem]"
           />
           <h1 className="font-bold">{book.title}</h1>
           <h2 className="font-semibold">{book.author}</h2>
           <p>{book.desc}</p>
           <button
             onClick={() => handleButtonClicked(book)}
             className="bg-white text-blue-900 rounded-xl p-3"
           >
             {t("Buy Now!")}
           </button>
         </div>
       ))}
     </div>
   );
};
export default Books;
