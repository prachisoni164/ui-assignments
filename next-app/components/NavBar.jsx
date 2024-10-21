"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Correct import
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname(); // Get current route
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Define the menu items
  const menuItems = [
    { name: "Products", path: "/products" },
    { name: "Quotes", path: "/quotes" },
    { name: "Services", path: "/services" },
    { name: "Posts", path: "/posts" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            display: {
              xs: "block",
              sm: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            },
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            Next-App
          </Link>
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.name}
              color="inherit"
              sx={{
                textDecoration: pathname.includes(item.path)
                  ? "underline"
                  : "none",
                textUnderlineOffset: "4px",
                "&:hover": {
                  textDecoration: "underline",
                  backgroundColor: "transparent",
                },
              }}
            >
              <Link
                href={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.name}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.name}>
                <ListItemText>
                  <Link
                    href={item.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.name}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
