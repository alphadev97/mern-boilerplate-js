import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CircleCheck } from "lucide-react";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    toast.success("Form is submitted!");
  };

  return (
    <div className="flex justify-center h-[100vh] bg-blue-300 text-center">
      <div className="flex w-full justify-center items-center">
        <div className="w-[30%] h-[500px] bg-white flex flex-col px-5 gap-4 justify-center rounded shadow-sm">
          <h1 className="text-[30px] font-semibold">Sign In</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-center justify-center w-full gap-5"
          >
            <input
              className="border-slate-200 border-2 h-12 p-3 rounded"
              type="email"
              placeholder="Email Address"
              {...register("email")}
            />

            <input
              className="border-slate-200 border-2 h-12 p-3 rounded"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <button
              className="bg-black border text-white p-3 rounded hover:bg-white hover:text-black hover:border hover:border-black"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <p>
            Don't have account?{" "}
            <Link className="font-bold" to={"/sign-up"}>
              Create Account!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
