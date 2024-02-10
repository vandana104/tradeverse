import React from "react";
import Sidebar from "./Sidebar";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import {
  MicOutlined,
  NotificationsActiveOutlined,
  SearchOutlined,
} from "@mui/icons-material";
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
function MainSection() {
    const rows = [
        createData('ERU', "The Euro had steadied against the US Dollar on Thusrday market ponders the path of Fed rate hikes",  +1,"Neutral","High"),
        createData('INR', "The Euro had steadied against the US Dollar on Thusrday market ponders the path of Fed rate hikes", +1,"High" ,"High"),
        createData('CAD', "The Euro had steadied against the US Dollar on Thusrday market ponders the path of Fed rate hikes", +1,"Medium", "High"),
        createData('CAD', "The Euro had steadied against the US Dollar on Thusrday market ponders the path of Fed rate hikes",+1,"Low", "High"),
        createData('OIL', "The Euro had steadied against the US Dollar on Thusrday market ponders the path of Fed rate hikes", +1, "Neutral","High"),
      ];
  return (
    <Box display="flex" width="100%">
      <Sidebar />
      {/* Main content */}
      <Box width="100%">
        {/* 1. Nav--Section */}
        <Box display="flex" alignItems="center" justifyContent="space-evenly">
          <Box display="flex" flexDirection="column" width="70%">
            <Box height="40px">
              <Paper
                component="form"
                sx={{
                  border: "2px solid black",
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}>
                <IconButton sx={{ p: "10px" }} aria-label="search">
                  <SearchOutlined />
                </IconButton>
                <InputBase
                  sx={{ flex: 1 }}
                  placeholder="Search your question here or ask TiiA"
                />
                <IconButton sx={{ p: "10px" }} aria-label="mic">
                  <MicOutlined />
                </IconButton>
              </Paper>
            </Box>

            <Typography pt="20px">Current Licence: USD/CAD AUD/USD</Typography>
          </Box>
          <Box>
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center">
              <Badge badgeContent={4} color="primary">
                <NotificationsActiveOutlined color="action" />
              </Badge>
              <Avatar
                alt="Cindy Baker"
                src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_1280.png"
              />
              <select>
                <option>vandana</option>
              </select>
            </Box>
            <Typography>Welcome, Vandana</Typography>
            <Typography>Good to see you again!</Typography>
          </Box>
        </Box>
        {/* 2. Line Graph and Pie chart */}
        <Box></Box>
        {/* 3. Table section */}
        <Box display="flex">
        <TableContainer component={Paper} sx={{border:"2px solid grey"}}>
        <Typography variant="h6"  sx={{ mb: 2, mt: 2 }}>
        Refined News
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="right">News</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">Impact</TableCell>
            <TableCell align="right">Probability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TableContainer component={Paper} sx={{ border: "2px solid grey" }}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableBody>
      {[...Array(10)].map((_, index) => (
        <TableRow
          key={`row-${index}`}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            Focus Topic {index + 1}
          </TableCell>
          
          <TableCell align="right">
            <Button variant="contained" color="primary">
              Score 1
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>;

    
    
        </Box>
      </Box>
    </Box>
  );
}

export default MainSection;
