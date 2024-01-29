import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { logout as logoutService } from "@/app/redux/services/authService";
import { setAuth } from "@/app/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";

// import { IconListCheck, IconMail, IconSettings, IconUser } from "@tabler/icons-react";

const Profile = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const userAuth = useAppSelector(state => state.auth.user)

  const [anchorEl2, setAnchorEl2] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const logout = () => {
    setLoading(true)
    setTimeout(async () => {
      console.log('logout');
      
      const logoutResponse = await logoutService()  

      if(logoutResponse){
        dispatch(setAuth({ user: null, token: null }))
        // localStorage.removeItem('previousPath')
        router.push('/login')
        setLoading(false)
      }
    }, 2000)
  }

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
            color: "primary.main",
          }),
        }}
        onClick={handleClick2}
      >
        <Avatar
          // src="/images/profile/user-1.jpg"
          alt="image"
          sx={{
            width: 35,
            height: 35,
            bgcolor: 'primary.main',
            border: '1px solid #fff'
          }}
        >
          {/* {userAuth?.firstName[0]} */}
        </Avatar>
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
        <Box mt={1} py={1} px={2}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={logout}
          >
            {!loading ? 'Logout' : <CircularProgress size={20} />}
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default Profile;
