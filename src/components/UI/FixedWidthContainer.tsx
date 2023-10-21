import React, { ReactNode } from "react";

interface FixedWidthContainerProps {
  children: ReactNode;
  className?: string;
}

const FixedWidthContainer: React.FC<FixedWidthContainerProps> = ({
  children,
  className,
}) => {
  const defaultClassName = "mx-auto";

  return (
    <div
      className={`${defaultClassName} ${className}`}
      style={{ maxWidth: "85%" }}
    >
      {children}
    </div>
  );
};

export default FixedWidthContainer;
