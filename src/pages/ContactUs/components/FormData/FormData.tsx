import React, { useEffect } from "react";
import Button from "../../../../components/Button";
import axios from "axios";

interface IProps {}
const url = "http://localhost:3000/messages";
const FormContact = ({}: IProps) => {
  const [enteredValues, setEnteredValues] = React.useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = React.useState({
    fullName: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleInputChange = (indintfire, value) => {
    setEnteredValues((prevValue) => ({ ...prevValue, [indintfire]: value }));
  };
  const validateFormData = (identifir, value) => {
    // console.log(fullName.value)
    // const fullName = document.getElementById("fullName");
    // const email = document.getElementById("email");
    // const message = document.getElementById("message");
    // if (fullName.value === "") {
    //   fullName.classList.add("border-red-500");
    // } else {
    //   fullName.classList.remove("border-red-500");
    // }
    // if (email.value === "") {
    //   email.classList.add("border-red-500");
    // } else {
    //   email.classList.remove("border-red-500");
    // }
    // if (message.value === "") {
    //   message.classList.add("border-red-500");
    // } else {
    //   message.classList.remove("border-red-500");
    // }
  };
  const handleFormSubmited = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const respons = await axios.post(url, enteredValues);
      if (respons.status === 201) {
        alert("Success!");
        event.target.reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const form = event.currentTarget;
  //   const formData = new FormData(form);
  //   const data = Object.fromEntries(formData.entries());
  //   try {
  //     const respons = await axios.post(url, data);
  //     if (respons.status === 201) {

  //         const data = Object.fromEntries(formData.entries());
  //         try {
  //           const response = await axios.post(url, data);
  //           if (response.status === 201) {
  //             alert("Success!");
  //             form.reset();
  //           }
  //         } catch (error) {
  //           console.log(error.message);
  //         }
  //       }
  //       event.target.reset();
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // useEffect(() => {
  //   handleSubmitForm();
  // }, []);
  return (
    <>
      <form
        onSubmit={handleFormSubmited}
        className="flex flex-col justify-center items-center relative w-full h-full "
      >
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
            // value={enteredValues.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
            className=" p-1  border-b-2  w-full "
            onBlur={(e) => validateFormData("fullName", e.target.value)}
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
            onChange={(e) => handleInputChange("email", e.target.value)}
            // onBlur={handleValidation}
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
            type="number"
            id="phone"
            name="phone"
            // value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
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
            onChange={(e) => handleInputChange("message", e.target.value)}
            className=" p-1  border-b-2  w-full"
            required
          ></textarea>
        </div>
        <button>send</button>
        <Button className="mx-auto block absolute bottom-0">send</Button>
      </form>
    </>
  );
};

export default FormContact;
