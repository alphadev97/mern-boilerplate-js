import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center h-[100vh] bg-blue-300 text-center">
      <div className="flex w-full justify-center items-center">
        <div className="w-[30%] h-[500px] bg-white flex flex-col px-4 gap-4 justify-center">
          <Input type="email" placeholder="Enter Your Email" />
          <Input type="password" placeholder="Enter Your Password" />
          <Button>Create Account</Button>
          <p>
            Already have an account?{" "}
            <Link className="font-bold" to={"/"}>
              Sign in!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
