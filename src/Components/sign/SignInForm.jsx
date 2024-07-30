import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/thunk/userThunks";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const SignInForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
    >
      <p className="text-center text-lg font-medium text-blue-900">
        {t("SignInTitle")}
      </p>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder={t("Email")}
            required
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <MdOutlineAlternateEmail />
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder={t("Password")}
            required
          />

          <span
            onClick={handleShowPassword}
            className="absolute inset-y-0 end-0 grid place-content-center px-4 cursor-pointer"
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-blue-900 px-5 py-3 text-sm font-medium text-white hover:blue-800 "
      >
        {t("SignIn")}
      </button>

      <p className="text-center text-sm text-gray-500">
        <Link className="underline" to="/forgot-password">
          {t("ForgotPassword")}
        </Link>
      </p>

      <p className="text-center text-sm text-gray-500">
        {t("NoAccount")}
        <Link className="underline text-blue-900 hover:text-blue-700" to="/sign-up">
          {t("SignUp")}
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
