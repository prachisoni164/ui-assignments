import React from "react";
import "../../styles/about.styles.css";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      width={"60%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      height={"75vh"}
      sx={{ padding: 2, margin: "auto" }}
    >
      <Typography variant="h4" sx={{ my: 3, textAlign: "center" }} gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Welcome to our company! We are dedicated to providing exceptional
        services and solutions that cater to the needs of our clients. Our
        mission is to deliver innovative and effective strategies that empower
        businesses to thrive in today&apos;s competitive landscape.
      </Typography>
      <Typography variant="h4" sx={{ my: 3, textAlign: "center" }} gutterBottom>
        Our Team
      </Typography>
      <Typography variant="body1">
        Our team consists of highly skilled professionals with diverse
        backgrounds and expertise. We are passionate about what we do and
        committed to delivering the best outcomes for our clients.
      </Typography>
    </Box>
  );
};

export default About;
