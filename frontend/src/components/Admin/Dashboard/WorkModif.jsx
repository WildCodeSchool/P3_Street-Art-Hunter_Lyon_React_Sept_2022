/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import isConnected from "@services/isConnected";

import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";

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

function WorkModif() {
  const { token, id, setUser } = useCurrentUserContext();

  const [openDelete, setOpenDelete] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [showWork, setShowWork] = React.useState([]);
  const [is_validated, setIs_Validated] = React.useState(false);
  const [picture, setPicture] = React.useState("");

  const navigate = useNavigate();

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

  const body = JSON.stringify({
    is_validated,
    added_by: showWork.added_by,
  });

  const PUTrequestOptions = {
    method: "PUT",
    headers: myHeaders,
    body,
  };

  useEffect(() => {
    const fetchImage = async () => {
      const fetchedImg = await fetch(
        `${backURL}/${id}/pictures`,
        GETrequestOptions
      ).then((result) => result.json());

      setPicture(fetchedImg[0]);
    };
    fetchImage();
  }, []);

  const handleValidation = () => {
    setIs_Validated(true);

    fetch(`${backURL}/works/${id}`, PUTrequestOptions).catch(console.error);

    navigate("/Admin-Works");
  };

  useEffect(() => {
    fetch(`${backURL}/works/${id}`, GETrequestOptions)
      .then((result) => {
        if (!isConnected(result)) {
          localStorage.clear();
          navigate("/");
          setUser("");
          navigate("/");
        }
        return result;
      })
      .then((result) => result.json())
      .then((result) => {
        setShowWork(result);
      });
  }, []);

  const handleDelete = () => {
    fetch(`${backURL}/works/${id}`, DELETErequestOptions);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-[12rem] w-full">
        <form className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="w-full mr-[3rem] flex flex-col justify-center items-center mb-4">
              <img
                src={picture.picture_url}
                alt="avatar"
                className="w-[40%] h-[30vh] mb-4 rounded"
              />
            </div>
            <div className="flex flex-col justify-center items-start mb-8">
              <label className="font-main-font text-2xl" htmlFor="work_name">
                Nom de l'oeuvre
              </label>
              <input
                className="text-black rounded-md w-[80%]"
                type="text"
                readOnly
                defaultValue={showWork.work_name}
              />
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="flex justify-around items-center mb-8">
                <div className="flex flex-col justify-center items-start ">
                  <label
                    className="font-main-font text-2xl"
                    htmlFor="longitude"
                  >
                    Longitude
                  </label>

                  <input
                    className="text-black rounded-md w-[80%]"
                    type="number"
                    readOnly
                    defaultValue={showWork.longitude}
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label className="font-main-font text-2xl" htmlFor="latitude">
                    Latitude
                  </label>

                  <input
                    className="text-black rounded-md w-[80%]"
                    type="number"
                    readOnly
                    defaultValue={showWork.latitude}
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label
                    className="font-main-font text-2xl"
                    htmlFor="value_point"
                  >
                    Valeur
                  </label>

                  <input
                    className="text-black rounded-md w-[80%]"
                    type="number"
                    readOnly
                    defaultValue={showWork.value_point}
                  />
                </div>
              </div>
              <div className="flex justify-around items-center mb-8">
                <div className="flex justif-center items-center mb-8">
                  <div className="flex flex-col justify-center items-start">
                    <label
                      className="font-main-font text-2xl"
                      htmlFor="artist_id"
                    >
                      ID de l'artiste
                    </label>

                    <input
                      className="text-black rounded-md w-[80%]"
                      type="number"
                      readOnly
                      defaultValue={showWork.artist_id}
                    />
                  </div>
                </div>
                <div className="flex justif-center items-center mb-8">
                  <div className="flex flex-col justify-center items-start">
                    <label
                      className="font-main-font text-2xl"
                      htmlFor="artist_id"
                    >
                      Ajouter par :
                    </label>

                    <input
                      className="text-black rounded-md w-[80%]"
                      type="text"
                      readOnly
                      defaultValue={showWork.added_by}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-around items-center mt-[2rem]">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<CloseIcon />}
                onClick={handleClickOpenDelete}
              >
                Refuser
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DoneIcon />}
                onClick={handleClickOpenConfirm}
              >
                Approuver
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
              Refuser l'oeuvre
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Êtes-vous sûr de vouloir refuser ? Cette action est
                irréversible.
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
                  navigate("/Admin-Works");
                }}
                autoFocus
              >
                Confirmer
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
              Approuver l'oeuvre
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Êtes-vous sûr de vouloir approuver cette oeuvre ?
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
                  handleValidation();
                  handleCloseConfirm();
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

export default WorkModif;
