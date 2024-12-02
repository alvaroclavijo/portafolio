import React, { ReactNode } from "react";

interface FixedWidthContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const FixedWidthContainer: React.FC<FixedWidthContainerProps> = ({
  children,
  className,
  id,
}) => {
  const defaultClassName = "mx-auto";

  return (
    <div
      className={`${defaultClassName} ${className}`}
      style={{ maxWidth: "85%" }}
      id={id}
    >
      {children}
    </div>
  );
};

export default FixedWidthContainer;
