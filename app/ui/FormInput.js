import React from "react";
import FocusableDiv from "./FocusableDiv";

const FormInput = ({ title, id, value, placeholder, onChange }) => {
  return (
    <FocusableDiv>
      <label class="block text-gray-500 text-sm mb-2" for="title">
        {title}
      </label>
      <input
        className="appearance-none focus:outline-none w-full bg-slate-50"
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FocusableDiv>
  );
};

export default FormInput;
