import React from "react";

interface IProps {
  label: string;
  id: string;
  error: string;
  value: string;
  type: string;
  name: string;
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
}

const Inputs = ({ label, id, error, ...props }: IProps) => {
  return (
    <div className="mb-6 w-[87%]">
      <label htmlFor="email" className=" block text-[#9E9E9E] font-semibold">
        {label}
      </label>
      <input id={id} {...props} className=" p-1  border-b-2  w-full" required />
      <div className="text-red-500	text-sm md:text-base w-full ">
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Inputs;
