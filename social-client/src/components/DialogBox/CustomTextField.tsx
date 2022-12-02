import {
  IconButton,
  InputAdornment,
  SxProps,
  TextField,
  Theme,
  Tooltip,
  Zoom,
} from "@mui/material";
import { ChangeEvent, FC, FocusEvent, ReactElement } from "react";

interface TextFieldProps {
  id?: string;
  label?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  fullWidth?: boolean;
  multiline?: boolean;
  showError?: boolean;
  hasTooltip?: boolean;
  autoComplete?: string;
  value?: string | number;
  maxRows?: number | string;
  minRows?: number | string;
  showEndAdornment?: boolean;
  endAdornmentItemColor?: string;
  sx?: SxProps<Theme> | undefined;
  endAdornmentItem?: ReactElement;
  size?: "medium" | "small" | undefined;
  tooltipMsg?: string | number | undefined | null;
  endAdornmentPosition?: "start" | "end" | undefined;
  startAdornmentPosition?: "start" | "end" | undefined;
  helperText?: string | ReactElement | null | undefined;
  variant?: "standard" | "outlined" | "filled" | undefined;
  onKeyUp?: () => void;
  onChange?: (e: ChangeEvent<any>) => void;
  onBlur?: (e: FocusEvent<any, Element>) => void;
  onEndAdornmentClick?: () => void;
  tooltipPlacement?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start";
}

const CustomTextField: FC<TextFieldProps> = (props) => {
  const {
    id,
    sx,
    name,
    type,
    label,
    value,
    onBlur,
    maxRows,
    minRows,
    onKeyUp,
    onChange,
    tooltipMsg,
    helperText,
    autoComplete,
    size = "medium",
    endAdornmentItem,
    disabled = false,
    tooltipPlacement,
    fullWidth = true,
    showError = false,
    multiline = false,
    autoFocus = false,
    required = false,
    hasTooltip = false,
    variant = "standard",
    endAdornmentItemColor,
    showEndAdornment = false,
    endAdornmentPosition = "end",
    onEndAdornmentClick = () => {},
  } = props;

  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      name={name}
      value={value}
      sx={sx}
      type={type}
      disabled={disabled}
      fullWidth={fullWidth}
      error={showError}
      onChange={onChange}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
      multiline={multiline}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      maxRows={maxRows}
      minRows={minRows}
      required={required}
      size={size}
      helperText={helperText}
      InputProps={{
        endAdornment: showEndAdornment ? (
          <InputAdornment position={endAdornmentPosition}>
            {hasTooltip ? (
              <Tooltip
                title={tooltipMsg}
                placement={tooltipPlacement}
                TransitionComponent={Zoom}
                arrow
              >
                <IconButton
                  sx={{ color: endAdornmentItemColor }}
                  onClick={onEndAdornmentClick}
                >
                  {endAdornmentItem}
                </IconButton>
              </Tooltip>
            ) : (
              <IconButton
                sx={{ color: endAdornmentItemColor }}
                onClick={onEndAdornmentClick}
              >
                {endAdornmentItem}
              </IconButton>
            )}
          </InputAdornment>
        ) : null,
      }}
    />
  );
};

export default CustomTextField;
