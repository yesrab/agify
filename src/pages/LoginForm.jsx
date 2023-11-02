import React, { useState } from "react";
import FormTutorial from "../components/Form";

function LoginForm() {
  const [formData, setFormData] = useState({});
  return (
    <div>
      <FormTutorial recived={setFormData} />
      <p>Full Name: {formData.fullname}</p>
      <p>Email :{formData.Email}</p>
      <p>Age : {formData.Age}</p>
      <p>Password :{formData.Password}</p>
    </div>
  );
}

export default LoginForm;
