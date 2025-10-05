import React from "react";

interface ToggleButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onClick,
  children,
  className,
}) => (
  <button className={`${className || ""}`} onClick={onClick}>
    {children}
  </button>
);

export default ToggleButton;
