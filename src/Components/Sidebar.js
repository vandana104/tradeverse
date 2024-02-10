import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import {
  AccountBalanceOutlined,
  RunCircleOutlined,
  NotificationsActiveOutlined,
  PhonelinkLockOutlined,
  LanguageOutlined,
} from "@mui/icons-material";

const listItems = [
  { icon: <LanguageOutlined />, text: "News Quant" },
  { icon: <AccountBalanceOutlined />, text: "Real Economic Indicators" },
  { icon: <RunCircleOutlined />, text: "One Score" },
  { icon: <NotificationsActiveOutlined />, text: "Alert Central" },
  { icon: <PhonelinkLockOutlined />, text: "Customer Support" },
];

function Sidebar() {
  return (
    <Box
      width="20%"
      minHeight="100vh"
      boxShadow="4px 0px 8px rgba(0, 0, 0, 0.1)">
      <Typography variant="h6" padding="50px 0 30px 10px">
        TRADEVERSE
      </Typography>
      <Typography variant="caption" color="grey">
        MAIN MENU
      </Typography>
      <List>
        {listItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              "&:hover": {
                "& .MuiListItemIcon-root": {
                  color: "#fff",
                },
              },
            }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography
                color="grey"
                variant="body2"
                sx={{
                  fontSize: "0.8rem",
                  "&:hover": {
                    color: "black", // Text color on hover
                    "& .MuiListItemIcon-root": {
                      color: "#fff",
                    },
                  },
                }}>
                {item.text}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
