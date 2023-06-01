import * as React from "react";
import { TableCom } from "../components";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Main from "./Main";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function Dashboard() {
  return (
    <Main>
      <DrawerHeader />
      <h1>CRUD</h1>
      <div className="flex flex-col items-end w-full">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create"
        >
          CREATE
        </Button>
      </div>
      {/* <TableComponent /> */}
      <TableCom />
    </Main>
  );
}
