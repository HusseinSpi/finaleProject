import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/thunk/userThunks";
import { Link } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";

const SignInForm = () => {
  const { t } = useTranslation();
=======

const SignInForm = () => {
>>>>>>> origin/DanielaBranch
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
      <p className="text-center text-lg font-medium text-thirdColor">
<<<<<<< HEAD
        {t("SignInTitle")}
=======
        Sign in to your account
>>>>>>> origin/DanielaBranch
      </p>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
<<<<<<< HEAD
=======

>>>>>>> origin/DanielaBranch
        <div className="relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
<<<<<<< HEAD
            placeholder={t("Email")}
=======
            placeholder="Enter email"
>>>>>>> origin/DanielaBranch
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
<<<<<<< HEAD
=======

>>>>>>> origin/DanielaBranch
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
<<<<<<< HEAD
            placeholder={t("Password")}
=======
            placeholder="Enter password"
>>>>>>> origin/DanielaBranch
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
        className="block w-full rounded-lg bg-thirdColorO px-5 py-3 text-sm font-medium text-white bg-black"
      >
<<<<<<< HEAD
        {t("SignIn")}
=======
        Sign in
>>>>>>> origin/DanielaBranch
      </button>

      <p className="text-center text-sm text-gray-500">
        <Link className="underline" to="/forgot-password">
<<<<<<< HEAD
          {t("ForgotPassword")}
=======
          Forgot Password?
>>>>>>> origin/DanielaBranch
        </Link>
      </p>

      <p className="text-center text-sm text-gray-500">
<<<<<<< HEAD
        {t("NoAccount")}
        <Link className="underline" to="/sign-up">
          {t("SignUp")}
=======
        No account?
        <Link className="underline" to="/sign-up">
          Sign up
>>>>>>> origin/DanielaBranch
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
