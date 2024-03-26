import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  return (
    <div className="flex justify-center h-[100vh] bg-blue-300 text-center">
      <div className="flex w-full justify-center items-center">
        <div className="w-[30%] h-[500px] bg-white flex flex-col px-5 gap-4 justify-center rounded shadow-sm">
          <h1 className="text-[30px] font-semibold">Sign Up</h1>
          <form className="flex flex-col text-center justify-center w-full gap-5">
            <input
              className="border-slate-200 border-2 h-12 p-3 rounded"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="border-slate-200 border-2 h-12 p-3 rounded"
              type="text"
              placeholder="Username"
            />
            <input
              className="border-slate-200 border-2 h-12 p-3 rounded"
              type="password"
              placeholder="Password"
            />
            <button
              className="bg-black border text-white p-3 rounded hover:bg-white hover:text-black hover:border hover:border-black"
              type="submit"
            >
              Create Your Account
            </button>
          </form>
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
