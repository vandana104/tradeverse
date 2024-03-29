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
import Charts from "./Charts";
import Donut from "./Donut";

function createData(name, news, score, impact, probability) {
  return { name, news, score, impact, probability };
}
function MainSection() {
  const rows = [
    createData(
      "ERU",
      "The Euro had steadied against the US Dollar on Thusrday market ponders the path of Fed rate hikes",
      +1,
      "Neutral",
      "High",
    ),
    createData(
      "INR",
      "The Euro had steadied against the US Dollar on Thusrday market ponders the path of Fed rate hikes",
      +1,
      "High",
      "High",
    ),
    createData(
      "CAD",
      "The Euro had steadied against the US Dollar on Thusrday market ponders the path of Fed rate hikes",
      +1,
      "Medium",
      "High",
    ),
    createData(
      "CAD",
      "The Euro had steadied against the US Dollar on Thusrday market ponders the path of Fed rate hikes",
      +1,
      "Low",
      "High",
    ),
    createData(
      "OIL",
      "The Euro had steadied against the US Dollar on Thusrday market ponders the path of Fed rate hikes",
      +1,
      "Neutral",
      "High",
    ),
  ];
  return (
    <Box display="flex" width="100%">
      <Sidebar />
      {/* Main content */}
      <Box width="100%">
        {/* 1. Nav--Section */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          pb="20px">
          <Box display="flex" flexDirection="column" width="70%">
            <Box height="40px">
              <Paper
                component="form"
                sx={{
                  border: "1px solid grey",
                  p: "2px 4px ",
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
                  <MicOutlined sx={{ color: "#4287f5" }} />
                </IconButton>
              </Paper>
            </Box>

            <Typography pt="20px">
              <span style={{ color: "#4287f5" }}>Current Licence </span>:
              USD/CAD AUD/USD
            </Typography>
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
              <select style={{ border: "none", outline: "none" }}>
                <option>vandana</option>
              </select>
            </Box>
            <Typography>Welcome, Vandana</Typography>
            <Typography>Good to see you again!</Typography>
          </Box>
        </Box>
        {/* 2. Line Graph and Pie chart */}
        <Box>{/* <BasicScatter/> */}</Box>
        <Box sx={{display:"flex" , ml:"30px", height:"300px" , width:"100%"}}>
          <Charts />
          <Donut />
        </Box>
        {/* 3. Table section */}
        <Box
          display="flex"
          pt="40px"
          // width="100%"
          height="auto"
          justifyContent="space-evenly"
          // gap="5rem"
        >
          <TableContainer
            component={Paper}
            sx={{ border: "1px solid grey", width: "65%" }}>
            <Typography variant="h6" sx={{ mt: 1, ml: 2 }}>
              Refined News
            </Typography>
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ background: "#e6ecf5" }}>Type</TableCell>
                  <TableCell sx={{ background: "#e6ecf5" }}>News</TableCell>
                  <TableCell sx={{ background: "#e6ecf5" }}>Score</TableCell>
                  <TableCell sx={{ background: "#e6ecf5" }}>Impact</TableCell>
                  <TableCell sx={{ background: "#e6ecf5" }}>
                    Probability
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell
                      sx={{ fontSize: "12px" }}
                      component="th"
                      scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell sx={{ fontSize: "12px" }}>{row.news}</TableCell>
                    <TableCell sx={{ fontSize: "12px" }}>{row.score}</TableCell>
                    <TableCell sx={{ fontSize: "12px" }}>
                      {row.impact}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{
                          backgroundColor: "#becfe6",
                          color: "#355b8c",
                          fontSize: "10px",
                          "&:hover": {
                            color: "#fff",
                          },
                        }}>
                        {row.probability}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer
            component={Paper}
            sx={{ border: "1px solid grey", width: "25%" }}>
            <Typography variant="h6" sx={{ mt: 1, ml: 2 }}>
              Top 10 Focus Topics
            </Typography>
            <Table
              sx={{ minWidth: 200 }}
              aria-label="simple table"
              size="small">
              <TableBody>
                {[...Array(10)].map((_, index) => (
                  <TableRow
                    key={`row-${index}`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontSize: "12px" }}>
                      Focus Topic {index + 1}
                    </TableCell>

                    <TableCell>
                      <Typography
                        sx={{
                          display:"flex",
                          background:"#355b8c",
                          color:"#fff",
                          alignItems:"center",
                          justifyContent:"center",
                          height: "15px",
                          width: "50px",
                          border: "1px solid grey",
                          fontSize: "6px",
                          borderRadius: "25px",
                          "&:hover": {
                            color: "black",
                            background:"white"
                          },
                        }}>
                        Score 1
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <a
              style={{
                marginLeft: "1rem",
                textDecoration: "none",
                color: "#4287f5",
              }}
              href="/">
              See All{" "}
            </a>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default MainSection;
