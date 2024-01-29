import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import {
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Search = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="show 11 new notifications"
        color="inherit"
        aria-controls="msgs-menu"
        aria-haspopup="true"
        sx={{
          ...(typeof anchorEl2 === "object" && {
            color: "text.secondary",
          }),
        }}
        onClick={handleClick2}
      >
       <IconSearch />
      </IconButton>
      {/* ------------------------------------------- */}
      {/* Message Dropdown */}
      {/* ------------------------------------------- */}
      <Menu
        id="msgs-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        sx={{
          "& .MuiMenu-paper": {
            // width: "200px",
            width: "150px",
          },
        }}
      >
        <MenuItem>
          {/* <ListItemIcon>
            <IconUser width={20} />
          </ListItemIcon> */}
          <ListItemText>Option 1</ListItemText>
        </MenuItem>
        <MenuItem>
          {/* <ListItemIcon>
            <IconListCheck width={20} />
          </ListItemIcon> */}
          <ListItemText>Option 2</ListItemText>
        </MenuItem>
        {/* <MenuItem>
          <ListItemIcon>
            <IconSettings width={20} />
          </ListItemIcon>
          <ListItemText>Option 3</ListItemText>
        </MenuItem> */}
      </Menu>
    </Box>
  );
};

export default Search;
