import {
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Tooltip,
  Zoom,
} from "@mui/material";
import { ChangeEvent, FC, FocusEvent, ReactElement } from "react";

interface FormControlProps {
  label: string;
  type?: string;
  name?: string;
  fieldCSS?: Object;
  disabled?: boolean;
  fullWidth?: boolean;
  showError?: boolean;
  hasTooltip?: boolean;
  value?: string | number;
  showEndAdornment?: boolean;
  endAdornmentItemColor?: string;
  endAdornmentItem?: ReactElement;
  tooltipMsg?: string | number | undefined | null;
  endAdornmentPosition?: "start" | "end";
  startAdornmentPosition?: "start" | "end";
  variant?: "standard" | "outlined" | "filled";
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

const CustomFormControl: FC<FormControlProps> = (props) => {
  const {
    name,
    type,
    label,
    value,
    onBlur,
    onKeyUp,
    fieldCSS,
    onChange,
    tooltipMsg,
    endAdornmentItem,
    disabled = false,
    tooltipPlacement,
    fullWidth = true,
    showError = false,
    hasTooltip = false,
    variant = "standard",
    endAdornmentItemColor,
    showEndAdornment = false,
    endAdornmentPosition = "end",
    onEndAdornmentClick = () => {},
  } = props;

  let inputEle;

  switch (variant) {
    case "standard":
      inputEle = (
        <Input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onBlur={onBlur}
          endAdornment={
            showEndAdornment ? (
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
            ) : null
          }
        />
      );
      break;

    case "outlined":
      inputEle = (
        <OutlinedInput
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onBlur={onBlur}
          endAdornment={
            showEndAdornment ? (
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
            ) : null
          }
        />
      );

      break;

    case "filled":
      inputEle = (
        <FilledInput
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onBlur={onBlur}
          endAdornment={
            showEndAdornment ? (
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
            ) : null
          }
        />
      );

      break;

    default:
      inputEle = (
        <Input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onBlur={onBlur}
          endAdornment={
            showEndAdornment ? (
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
            ) : null
          }
        />
      );
  }

  return (
    <FormControl
      fullWidth={fullWidth}
      variant={variant}
      error={showError}
      sx={fieldCSS}
      disabled={disabled}
    >
      <InputLabel>{label}</InputLabel>
      {inputEle}
    </FormControl>
  );
};

export default CustomFormControl;
