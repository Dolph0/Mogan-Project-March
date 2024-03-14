// components/HomePage/MyHeading.tsx
import React, { ReactNode } from "react";

interface MyHeadingProps {
  children: ReactNode;
}

const MyHeading: React.FC<MyHeadingProps> = ({ children }) => {
  return (
    <h1 className="text-3xl font-bold text-blue-900 text-center sm:text-4xl mt-6">
      {children}
    </h1>
  );
};

export default MyHeading;
