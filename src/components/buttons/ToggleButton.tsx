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
  <button
    className={`mt-4 px-4 py-2 rounded border ${className || ""}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default ToggleButton;
