"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography, Alert } from "@mui/material";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from reloading the page
    setSubmitted(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="75vh"
      padding={2}
    >
      <Typography variant="h4" sx={{ my: 3 }} gutterBottom>
        Contact Us
      </Typography>

      {submitted ? (
        <Alert severity="success">
          Thank you for reaching out, {form.name}! We'll get back to you soon.
        </Alert>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          width="100%"
          maxWidth="450px"
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 40,
                marginBottom: "12px",
                "& input": {
                  padding: "10px",
                },
              },
              "& .MuiInputLabel-root": {
                top: "-4px",
                fontSize: "0.875rem",
              },
            }}
          />

          <TextField
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 40, // Set height for input field
                marginBottom: "12px",
                "& input": {
                  padding: "10px", // Adjust padding inside input
                },
              },
              "& .MuiInputLabel-root": {
                top: "-4px", // Adjust label positioning
                fontSize: "0.875rem", // Adjust font size for label
              },
            }}
          />

          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleInputChange}
            required
            multiline
            rows={4}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                marginBottom: "12px",
                "& input": {
                  padding: "10px",
                },
              },
              "& .MuiInputLabel-root": {
                top: "-4px",
                fontSize: "0.875rem",
              },
            }}
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Contact;
