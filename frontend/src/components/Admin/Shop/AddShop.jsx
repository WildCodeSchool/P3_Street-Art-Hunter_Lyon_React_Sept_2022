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
function AddShop() {
  const { token } = useCurrentUserContext();

  const [shopInfo, setShopInfo] = useState({
    shop_name: "",
    url_shop: "",
    longitude: "0",
    latitude: "0",
  });

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [setOpenWrong] = React.useState(false);
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

  const handleForm = (e) => {
    e.preventDefault();

    if (shopInfo.password === shopInfo.verifPassword) {
      const myHeaders = new Headers({
        Authorization: `Bearer ${token}`,
      });
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        shop_name: shopInfo.shop_name,
        url_shop: shopInfo.url_shop,
        longitude: shopInfo.longitude,
        latitude: shopInfo.latitude,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      fetch(`${backURL}/shop`, requestOptions).catch(console.error);

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
              <div className="flex items-center justify-center mb-2 w-full">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                >
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start mb-4">
              <label className="font-main-font text-2xl" htmlFor="shop_name">
                shop_name
              </label>
              <input
                onChange={(e) =>
                  setShopInfo({ ...shopInfo, shop_name: e.target.value })
                }
                name="shop_name"
                id="shop_name"
                className="text-black rounded-md w-[80%]"
                type="text"
                placeholder="shop_name"
                required
              />
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="flex justify-around items-center mb-4">
                <div className="flex flex-col justify-center items-start ">
                  <label className="font-main-font text-2xl" htmlFor="url_shop">
                    url_shop
                  </label>

                  <input
                    onChange={(e) =>
                      setShopInfo({ ...shopInfo, url_shop: e.target.value })
                    }
                    name="url_shop"
                    id="url_shop"
                    className="text-black rounded-md w-[80%]"
                    type="text"
                    placeholder="url_shop"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label
                    className="font-main-font text-2xl"
                    htmlFor="longitude"
                  >
                    longitude
                  </label>
                  <input
                    onChange={(e) =>
                      setShopInfo({ ...shopInfo, longitude: e.target.value })
                    }
                    name="longitude"
                    id="longitude"
                    className="text-black rounded-md w-[80%]"
                    type="text"
                    placeholder="longitude"
                    required
                  />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <label
                    className="font-main-font text-2xl"
                    htmlFor="longitude"
                  >
                    latitude
                  </label>
                  <input
                    onChange={(e) =>
                      setShopInfo({ ...shopInfo, latitude: e.target.value })
                    }
                    name="latitude"
                    id="latitude"
                    className="text-black rounded-md w-[80%]"
                    type="text"
                    placeholder="latitude"
                    required
                  />
                </div>
              </div>
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
              Création de shop
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Le shop a été crée avec succès
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<DoneIcon />}
                autoFocus
                onClick={() => {
                  navigate("/Admin-Shop");
                }}
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

export default AddShop;
