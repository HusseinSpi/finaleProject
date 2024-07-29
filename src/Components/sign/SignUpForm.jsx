import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/thunk/userThunks";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";

const SignUpForm = () => {
  const { t, i18n } = useTranslation();

=======

const SignUpForm = () => {
>>>>>>> origin/DanielaBranch
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    photo: "",
    age: 18,
    github: "",
    about: "",
    role: "user",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(formData));
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
        {t("SignUpTitle")}
      </p>

      <div className="flex space-x-4">
        {i18n.language === "en" ? (
          <>
            <div className="w-1/2">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={t("FirstName")}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={t("LastName")}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-1/2">
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={t("LastName")}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder={t("FirstName")}
                required
              />
            </div>
          </>
        )}
=======
        Create your account
      </p>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label htmlFor="firstName" className="sr-only">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter first name"
            required
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="lastName" className="sr-only">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter last name"
            required
          />
        </div>
>>>>>>> origin/DanielaBranch
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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

      <div>
        <label htmlFor="passwordConfirm" className="sr-only">
          Confirm Password
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="passwordConfirm"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
<<<<<<< HEAD
            placeholder={t("ConfirmPassword")}
=======
            placeholder="Confirm password"
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
        {t("SignUp")}
      </button>

      <p className="text-center text-sm text-gray-500 ">
        {t("AlreadyHaveAnAccount")}
        <a className="underline" href="/sign-in">
          {" "}
          {t("SignIn")}
=======
        Sign up
      </button>

      <p className="text-center text-sm text-gray-500 ">
        Already have an account?
        <a className="underline" href="/sign-in">
          {" "}
          Sign in
>>>>>>> origin/DanielaBranch
        </a>
      </p>
    </form>
  );
};
export default SignUpForm;
