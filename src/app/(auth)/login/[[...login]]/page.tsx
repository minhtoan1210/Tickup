import { Button } from "@/shared/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import React from "react";

const LoginPage: React.FC = (props) => {
  return (
    <div>
      <h1>SignIn Page</h1>
      <SignInButton redirectUrl="/dashboard">
        <Button>Sign In Button</Button>
      </SignInButton>
    </div>
  );
};

export default LoginPage;
