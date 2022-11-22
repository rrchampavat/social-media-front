import { Button } from "@mui/material";

interface ButtonProps {
  variant: "text" | "outlined" | "contained" | undefined;
  disabled?: boolean;
  handleClick?: any;
  label: string;
  size?: "medium" | "small" | "large" | undefined;
  sx?: object;
}

const CustomBotton = (props: ButtonProps) => {
  const {
    variant,
    disabled = false,
    handleClick,
    label,
    size = "medium",
    sx,
  } = props;

  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
      size={size}
      sx={sx}
    >
      {label}
    </Button>
  );
};

export default CustomBotton;
