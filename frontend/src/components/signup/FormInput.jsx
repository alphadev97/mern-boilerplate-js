import React from "react";
import { useForm } from "react-hook-form";

const FormInput = ({
  type = "text",
  placeholder = "Enter text",
  fieldID,
  required = false,
  maxLength = 20,
}) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <input
      className="border-slate-200 border-2 h-12 p-3 rounded"
      type={type}
      placeholder={placeholder}
      {...register(fieldID, { required, maxLength })}
    />
  );
};

export default FormInput;
