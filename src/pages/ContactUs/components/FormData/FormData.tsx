import React from "react";
import Button from "../../../../components/Button";

interface IProps {}

const FormData = ({}: IProps) => {
  return (
    <>
      <form className="flex flex-col justify-center items-center relative w-full h-full ">
        <div className="mb-6 w-[87%]">
          <label
            htmlFor="fullName"
            className="block text-[#9E9E9E] font-semibold"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            // value={formData.fullName}
            // onChange={handleChange}
            className=" p-1  border-b-2  w-full "
            required
          />
        </div>

        <div className="mb-6 w-[87%]">
          <label
            htmlFor="email"
            className=" block text-[#9E9E9E] font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            className=" p-1  border-b-2  w-full"
            required
          />
        </div>

        <div className="mb-6 w-[87%]">
          <label
            htmlFor="phone"
            className=" block text-[#9E9E9E] font-semibold"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            // value={formData.phone}
            // onChange={handleChange}
            className=" p-1  border-b-2  w-full"
            required
          />
        </div>

        <div className="mb-6 w-[87%]">
          <label
            htmlFor="message"
            className=" block text-[#9E9E9E] font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            // value={formData.message}
            // onChange={handleChange}
            className=" p-1  border-b-2  w-full"
            required
          ></textarea>
        </div>

        <Button className="mx-auto block absolute bottom-0">send</Button>
      </form>
    </>
  );
};

export default FormData;
