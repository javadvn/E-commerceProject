import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { BasketContext } from "./PrivatePages/BasketContext";

function HeaderTop() {
  let navigate = useNavigate();
  const { basket } = useContext(BasketContext);
  const [basketItemCount, setBasketItemCount] = useState(0);

  useEffect(() => {
    setBasketItemCount(basket.length);
  }, [basket]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => navigate("/login")}>Sign In</MenuItem>
      <MenuItem onClick={() => navigate("/signup")}>Sign Up</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show basket"
          color="inherit"
          onClick={() => navigate("/cart")}
        >
          <Badge badgeContent={basketItemCount} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
        <Tooltip title="Basket">
          <p>Basket</p>
        </Tooltip>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", sm: "block" },
                cursor: "pointer",
                color: "black",
              }}
              onClick={() => navigate("/")}
            >
              E-commerce
            </Typography>
            <Tooltip title="Admin Panel">
              <IconButton
                size="large"
                aria-label="admin panel"
                color="inherit"
                onClick={() => navigate("/adminproducts")}
              >
                <Typography
                  variant="body1"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
                >
                  Admin Panel
                </Typography>
              </IconButton>
            </Tooltip>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Tooltip title="Basket">
                <IconButton
                  size="large"
                  aria-label="show basket"
                  color="inherit"
                  onClick={() => navigate("/cart")}
                >
                  <Badge badgeContent={basketItemCount} color="error">
                    <ShoppingBasketIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}

export default HeaderTop;
