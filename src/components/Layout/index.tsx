import React from "react";

import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props): React.ReactNode => {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </>
  );
};

export default Layout;
