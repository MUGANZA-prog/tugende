import MyImage from "@/components/myComponents/myImage";
import { Button, } from "@/components/ui/button";
import React from "react";

const AuthButton = () => {
  return (
    <div className=" flex flex-col space-y-4 w-96">
      <Button size={"lg"} variant={"default"}>
        <MyImage
          src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
          role="ICON"
          className=" size-6"
        />
        Continue with Google
      </Button>
      <p className=" flex text-center justify-center">Or user your email</p>
    </div>
  );
};

export default AuthButton;
