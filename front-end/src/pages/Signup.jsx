import React from "react";
import SigninForm from "../components/SigninForm";
import Nav from "../components/Nav";
const Signup = () => {
  return (
    <div>
      <Nav li={[{ label: "Signin", href: "/" }]} />
      <span className="flex underline text-4xl mx-auto items-center justify-center mt-5">
        Signin
      </span>
      <SigninForm />
    </div>
  );
};

export default Signup;
