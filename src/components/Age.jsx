import React from "react";
import axios from "axios";
import { useState } from "react";

function Age() {
  const [name, setname] = useState("");
  const [predictedAge, setpredictedAge] = useState(0);
  const predictAge = async () => {
    const resp = await axios.get(`https://api.agify.io/?name=${name}`);
    console.log(resp);
    setpredictedAge(resp.data.age);
  };
  return (
    <div>
      <input
        onChange={(event) => {
          setname(event.target.value);
        }}
        placeholder='Enter Your Name'
      />
      <button onClick={predictAge}>Predict AGE</button>
      <h1>Predicted Age is: {predictedAge}</h1>
    </div>
  );
}
export default Age;
