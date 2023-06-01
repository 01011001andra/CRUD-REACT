import React from "react";
import { styled } from "@mui/material/styles";
import Main from "./Main";
import { CreateForm } from "../components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Create = () => {
  return (
    <Main>
      <DrawerHeader />
      <h1>Create</h1>
      <div className="flex flex-col items-end w-full">
        <Button variant="contained" color="primary" component={Link} to="/">
          BACK
        </Button>
      </div>
      <CreateForm />
    </Main>
  );
};

export default Create;
