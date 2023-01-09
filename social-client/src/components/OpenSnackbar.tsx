import { Alert, Snackbar } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import Slide, { SlideProps } from "@mui/material/Slide";

interface OpenSnackbarProps {
  severity: "success" | "error" | "warning" | "info";
  snackbarOpen: boolean;
  message: string;
}

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

const OpenSnackbar: FunctionComponent<OpenSnackbarProps> = (props) => {
  const { severity, snackbarOpen, message } = props;
  // console.log("clg  message", message);

  const [open, setOpen] = useState<boolean>(true);
  const [transition, setTransition] = useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  useEffect(() => {
    setTransition(() => TransitionLeft);
  }, []);

  useEffect(() => {
    setOpen(snackbarOpen);
  }, [snackbarOpen]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      TransitionComponent={transition}
      key={transition ? transition.name : ""}
    >
      <Alert severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default OpenSnackbar;
