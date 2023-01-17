import * as React from "react";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";

import DeleteIcon from "@mui/icons-material/Delete";

import NativeSelect from "@mui/material/NativeSelect";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Vincent from "../../../assets/Vincent.png";

let theme = createTheme({
  palette: {
    primary: {
      main: "#1266C5",
    },
    secondary: {
      main: "#D52B06",
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

function UserModif() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className="flex flex-col justify-center items-center">
          <img
            alt="avatar"
            src={Vincent}
            className="bg-black p-1 w-[13%] h-[20vh] rounded-full mb-10 "
          />
          <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
            Sauvegarder
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Supprimer{" "}
          </Button>

          <div className="m-4">
            <FormControl variant="filled">
              <InputLabel htmlFor="component-filled">Pseudo</InputLabel>
              <FilledInput id="component-filled" defaultValue="Guacamole" />
            </FormControl>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <div className="m-4">
                <FormControl variant="filled">
                  <InputLabel htmlFor="component-filled">Prénom</InputLabel>
                  <FilledInput id="component-filled" defaultValue="Dix" />
                </FormControl>
              </div>
              <div className="m-4">
                <FormControl variant="filled">
                  <InputLabel htmlFor="component-filled">Nom</InputLabel>
                  <FilledInput id="component-filled" defaultValue="Dier" />
                </FormControl>
              </div>
              <div className="m-4">
                <FormControl variant="filled">
                  <InputLabel htmlFor="component-filled">Mail</InputLabel>
                  <FilledInput
                    id="component-filled"
                    defaultValue="guac@mail.com"
                  />
                </FormControl>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="m-4">
              <FormControl variant="filled">
                <InputLabel htmlFor="component-filled">Score</InputLabel>
                <FilledInput id="component-filled" defaultValue="2000" />
              </FormControl>
            </div>
            <div className="m-4">
              <FormControl variant="filled">
                <InputLabel htmlFor="component-filled">Badge</InputLabel>
                <FilledInput id="component-filled" defaultValue="3" />
              </FormControl>
            </div>
          </div>
          <div className="m-4 w-[20%]">
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Droit
              </InputLabel>
              <NativeSelect
                defaultValue={10}
                inputProps={{
                  name: "Droit",
                  id: "uncontrolled-native",
                }}
              >
                <option value={10}>Utilisateur</option>
                <option value={20}>Administrateur</option>
              </NativeSelect>
            </FormControl>
          </div>
        </div>
        <div className="flex justify-around items-center mt-20">
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<CloseIcon />}
          >
            Annuler
          </Button>
          <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
            Sauvegarder
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Supprimer
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default UserModif;
