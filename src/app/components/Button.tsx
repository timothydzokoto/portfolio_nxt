"use client";

import React from "react";

interface ButtonProps {
  text: string;
  onclick: () => void;
  style: string;
}
const Button = ({ text, onclick, style }: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      type="button"
      className={`btn glass ${style}`}
      data-twe-ripple-init
    >
      {text}
    </button>
  );
};

export default Button;
