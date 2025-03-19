import AuthForm from "@/components/AuthForm";
import React from "react";

const SignUp = () => {
  return (
    <section className="flex-center size-full max-small px-4">
      <AuthForm type={"sign-up"} />
    </section>
  );
};

export default SignUp;
