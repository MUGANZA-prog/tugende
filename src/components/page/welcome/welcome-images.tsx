"use client";
import MyImage from "@/components/myComponents/myImage";
import { Button } from "@/components/ui/button";
const WelcomeImage = () => {
  return (
    <div className=" w-full h-full bg-gradient-to-tr from-base-100 to-base-300 rounded-3xl p-4 px-6 space-y-4">
      <div className=" space-y-2">
        <h2 className=" font-semibold text-4xl">
          Plan your ceremony whenever you are.
        </h2>
        <p className=" ">
          plan your ceremony, connect with your guests, and stay organized —
          whether you&apos;re at home, at work, or on the go.
        </p>
      </div>
      <MyImage
        className=" w-full h-96 "
        classname="rounded-3xl"
        src={"https://img.freepik.com/premium-photo/close-up-red-clothes-chair_1048944-29392761.jpg?w=996"}
      />
      <div className="">
        <div className=" space-y-2">
          <h3 className=" font-semibold">Invitations</h3>
          <div className=" flex flex-row space-x-2">
            <Button role="button" variant={"ghost"}>
              <MyImage
                src="https://cdn-icons-png.flaticon.com/128/12717/12717080.png"
                role="ICON"
              />{" "}
              Wedding
            </Button>
            <Button role="button" variant={"ghost"}>
              <MyImage
                src="https://cdn-icons-png.flaticon.com/128/9324/9324801.png"
                role="ICON"
              />{" "}
              Birthday
            </Button>
            <Button role="button" variant={"ghost"}>
              <MyImage
                src="https://cdn-icons-png.flaticon.com/128/17174/17174766.png"
                role="ICON"
              />{" "}
              Graduation
            </Button>
            <Button role="button" variant={"ghost"}>
              <MyImage
                src="https://cdn-icons-png.flaticon.com/128/10337/10337470.png"
                role="ICON"
              />{" "}
              Etc..
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeImage;
