import React, { useEffect } from "react";
import Button from "../../../../components/Button";
import axios from "axios";
import Inputs from "./components/Inputs";

interface IProps {}

const url = "http://localhost:3000/messages";
const FormContact = ({}: IProps) => {
  const [enteredValues, setEnteredValues] = React.useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    message: false,
  });
  const [isEdit, setIsEdit] = React.useState({
    fullName: false,
    email: false,
    phoneNumber: false,
    message: false,
  });
  const handleInputChange = (identifier, value) => {
    setIsEdit((prevValue) => ({
      ...prevValue,
      [identifier]: false,
    }));
    setEnteredValues((prevValue) => ({ ...prevValue, [identifier]: value }));
  };
  // const PhoneIsInvalid = isEdit.fullName && !enteredValues.email.includes("@");
  const PhoneIsInvalid =
    isEdit.phoneNumber && enteredValues.phoneNumber.trim().length < 8;

  const handleInBluerInput = (identifier) => {
    setIsEdit((prevValue) => ({
      ...prevValue,
      [identifier]: true,
    }));
  };

  const handleFormSubmited = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const respons = await axios.post(url, enteredValues);
      if (respons.status === 201) {
        alert("Success!");
        setEnteredValues({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        event.target.reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmited}
        className="flex flex-col justify-center items-center relative w-full h-full lg:w-[59%] mx-auto text-lg font-semibold capitalize"
      >
        <Inputs
          id="fullName"
          label="full Name"
          type="text"
          name="fullName"
          value={enteredValues.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          onBlur={(e) => handleInBluerInput(e.target.name)}
          error=""
        />

        <Inputs
          id="email"
          label="email"
          type="email"
          name="email"
          value={enteredValues.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          onBlur={(e) => handleInBluerInput(e.target.name)}
          error={""}
        />
        <Inputs
          id="phoneNumber"
          label="phone Number"
          type="number"
          name="phoneNumber"
          value={enteredValues.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          onBlur={(e) => handleInBluerInput(e.target.name)}
          error={PhoneIsInvalid && "phone number not valid"}
        />

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

            onChange={(e) => handleInputChange("message", e.target.value)}
            className=" p-1  border-b-2  w-full"
            required
          ></textarea>
        </div>
        <Button className="mx-auto block absolute bottom-0">send</Button>
      </form>
    </>
  );
};

export default FormContact;
