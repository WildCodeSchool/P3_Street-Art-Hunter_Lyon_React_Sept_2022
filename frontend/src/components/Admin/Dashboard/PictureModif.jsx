/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";

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

function PictureModif() {
  const { token, id } = useCurrentUserContext();

  const [openDelete, setOpenDelete] = React.useState(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [showWork, setShowWork] = React.useState([]);
  const [is_reported, setIs_Reported] = React.useState(true);
  const [showPictureWork, setShowPictureWork] = useState([]);

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
    is_reported,
  });

  const PUTrequestOptions = {
    method: "PUT",
    headers: myHeaders,
    body,
  };

  const handleValidation = () => {
    setIs_Reported(false);
    fetch(
      `${backURL}/pictures/unreport/${showWork.id}`,
      PUTrequestOptions
    ).catch(console.error);

    navigate("/Admin-Reported");
  };

  useEffect(() => {
    fetch(`${backURL}/pictures/${id}`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setShowWork(result);
      });
  }, []);

  useEffect(() => {
    fetch(`${backURL}/${showWork.work_id}/pictures`, GETrequestOptions)
      .then((result) => result.json())
      .then((result) => {
        setShowPictureWork(result[0]);
      });
  }, [showWork]);

  const handleDelete = () => {
    fetch(`${backURL}/pictures/${id}`, DELETErequestOptions);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="pt-[12rem] w-full">
        <form className="w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex w-full">
              <div className="w-full mr-[3rem] flex flex-col justify-center items-center mb-4">
                <p>Photo signalée:</p>
                <img
                  alt="Signalée"
                  src={showWork.picture_url}
                  className=" h-[50vh] mb-4 rounded"
                />
              </div>
              <div className="w-full mr-[3rem] flex flex-col justify-center items-center mb-4">
                <p>Photo de l'oeuvre:</p>

                <img
                  alt="Oeuvre"
                  src={showPictureWork ? showPictureWork.picture_url : ""}
                  className=" h-[50vh] mb-4 rounded"
                />
              </div>
            </div>

            <div className="w-full flex justify-around items-center mt-[2rem]">
              <Button
                variant="contained"
                color="secondary"
                startIcon={<CloseIcon />}
                onClick={handleClickOpenDelete}
              >
                Supprimer
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DoneIcon />}
                onClick={handleClickOpenConfirm}
              >
                Garder
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

export default PictureModif;
