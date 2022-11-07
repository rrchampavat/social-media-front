import { Box } from "@mui/material";
import { flexMiddle } from "../../assets/commonStyles";
import Feed from "./components/Feed";

const Home = () => {
  return (
    <Box sx={flexMiddle}>
      <Feed />
    </Box>
  );
};

export default Home;
