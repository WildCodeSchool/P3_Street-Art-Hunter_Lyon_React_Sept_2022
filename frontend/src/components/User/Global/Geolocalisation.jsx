/* eslint-disable no-unused-expressions */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Geolocalisation() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  // eslint-disable-next-line no-lone-blocks
  {
    !open
      ? navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.warn(latitude, longitude);
          },
          (err) => {
            console.error(err);
          }
        )
      : null;
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Autoriser la géolocalisation ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Pour utiliser l'application, nous avons besoin de connaître votre
            géolocalisation. Autorisez-vous l'application à connaître votre
            positon ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            D'accord
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Geolocalisation;
