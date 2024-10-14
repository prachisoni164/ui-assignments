import { useContext } from "react"
import { PostProvider, PostContext } from "../context/post-context"
import Link from "next/link";

const Posts = () => {
  const posts = useContext(PostContext); // Access the post data from context

  return (
    <div className="container">
      <h1>our posts</h1>
      <ul className="cardList">
          {posts.map(post => (
              <Link href={`/posts/${post.id}`} key={post.id}>
                <li key={post.id} className="card pointer">
                  <h2 className="text-bold">{post.title}</h2>
                  <p>{post.content}</p>
                </li>
              </Link>
          ))}
      </ul>
  </div>
)};

export default Posts