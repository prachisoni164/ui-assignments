import { useContext } from "react";
import { ServiceContext } from "../../context/service-context";
import React from "react";
import { Typography, Box } from "@mui/material";

const ServiceById = ({ id }) => {
  const services = useContext(ServiceContext);

  const serviceId = id;

  const service = services.find(
    (service) => service.id === parseInt(serviceId)
  );

  return (
    <Box
      sx={{
        padding: 2,
        textAlign: "center",
        minHeight: "75vh",
        width: "50%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        {service.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontStyle: "italic" }}
        color="textSecondary"
      >
        {service.content}
      </Typography>
    </Box>
  );
};

export default ServiceById;
