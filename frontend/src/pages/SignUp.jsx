import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { CircleCheck } from "lucide-react";
import FormInput from "@/components/signup/FormInput";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
          <h1 className="text-[30px] font-semibold">Sign Up</h1>
          {isSubmitted ? (
            <div className="flex flex-col items-center gap-5">
              <CircleCheck size={80} className="text-green-600" />
              <p className="text-lg">
                Please check your email to activate your account!
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col text-center justify-center w-full gap-5"
            >
              <FormInput fieldID="anything" />
              <FormInput
                type="email"
                placeholder="Email Address"
                fieldID="email"
              />
              <FormInput
                type="text"
                placeholder="Username"
                fieldID="username"
              />
              <FormInput
                type="password"
                placeholder="Password"
                fieldID="password"
              />
              {/* <input
                className="border-slate-200 border-2 h-12 p-3 rounded"
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true, maxLength: 20 })}
              />
              <input
                className="border-slate-200 border-2 h-12 p-3 rounded"
                type="text"
                placeholder="Username"
                {...register("username")}
              />
              <input
                className="border-slate-200 border-2 h-12 p-3 rounded"
                type="password"
                placeholder="Password"
                {...register("password")}
              /> */}
              <button
                className="bg-black border text-white p-3 rounded hover:bg-white hover:text-black hover:border hover:border-black"
                type="submit"
              >
                Create Your Account
              </button>
            </form>
          )}
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
