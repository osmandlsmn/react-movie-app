import * as React from "react";

interface InputProps {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <div className="flex h-10 w-[370px] items-center rounded-2xl bg-secondary px-5 text-lg">
      <input
        className="bg-transparent outline-none placeholder:tracking-wider "
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
