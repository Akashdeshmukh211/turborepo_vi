"use client";

import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export const custmetitle = ({ children}: TitleProps) => {

  return (
    <h1>
      {children}
    </h1>
  );
};