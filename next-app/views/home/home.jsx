"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const Home = () => {
  const [greeting, setGreeting] = useState(""); // Initialize state for greeting

  useEffect(() => {
    const hour = new Date().getHours();

    // Set the greeting based on the time of day
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []); // Run only once when the component mounts

  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ my: 1 }}>
        {greeting}
      </Typography>
      <Typography variant="h4" sx={{ my: 1 }}>
        Welcome to Next-App
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Your one-stop solution for all your needs.
      </Typography>
      <Link href="/contact" passHref>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
