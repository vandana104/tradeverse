import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

import {
  MicOutlined,
  NotificationsActiveOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { Bubble} from 'react-chartjs-2'

function MainSection() {
    const data = {
        datasets: [
          {
            label: 'Bubbles',
            data: [
              { x: '12:00pm', y: 20, r: 10 }, // Sample data point 1
              { x: '12:15pm', y: 40, r: 20 }, // Sample data point 2
              { x: '12:30pm', y: 60, r: 30 }, // Sample data point 3
              { x: '12:45pm', y: 80, r: 40 }, // Sample data point 4
              { x: '1:00pm', y: 100, r: 50 }, // Sample data point 5
              // Add more data points as needed
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',  // Sample color for bubble 1
              'rgba(54, 162, 235, 0.6)', // Sample color for bubble 2
              'rgba(255, 206, 86, 0.6)', // Sample color for bubble 3
              'rgba(75, 192, 192, 0.6)', // Sample color for bubble 4
              'rgba(153, 102, 255, 0.6)', // Sample color for bubble 5
              // Add more colors as needed
            ],
          },
        ],
      };
    
      // Configuration options
      const options = {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            max: 1, // Maximum value on the x-axis (1:00pm)
          },
          y: {
            type: 'linear',
            position: 'left',
            max: 100, // Maximum value on the y-axis (100 units)
          },
        },
      };
      

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
        <Box  sx={{ width: 600, height: 400 }}>
        <Bubble data={data} options={options} />
        </Box>
        {/* 3. Table section */}
        <Box></Box> 
      </Box>
    </Box>
  );
}

export default MainSection;
