import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "..";
import { logo } from "../../constants";
import { colors } from "./../../constants/colors";


function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: colors.primary,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="" height={70} width = {100}
        />
      </Link>
      <SearchBar/>
      <Box />
    </Stack>
  );
}

export default Navbar;
