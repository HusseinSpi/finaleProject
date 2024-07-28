import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../../redux/thunk/userThunks";
import { useTranslation } from "react-i18next";

const AdminPage = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [stats, setStats] = useState([]);

  const users = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  useEffect(() => {
    if (users?.data?.users) {
      setStats([
        { id: 1, name: t("Users"), value: users.data.users.length.toString() },
      ]);
    }
  }, [users, t]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">
        {t("AdminPageTitle")}
      </h1>

      {stats.length > 0 && (
        <div className="flex justify-around mb-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl bg-blue-500">
                {stat.value}
              </div>
              <p className="mt-2 text-gray-700">{stat.name}</p>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">{t(`Users`)}</h2>
        <ul>
          {users?.data?.users.map((user) => (
            <li key={user.id} className="mb-2">
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">{t("MessageRequests")}</h2>
        <ul>
          {/* Replace with actual message requests data */}
          <li className="mb-2">
            <p>Message Request 1</p>
          </li>
          <li className="mb-2">
            <p>Message Request 2</p>
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{t("Reviews")}</h2>
        <ul>
          <li className="mb-2">
            <p>Review 1</p>
          </li>
          <li className="mb-2">
            <p>Review 2</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
