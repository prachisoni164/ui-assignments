import React, { useContext } from "react";
import { PostContext } from "../../context/post-context";
import Link from "next/link";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

const Posts = () => {
  const posts = useContext(PostContext); // Access the post data from context

  return (
    <Box height="75vh" width="75%" margin="auto" padding={2}>
      <Typography variant="h4" sx={{ my: 3, textAlign: "center" }} gutterBottom>
        Posts
      </Typography>

      <Box display="grid" gap={2}>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
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
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {post.content}
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

export default Posts;
