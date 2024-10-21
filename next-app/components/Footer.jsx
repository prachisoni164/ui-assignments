import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterBar = () => {
  const pathname = usePathname(); // Get current route

  const menuItems = [
    { name: "Products", path: "/products" },
    { name: "Quotes", path: "/quotes" },
    { name: "Services", path: "/services" },
    { name: "Posts", path: "/posts" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        p: 3,
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} All rights reserved.
      </Typography>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <Typography
              variant="body2"
              color={
                pathname.includes(item.path) ? "primary.main" : "textSecondary"
              }
              sx={{
                textDecoration: pathname.includes(item.path)
                  ? "underline"
                  : "none",
                textUnderlineOffset: "4px",
                "&:hover": {
                  textDecoration: "underline",
                  color: "primary.main",
                },
                mx: 1,
                cursor: "pointer",
              }}
            >
              {item.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default FooterBar;
