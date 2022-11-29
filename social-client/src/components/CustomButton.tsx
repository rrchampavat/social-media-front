import { Button } from "@mui/material";
import { FC } from "react";

interface ButtonProps {
  label: string;
  variant: "text" | "outlined" | "contained" | undefined;
  disabled?: boolean;
  handleClick?: any;
  size?: "medium" | "small" | "large" | undefined;
  sx?: object;
  type?: "button" | "submit" | "reset";
}

const CustomButton: FC<ButtonProps> = (props) => {
  const {
    variant,
    disabled = false,
    handleClick,
    label,
    size = "medium",
    sx,
    type = "button",
  } = props;

  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
      size={size}
      sx={sx}
      type={type}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
