import { useSnackbar } from "notistack";

interface UseSnackbarProps {
  variant: "success" | "error" | "warning" | "info";
  message: string;
}

const useSnackbarMsg = (props: UseSnackbarProps) => {
  const { variant, message } = props;
  const { enqueueSnackbar } = useSnackbar();

  return enqueueSnackbar(message, {
    variant: variant,
  });
};

export default useSnackbarMsg;
