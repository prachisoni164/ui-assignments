import React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        cursor: "pointer",
        maxWidth: 250,
        transition: "0.3s",
        "&:hover": { boxShadow: 3 },
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details of ${product.title}`}
    >
      <CardMedia
        component="img"
        height="150"
        image={product.thumbnail}
        alt={product.name || "Product Image"}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
          }}
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" height={"100px"}>
          {product.description}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="flex-end" mt={2}>
        <Button
          onClick={handleCardClick}
          size="small"
          color="primary"
          sx={{
            marginRight: "10px",
            marginBottom: "10px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
