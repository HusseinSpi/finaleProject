import SignUpForm from "../../Components/sign/SignUpForm";
import background from "../../../dist/bbg.jpg";

const SignUpPage = () => {
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
      <div className="mx-auto max-w-lg bg-white p-5 rounded-lg">
        <h1 className="text-center text-2xl font-bold text-blue-900 sm:text-3xl">
          KIDDOFUN
        </h1>
        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
