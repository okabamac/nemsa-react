import React from "react";

export default function Form({ children, className, onSubmit, ...props }) {
  return <form className={className} onSubmit={onSubmit}>{children}</form>;
}
