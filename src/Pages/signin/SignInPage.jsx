import SignInForm from "../../Components/sign/SignInForm";
import background from "../../../public/bbg.jpg"

const SignInPage = () => {
  return (
    <div
      className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
      // className="w-screen h-screen p-5 relative"
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="mx-auto max-w-lg bg-white rounded-lg p-5">
        <h1 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          KIDDOFUN
        </h1>
        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
