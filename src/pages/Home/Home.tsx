import React, { FC } from "react";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => (
  <>
    {" "}
    <section id="section2" className="py-20 bg-gray-200 h-screen ">
      <h2 className="text-4xl text-center"></h2>
    </section>
    <section id="section3" className="py-20 bg-gray-300 h-screen">
      <h2 className="text-4xl text-center">Section 2</h2>
    </section>
  </>
);

export default HomePage;
