import React from "react";
export default function Button({ children, className, ...props }) {
  return (
    <button type={props.type} onClick={props.onClick} className={className}>
      {children}
    </button>
  );
}
