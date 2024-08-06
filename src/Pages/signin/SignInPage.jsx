import SignInForm from "../../Components/sign/SignInForm";
import background from "../../../public/bbg.jpg";

import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div
      className=" mx-auto max-w-screen-xxl px-4 py-16 sm:px-6 lg:px-8 "
      // className="w-screen h-screen p-5 relative"
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="mx-auto max-w-lg bg-white rounded-lg p-5  ">
        <h1 className="text-center text-2xl font-bold text-blue-900 sm:text-5xl mt-5 font-theren">
          KiddoFun
        </h1>
        <p className="mx-auto mt-4 max-w-md text-center text-gray-600 sm:text-3xl mt-9">
          Ready to enjoy our Website?
        </p>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
