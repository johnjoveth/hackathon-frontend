import React, {useEffect, useState} from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from 'axios';
// import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Equipments = () => {

  const [equipments, setEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEquipments = async() => {
    setIsLoading(true);
    const result = await axios.get('/equipments');
    setEquipments(await result.data);
    setIsLoading(false);
  }

  useEffect(() =>{
    fetchEquipments();
    console.log(equipments)
   },[])


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Equipment",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "temperature",
      headerName: "Temperature",
      flex: 1,
    },
    {
      field: "humid",
      headerName: "Humidity",
      flex: 1,
    },
    {
      field: "active",
      headerName: "Active",
      flex: 1,
      // renderCell: (params) => (
      //   <Typography color={colors.greenAccent[500]}>
      //     ${params.row.cost}
      //   </Typography>
      // ),
    },
    {
      field: "nextPM",
      headerName: "Next Maintenance",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="EQUIPMENTS" subtitle="List of equipments" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection getRowId={(row) => row._id} rows={equipments} columns={columns} />
      </Box>
    </Box>
  );
};

export default Equipments;
