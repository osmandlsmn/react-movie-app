import * as React from "react";

interface InputProps {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="text-md flex h-10 w-[370px] items-center rounded-lg bg-secondary px-5">
      <input
        className="w-full bg-transparent outline-none placeholder:tracking-wider "
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
