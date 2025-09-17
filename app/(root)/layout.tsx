 
import React from "react";
import Navbar from "../../components/shared/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children} 
    </div>
  );
};

export default RootLayout;
