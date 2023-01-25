import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { visuallyHidden } from "@mui/utils";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

import Vincent from "../../../assets/Vincent.png";
import { useCurrentUserContext } from "../../../contexts/userContext";

function EnhancedTableToolbar(props) {
  const navigate = useNavigate();
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} sélectionné
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          <p className="font-main-font text-[2rem]">
            Oeuvres en attente de validation
          </p>
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Supprimer">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <IconButton
          onClick={() => {
            navigate("/Admin-Create-User");
          }}
        >
          <AddIcon />
          <p className="pl-1 text-[14px]">Ajouter</p>
        </IconButton>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: "work_name",
    numeric: false,
    disablePadding: true,
    label: "Nom de l'oeuvre",
  },
  {
    id: "longitude",
    numeric: true,
    disablePadding: false,
    label: "Longitude",
  },
  {
    id: "latitude",
    numeric: true,
    disablePadding: false,
    label: "Latitude",
  },
  {
    id: "value_point",
    numeric: true,
    disablePadding: false,
    label: "Valeur",
  },
  {
    id: "artist_id",
    numeric: true,
    disablePadding: false,
    label: "Artiste",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const backURL = import.meta.env.VITE_BACKEND_URL;

function BoardValidation() {
  const { token, setId } = useCurrentUserContext();
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);

  const myHeaders = new Headers({
    Authorization: `Bearer ${token}`,
  });
  myHeaders.append("Content-Type", "application/json");

  useEffect(() => {
    fetch(`${backURL}/works`)
      .then((result) => result.json())
      .then((result) => {
        setRows(result);
      });
  }, []);

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("email");
  const [selected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (pseudo) => selected.indexOf(pseudo) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <div className="w-full pt-40">
      <div className="w-full flex justify-center items-center" />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {rows
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.pseudo);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.work_name}
                      selected={isItemSelected}
                      className="cursor-pointer"
                    >
                      {row.is_validated === 0 && (
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="2"
                          onClick={() => {
                            navigate("/Admin-Validate-Work");
                            setId(row.id);
                          }}
                        >
                          <div className="flex items-center">
                            <Avatar
                              alt="avatar"
                              src={Vincent}
                              className="mr-4"
                            />
                            {row.work_name}
                          </div>
                        </TableCell>
                      )}

                      {row.is_validated === 0 && (
                        <TableCell
                          align="right"
                          onClick={() => {
                            navigate("/Admin-Validate-Work");
                            setId(row.id);
                          }}
                        >
                          {row.longitude}
                        </TableCell>
                      )}
                      {row.is_validated === 0 && (
                        <TableCell
                          align="right"
                          onClick={() => {
                            navigate("/Admin-Validate-Work");
                            setId(row.id);
                          }}
                        >
                          {row.latitude}
                        </TableCell>
                      )}
                      {row.is_validated === 0 && (
                        <TableCell
                          align="right"
                          onClick={() => {
                            navigate("/Admin-Validate-Work");
                            setId(row.id);
                          }}
                        >
                          {row.value_point}
                        </TableCell>
                      )}

                      {row.is_validated === 0 && (
                        <TableCell
                          align="right"
                          onClick={() => {
                            navigate("/Admin-Validate-Work");
                            setId(row.id);
                          }}
                        >
                          {row.artist_id}
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default BoardValidation;
