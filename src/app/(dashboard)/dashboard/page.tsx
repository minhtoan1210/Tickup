"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";

const DashboardPage: React.FC = (props) => {
  const { user } = useUser();
  console.log("user", user);
  
  return (
    <div>
      DashboardPage
      {/* <p>{JSON.stringify}</p> */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
