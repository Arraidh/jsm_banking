import AuthForm from "@/components/AuthForm";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-small px-4">
      <AuthForm type={"sign-in"} />
    </section>
  );
};

export default SignIn;
