import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";

import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";

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
function AddUser() {
  const { token } = useCurrentUserContext();

  const [userInfo, setUserInfo] = useState({
    pseudo: "",
    firstname: "",
    lastname: "",
    scorepoint: "0",
    isAdmin: false,
    email: "",
    password: "",
    verifPassword: "",
  });

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openWrong, setOpenWrong] = React.useState(false);
  const navigate = useNavigate();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const handleClickOpenWrong = () => {
    setOpenWrong(true);
  };

  const handleCloseWrong = () => {
    setOpenWrong(false);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (userInfo.password === userInfo.verifPassword) {
      const myHeaders = new Headers({
        Authorization: `Bearer ${token}`,
      });
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        is_admin: userInfo.isAdmin,
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        scorepoint: userInfo.scorepoint,
        pseudo: userInfo.pseudo,
        email: userInfo.email,
        password: userInfo.password,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      fetch(`${backURL}/addUsers`, requestOptions).catch(console.error);

      handleClickOpenConfirm();
    } else {
      handleClickOpenWrong();
    }
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
                className="bg-black p-1 w-[14%] h-[12vh] rounded-full mb-4 "
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
            <div className="flex flex-col justify-center items-start mb-4">
              <label className="font-main-font text-2xl" htmlFor="pseudo">
                Pseudo
              </label>
              <input
                onChange={(e) =>
                  setUserInfo({ ...userInfo, pseudo: e.target.value })
                }
                name="Pseudo"
                id="Pseudo"
                className="text-black rounded-md w-[80%]"
                type="text"
                placeholder="Pseudo"
                required
              />
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="flex justify-around items-center mb-4">
                <div className="flex flex-col justify-center items-start ">
                  <label
                    className="font-main-font text-2xl"
                    htmlFor="firstname"
                  >
                    Prénom
                  </label>

                  <input
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, firstname: e.target.value })
                    }
                    name="firstname"
                    id="firstName"
                    className="text-black rounded-md w-[80%]"
                    type="text"
                    placeholder="Prénom"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label className="font-main-font text-2xl" htmlFor="lastname">
                    Nom
                  </label>
                  <input
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, lastname: e.target.value })
                    }
                    name="lastname"
                    id="lastName"
                    className="text-black rounded-md w-[80%]"
                    type="text"
                    placeholder="Nom"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label className="font-main-font text-2xl" htmlFor="email">
                    E-mail
                  </label>

                  <input
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                    name="Adresse-email"
                    id="email"
                    className="text-black rounded-md w-[80%]"
                    type="email"
                    placeholder="E-mail"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center items-center mb-4">
                <div className="flex flex-col justify-center items-start">
                  <label className="font-main-font text-2xl" htmlFor="password">
                    Mot de passe
                  </label>

                  <input
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, password: e.target.value })
                    }
                    name="password"
                    id="password"
                    className="text-black rounded-md w-[80%]"
                    type="password"
                    placeholder="Mot de passe"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label
                    className="font-main-font text-2xl"
                    htmlFor="verifpassword"
                  >
                    Confirmer le mot de passe
                  </label>

                  <input
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        verifPassword: e.target.value,
                      })
                    }
                    name="verifpassword"
                    id="verifpassword"
                    className="text-black rounded-md w-[80%]"
                    type="password"
                    placeholder="Mot de passe"
                    required
                  />
                </div>
              </div>

              <div className="flex justif-center items-center mb-4">
                <div className="flex flex-col justify-center items-start">
                  <label className="font-main-font text-2xl" htmlFor="score">
                    Score
                  </label>

                  <input
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, scorepoint: e.target.value })
                    }
                    id="score"
                    className="text-black rounded-md w-[80%]"
                    type="number"
                    placeholder="Score"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label className="font-main-font text-2xl" htmlFor="badge">
                    Badge
                  </label>
                  <input
                    id="badge"
                    className="text-black rounded-md w-[80%]"
                    type="number"
                    placeholder="Badge"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start mb-4">
              <label className="font-main-font text-2xl" htmlFor="droit">
                Droit:
              </label>

              <select
                onChange={(e) =>
                  setUserInfo({ ...userInfo, isAdmin: e.target.value })
                }
                className="rounded-md"
                name="droit"
                id="droit"
                required
              >
                <option value={0}>Utilisateur</option>
                <option value={1}>Administrateur</option>
              </select>
            </div>
            <div className="w-full flex justify-around items-center mt-[2rem]">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<CloseIcon />}
              >
                <input type="reset" value="ANNULER" />
              </Button>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                startIcon={<AddIcon />}
              >
                créer
              </Button>
            </div>
          </div>

          <Dialog
            className="ml-40"
            fullScreen={fullScreen}
            open={openConfirm}
            onClose={handleCloseConfirm}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              Création de l'utilisateur
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                L'utilisateur a été crée avec succès
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<DoneIcon />}
                autoFocus
                onClick={() => {
                  navigate("/Admin-User");
                }}
              >
                D'accord
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            className="ml-40"
            fullScreen={fullScreen}
            open={openWrong}
            onClose={handleCloseWrong}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              Mot de passe invalide
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Veuillez rentrer le même mot de passe
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<DoneIcon />}
                autoFocus
                onClick={handleCloseWrong}
              >
                D'accord
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default AddUser;
