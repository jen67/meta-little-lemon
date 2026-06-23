/* Path: src/components/Buttons/Buttons/Buttons.jsx */

/* This file defines a reusable Button component that can be used throughout the application.
   The Button component can render as a <button>, <a>, or <Link> element based on the props provided.
   It accepts various props to customize its behavior and appearance, including:
    - children: The content to be displayed inside the button.
    - variant: A string to determine the styling of the button (e.g., "primary", "secondary").
    - to: A string representing the path for React Router's <Link> component.
    - href: A string representing the URL for an anchor (<a>) element.
    - onClick: A function to handle click events for the button.
   The component also supports additional props like type, className, and any other props that can be passed to the underlying element.
*/

import React from "react";
import { Link } from "react-router-dom";
import "./Buttons.css";

function Button({
  children,
  variant,
  to,
  href,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  const buttonClassName = `btn btn-${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={buttonClassName} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClassName}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
