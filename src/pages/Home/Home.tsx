import React, { FC } from "react";
import Title from "../../components/Title";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => (
  <>
    {" "}
    <section id="section2" className="py-20 bg-gray-200 h-screen "></section>
    <section id="about-us" className="py-20 bg-gray-300 h-screen">
      <Title />
      {/* <h2 className="text-4xl text-center">Section 2</h2> */}
    </section>
    <section id="our-services" className="py-20 bg-gray-300 h-screen">
      <h2 className="text-4xl text-center">Section 2</h2>
    </section>
    <section id="our-works" className="py-20 bg-gray-300 h-screen">
      <h2 className="text-4xl text-center">Section 2</h2>
    </section>
    <section id="news" className="py-20 bg-gray-300 h-screen">
      <h2 className="text-4xl text-center">Section 2</h2>
    </section>
  </>
);

export default HomePage;
