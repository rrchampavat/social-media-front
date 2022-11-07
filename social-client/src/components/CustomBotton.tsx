import { Button } from "@mui/material";

interface ButtonProps {
  variant: any;
  disabled?: any;
  handleClick: any;
  lable: any;
  size?: any;
  sx?: any;
}

const CustomBotton = (props: ButtonProps) => {
  const {
    variant,
    disabled = false,
    handleClick,
    lable,
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
      {lable}
    </Button>
  );
};

export default CustomBotton;
