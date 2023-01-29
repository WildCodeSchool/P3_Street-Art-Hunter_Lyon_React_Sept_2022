/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";

import LateralMenu from "../../components/Admin/Global/LateralMenu";
import HeaderAdmin from "../../components/Admin/Global/HeaderAdmin";
import UserModif from "../../components/Admin/ModifUser/UserModif";
import PicturesUser from "../../components/Admin/ModifUser/PicturesUser";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ModifUser() {
  const nav = "/ Utilisateurs / Modification utilisateur";

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex h-screen w-full">
      <LateralMenu />

      <div className="flex flex-col w-full pl-[20rem] justify-center items-center">
        <HeaderAdmin nav={nav} />
        <div className="pt-[10rem] w-[80%]">
          <div className="flex justify-center">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab icon={<PersonPinIcon />} label="User" {...a11yProps(0)} />
              <Tab icon={<FavoriteIcon />} label="Pictures" {...a11yProps(1)} />
            </Tabs>
          </div>

          <TabPanel value={value} index={0}>
            <UserModif />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PicturesUser />
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

export default ModifUser;
