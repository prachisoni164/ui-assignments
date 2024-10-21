import React, { useContext } from "react";
import { PostContext } from "../../context/post-context";
import { Box, Typography } from "@mui/material";

const PostById = (id) => {
  const posts = useContext(PostContext); // Access the post data from context

  const postId = id.id; // Access the dynamic route parameter

  // Find the post with the specific id
  const post = posts.find((post) => post.id === parseInt(postId));

  return (
    <Box
      height="75vh"
      width="60%"
      margin="auto"
      padding={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {post ? (
        <>
          <Typography
            variant="h4"
            sx={{ my: 3, textAlign: "left" }}
            gutterBottom
          >
            {post.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {post.content}
          </Typography>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </Box>
  );
};

export default PostById;
