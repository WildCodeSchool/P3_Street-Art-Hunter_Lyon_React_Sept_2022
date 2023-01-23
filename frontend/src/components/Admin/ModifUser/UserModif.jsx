/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";

import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";

import DeleteIcon from "@mui/icons-material/Delete";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import Vincent from "../../../assets/Vincent.png";
import { useCurrentUserContext } from "../../../contexts/userContext";

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

const backURL = import.meta.env.VITE_BACKEND_URL;

function UserModif() {
  const { token, id } = useCurrentUserContext();
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const navigate = useNavigate();

  const [pseudo, setPseudo] = useState(user.pseudo);
  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [scorepoint, setScorepoint] = useState(user.scorepoint);
  const [isAdmin, setIsAdmin] = useState(user.is_admin);
  const [email, setEmail] = useState(user.email);

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleClickOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleEdit = () => {
    {
      !edit ? setEdit(true) : null;
    }
  };

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  const GETrequestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const DELETErequestOptions = {
    method: "DELETE",
    headers: myHeaders,
  };

  // Request options pour la mise à jour de la bdd
  const body = JSON.stringify({
    is_admin: isAdmin,
    firstname,
    lastname,
    scorepoint,
    pseudo,
    email,
  });

  const PUTrequestOptions = {
    method: "PUT",
    headers: myHeaders,
    body,
  };

  // fonction qui met à jour le status de l'utilisateur avec les PUT options ci-dessus

  const handleForm = (e) => {
    e.preventDefault();

    fetch(`${backURL}/users/${id}`, PUTrequestOptions).catch(console.error);

    navigate("/Admin-User");
  };

  useEffect(() => {
    fetch(`${backURL}/users/${id}`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setUser(result);
      });
  }, []);

  const handleDelete = () => {
    fetch(`${backURL}/users/${id}`, DELETErequestOptions);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-[12rem] w-full">
        <form
          className="w-full flex justify-center items-center"
          onSubmit={handleForm}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="w-full mr-[3rem] flex flex-col justify-center items-center mb-4">
              <img
                alt="avatar"
                src={Vincent}
                className="bg-black p-1 w-[18%] h-[16vh] rounded-full mb-4 "
              />
              <div className="flex items-center justify-center mb-2 w-full">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <input hidden accept="image/*" type="file" />
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start mb-8">
              <label className="font-main-font text-2xl" htmlFor="pseudo">
                Pseudo
              </label>
              {!edit ? (
                <input
                  className="text-black rounded-md w-[80%]"
                  type="text"
                  readOnly
                  defaultValue={user.pseudo}
                />
              ) : (
                <input
                  onChange={(e) => setPseudo(e.target.value)}
                  name="Pseudo"
                  id="Pseudo"
                  className="text-blue-500 rounded-md w-[80%]"
                  type="text"
                  defaultValue={user.pseudo}
                />
              )}
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="flex justify-around items-center mb-8">
                <div className="flex flex-col justify-center items-start ">
                  <label
                    className="font-main-font text-2xl"
                    htmlFor="firstname"
                  >
                    Prénom
                  </label>
                  {!edit ? (
                    <input
                      className="text-black rounded-md w-[80%]"
                      type="text"
                      readOnly
                      defaultValue={user.firstname}
                    />
                  ) : (
                    <input
                      onChange={(e) => setFirstName(e.target.value)}
                      name="firstname"
                      id="firstname"
                      className="text-blue-500 rounded-md w-[80%]"
                      type="text"
                      defaultValue={user.firstname}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label className="font-main-font text-2xl" htmlFor="lastname">
                    Nom
                  </label>
                  {!edit ? (
                    <input
                      className="text-black rounded-md w-[80%]"
                      type="text"
                      readOnly
                      defaultValue={user.lastname}
                    />
                  ) : (
                    <input
                      onChange={(e) => setLastName(e.target.value)}
                      name="lastname"
                      id="lastname"
                      className="text-blue-500 rounded-md w-[80%]"
                      type="text"
                      defaultValue={user.lastname}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label className="font-main-font text-2xl" htmlFor="email">
                    E-mail
                  </label>
                  {!edit ? (
                    <input
                      className="text-black rounded-md w-[80%]"
                      type="email"
                      readOnly
                      defaultValue={user.email}
                    />
                  ) : (
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      id="email"
                      className="text-blue-500 rounded-md w-[80%]"
                      type="email"
                      defaultValue={user.email}
                    />
                  )}
                </div>
              </div>
              <div className="flex justif-center items-center mb-8">
                <div className="flex flex-col justify-center items-start">
                  <label
                    className="font-main-font text-2xl"
                    htmlFor="scorepoint"
                  >
                    Score
                  </label>
                  {!edit ? (
                    <input
                      className="text-black rounded-md w-[80%]"
                      type="number"
                      readOnly
                      defaultValue={user.scorepoint}
                    />
                  ) : (
                    <input
                      onChange={(e) => setScorepoint(e.target.value)}
                      name="scorepoint"
                      id="scorepoint"
                      className="text-blue-500 rounded-md w-[80%]"
                      type="number"
                      defaultValue={user.scorepoint}
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label className="font-main-font text-2xl" htmlFor="badge">
                    Badge
                  </label>
                  {!edit ? (
                    <input
                      className="text-black rounded-md w-[80%]"
                      type="number"
                      readOnly
                      defaultValue={2}
                    />
                  ) : (
                    <input
                      name="badge"
                      id="badge"
                      className="text-blue-500 rounded-md w-[80%]"
                      type="number"
                      defaultValue={2}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start mb-8">
              <label className="font-main-font text-2xl" htmlFor="droit">
                Droit:
              </label>
              {!edit ? (
                <select
                  value={user.is_admin}
                  className="rounded-md"
                  name="droit"
                  id="droit"
                  disabled
                >
                  <option value={0}>Utilisateur</option>
                  <option value={1}>Administrateur</option>
                </select>
              ) : (
                <select
                  defaultValue={0}
                  className="rounded-md text-blue-500"
                  name="droit"
                  id="droit"
                  onChange={(e) => setIsAdmin(e.target.value)}
                >
                  <option value={0}>Utilisateur</option>
                  <option value={1}>Administrateur</option>
                </select>
              )}
            </div>
            <div className="w-full flex justify-around items-center mt-[2rem]">
              <Button
                onClick={handleEdit}
                variant="outlined"
                color="primary"
                startIcon={<EditIcon />}
              >
                Modifier
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<SaveIcon />}
                onClick={handleClickOpenConfirm}
              >
                Sauvegarder
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={handleClickOpenDelete}
              >
                Supprimer
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<CloseIcon />}
              >
                <input type="reset" value="ANNULER" />
              </Button>
            </div>
          </div>

          <Dialog
            fullScreen={fullScreen}
            open={openDelete}
            onClose={handleCloseDelete}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              Supprimer l'utilisateur
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Êtes-vous sûr de vouloir supprimer l'utilisateur ? Cette action
                est irréversible.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<CloseIcon />}
                autoFocus
                onClick={handleCloseDelete}
              >
                Annuler
              </Button>

              <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => {
                  handleDelete();
                  navigate("/Admin-User");
                }}
                autoFocus
              >
                Supprimer
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            fullScreen={fullScreen}
            open={openConfirm}
            onClose={handleCloseConfirm}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              Supprimer l'utilisateur
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Êtes-vous sûr de vouloir supprimer l'utilisateur ? Cette action
                est irréversible.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<CloseIcon />}
                autoFocus
                onClick={handleCloseConfirm}
              >
                Annuler
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<DoneIcon />}
                onClick={() => {
                  handleCloseConfirm();
                  navigate("/Admin-User");
                }}
                autoFocus
              >
                Confirmer
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default UserModif;
