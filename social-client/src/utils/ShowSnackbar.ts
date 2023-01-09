import { useSnackbar } from "notistack";

interface ShowSnackbarProps {
  variant: "success" | "error" | "warning" | "info";
  message: string;
}

const ShowSnackbar = (props: ShowSnackbarProps) => {
  const { variant, message } = props;
  const { enqueueSnackbar } = useSnackbar();

  return enqueueSnackbar(message, {
    variant: variant,
  });
};

export default ShowSnackbar;
