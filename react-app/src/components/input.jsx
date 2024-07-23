import { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");

  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      id={props.id}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
    />
  );
};

export default Input;
