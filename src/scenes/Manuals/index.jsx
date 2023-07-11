import React, {useEffect, useState} from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from 'axios';
import Header from "../../components/Header";

const Manuals = () => {

  const [manual, setManual] = useState([]);

  const fetchManuals = async() => {
    const result = await axios.get('/manual');
    setManual(await result.data);
  }

  useEffect(() =>{
    fetchManuals();
    console.log(manual)
   })


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Equipment Name",
      flex: 0.3,
      // cellClassName: "name-column--cell",
    },
    {
      field: "troubleShootStep",
      headerName: "Troubleshooting Step",
      flex: 1,
      renderCell: (params) => (
        <Typography style={{ whiteSpace: 'pre-line' }}>
          {
            params.value.join(' \n')
          }
        </Typography>
      )
    },
    {
      field: "escapeRoute",
      headerName: "Escape Route",
      flex: 1,
      renderCell: (params) => (
        <div style={{ justifyContent: 'center', display: 'block'}}>
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          <img src={params.value} alt="Escape Route" style={{ width: 250, height: 250}} />
        </a>
        </div>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="MANUALS" subtitle="List of equipment manuals" />
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
          '& .temp.cold': {
            color: `${colors.greenAccent[200]} !important`,
          },
          '& .temp.hot': {
            color: `${colors.redAccent[500]} `,
          },
        }}
      >
        <DataGrid checkboxSelection 
                  rowHeight={300}
                  getRowId={(row) => row._id}
                  rows={manual}
                  columns={columns}
                  />
      </Box>
    </Box>
  );
};

export default Manuals;
