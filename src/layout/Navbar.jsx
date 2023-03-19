import {  Notifications, Pets  } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Menu,
  styled,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#F7F7F7",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));



export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h2"  color={'#81c784'} sx={{fontWeight: 'bold'}}>
          LOGO
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder=" Arama Yap" />
        </Search>
        <Button variant="contained" color='success'>Üye Ol</Button>
        <Icons color="#81c784">
          <FacebookIcon />
          <InstagramIcon/>
          <TwitterIcon/>
          <LinkedInIcon/>
          <YouTubeIcon/>
          </Icons>
          <Icons color="#9DA8C3">
          <Badge badgeContent={6} color="error">
            <Notifications/>
          </Badge>
          <ViewHeadlineIcon/>
          </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        
      >
        
      </Menu>
    </AppBar>
  );
}
