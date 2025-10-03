import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, placeholder, label, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Determine the actual type of the input field
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="w-full mb-4">
      <label className="text-[13px] font-medium text-slate-800">{label}</label>

      {/* Using relative positioning for the icon */}
      <div className="relative mt-1">
        <input
          type={inputType}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none border border-gray-300 rounded-md p-2 pr-10"
          value={value}
          onChange={onChange}
        />

        {/* Show the eye icon only if the type is 'password' */}
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
