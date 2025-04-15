import AuthButton from "@/components/myComponents/auth-button";
import MyImage from "@/components/myComponents/myImage";
import MyLink from "@/components/myComponents/myLink";
import WelcomeImage from "@/components/page/welcome/welcome-images";

const WelcomePage = async ( ) => {

  return (
    <section className=" flex justify-between w-full h-screen bg-base-100">
      <div className=" w-1/2 p-8">
        <div className="  flex flex-col space-y-6 justify-center items-center">
          <MyImage className=" size-16" src="/logo.png" />
        </div>
        <div className=" mt-10 flex flex-col justify-center items-center space-y-1">
          <h1 className=" text-2xl">
            Welcome to {" "}
            <span className=" font-medium font-mono leading-1">
              TUGENDE
            </span>
          </h1>
          <p className="">
            Plan your ceremony, collaborate better, manage easier — start now!
          </p>
        </div>
        <div className=" mt-8 justify-center items-center flex">
          <AuthButton/>
        </div>
        <div className="mt-8  space-y-2">
          <div className=" text-center">
            <p>
              By continuing you agree to <span>Tugende</span>{" "}
              <MyLink href="/">Terms and Conditions</MyLink>
            </p>
          </div>
          <div className=" text-center flex justify-center">
          </div>
        </div>
      </div>
      <div className=" justify-start flex w-1/2 p-4 h-full">
        <WelcomeImage />
      </div>
    </section>
  );
};

export default WelcomePage;
