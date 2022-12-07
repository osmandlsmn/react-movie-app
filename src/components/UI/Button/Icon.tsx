import * as React from "react";

import classnames from "classnames";

interface IconButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ className, children, disabled }) => {
  return (
    <button
      disabled
      className={classnames([className, "flex h-8 w-8 items-center justify-center rounded-full bg-white text-center disabled:opacity-50"])}
    >
      {children}
    </button>
  );
};

export default IconButton;
