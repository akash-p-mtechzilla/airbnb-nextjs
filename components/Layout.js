import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import NavbarLarge from "./NavbarLarge";

const Layout = ({ children }) => {
  return (
    <div>
      <Box display={["inline", "inline", "none", "none", "none"]}>
        <Navbar />
      </Box>
      <Box display={["none", "none", "inline", "inline", "inline"]}>
        <NavbarLarge />
      </Box>

      {children}
    </div>
  );
};

export default Layout;
