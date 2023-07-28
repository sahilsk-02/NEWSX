import { Box, styled } from "@mui/material";

//components
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";

const Container = styled(Box)(({ theme }) => ({
  width: "59%",
  margin: "110px auto 0 auto",
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

function App() {
  return (
    <Box>
     <Navbar/>
      <Container>
        <Articles />
      </Container>
    </Box>
  );
}

export default App;
