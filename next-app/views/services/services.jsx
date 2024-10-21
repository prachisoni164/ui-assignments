import React, { useContext } from "react";
import "../../styles/services.styles.css";
import { ServiceContext } from "../../context/service-context";
import Link from "next/link";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

const Services = () => {
  const services = useContext(ServiceContext); // Access the services data from context

  return (
    <Box height="75vh" width="75%" margin="auto" padding={2}>
      <Typography variant="h4" sx={{ my: 3, textAlign: "center" }} gutterBottom>
        Services
      </Typography>

      <Box display="grid" gap={2}>
        {services.map((service) => (
          <Link href={`/services/${service.id}`} key={service.id}>
            <Card
              component="a"
              sx={{
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": { boxShadow: 4 },
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
