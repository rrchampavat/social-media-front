import { Box, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import CustomBotton from "./CustomBotton";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => (
  <Box
    height={window.screen.height}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <Typography>Something went wrong:</Typography>
    <Typography color="red" my={1}>
      {error.message}
    </Typography>
    <CustomBotton
      label="Try Again"
      variant="contained"
      handleClick={resetErrorBoundary}
    />
  </Box>
);

interface ErrorBoundaryLayoutProps {
  children: ReactNode;
}

const ErrorBoundaryLayout: FC<ErrorBoundaryLayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};

export default ErrorBoundaryLayout;
