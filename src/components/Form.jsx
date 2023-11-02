import "../styles/form.css";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
function FormTutorial(props) {
  const onSubmit = (data) => {
    console.log("data submitted", data);
    props.recived(data);
  };

  const dataSchema = yup.object().shape({
    fullname: yup.string().required("Your Full Name is required"),
    Email: yup.string().required("Please enter an appropriate Email address"),
    Age: yup
      .number()
      .positive("age must be a number")
      .integer("age must be an intiger")
      .min(18, "Your age should be above 18")
      .typeError("Age can not be empty")
      .required("Please enter your age"),
    Password: yup.string().min(4).max(16).required(),
    CnfPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords do not match")
      .required("Please Confirm your password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(dataSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='Enter name' {...register("fullname")} />

      <p className='errorMessage'>{errors.fullname?.message}</p>
      <input type='email' placeholder='Email' {...register("Email")} />

      <p className='errorMessage'>{errors.Email?.message}</p>
      <input type='number' placeholder='Age' {...register("Age")} />

      <p className='errorMessage'>{errors.Age?.message}</p>
      <input type='password' placeholder='password' {...register("Password")} />

      <p className='errorMessage'>{errors.Password?.message}</p>
      <input type='password' placeholder='Confirm password' {...register("CnfPassword")} />

      <p className='errorMessage'>{errors.CnfPassword?.message}</p>
      <button type='submit'>SUBMIT</button>
    </form>
  );
}

export default FormTutorial;
